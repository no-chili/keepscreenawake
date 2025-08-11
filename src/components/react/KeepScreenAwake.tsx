import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  getLanguageFromPath,
  getTranslation,
  type Language,
} from "../../lib/i18n";

// 颜色主题变量
interface ColorTheme {
  primary: string; // 主题色（黄色）
  background: string; // 背景色
  secondary: string; // 次要文字色
  border: string; // 边框色
  accent: string; // 强调色
}

const KeepScreenAwake: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState<string>("00:00");
  const [currentLanguage, setCurrentLanguage] = useState<Language>("en");

  const animationFrameRef = useRef<number | undefined>(undefined);

  // 默认颜色主题
  // 默认颜色主题
  const defaultTheme: ColorTheme = {
    primary: "#FFEB3B",
    background: "#181818",
    secondary: "#9CA3AF",
    border: "rgba(255, 255, 255, 0.2)",
    accent: "#FFEB3B",
  };

  // 推荐配色主题
  const recommendedThemes: ColorTheme[] = [
    {
      primary: "#FF6B6B",
      background: "#2C3E50",
      secondary: "#BDC3C7",
      border: "rgba(255, 107, 107, 0.3)",
      accent: "#FF6B6B",
    },
    {
      primary: "#4ECDC4",
      background: "#34495E",
      secondary: "#95A5A6",
      border: "rgba(78, 205, 196, 0.3)",
      accent: "#4ECDC4",
    },
    {
      primary: "#45B7D1",
      background: "#2C3E50",
      secondary: "#BDC3C7",
      border: "rgba(69, 183, 209, 0.3)",
      accent: "#45B7D1",
    },
    {
      primary: "#96CEB4",
      background: "#2C3E50",
      secondary: "#BDC3C7",
      border: "rgba(150, 206, 180, 0.3)",
      accent: "#96CEB4",
    },
    {
      primary: "#FFEAA7",
      background: "#2C3E50",
      secondary: "#BDC3C7",
      border: "rgba(255, 234, 167, 0.3)",
      accent: "#FFEAA7",
    },
  ];

  const [colorTheme, setColorTheme] = useState<ColorTheme>(defaultTheme);

  // 获取当前语言的翻译
  const t = getTranslation(currentLanguage);

  // 检测当前语言
  useEffect(() => {
    const pathname = window.location.pathname;
    const lang = getLanguageFromPath(pathname);
    setCurrentLanguage(lang);
  }, []);

  // 从localStorage加载颜色主题
  useEffect(() => {
    const savedTheme = localStorage.getItem("keepScreenAwake_theme");
    if (savedTheme) {
      try {
        setColorTheme(JSON.parse(savedTheme));
      } catch (error) {
        console.error("Failed to load saved theme:", error);
      }
    }
  }, []);

  // 保存颜色主题到localStorage
  const saveTheme = (newTheme: ColorTheme) => {
    setColorTheme(newTheme);
    localStorage.setItem("keepScreenAwake_theme", JSON.stringify(newTheme));
  };

  // 更新颜色主题
  const updateColor = (key: keyof ColorTheme, value: string) => {
    const newTheme = { ...colorTheme, [key]: value };
    saveTheme(newTheme);
  };

  // 处理颜色选择器
  const handleColorChange = (key: keyof ColorTheme, color: string) => {
    updateColor(key, color);
  };

  // 恢复默认配色
  const resetToDefault = () => {
    saveTheme(defaultTheme);
  };

  // 切换推荐配色
  const applyRecommendedTheme = (theme: ColorTheme) => {
    saveTheme(theme);
  };

  // 格式化时间显示
  const formatTime = (milliseconds: number): string => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    if (hours > 0) {
      return `${hours.toString().padStart(2, "0")}:${(minutes % 60)
        .toString()
        .padStart(2, "0")}:${(seconds % 60).toString().padStart(2, "0")}`;
    } else if (minutes > 0) {
      return `${minutes.toString().padStart(2, "0")}:${(seconds % 60)
        .toString()
        .padStart(2, "0")}`;
    } else {
      return `${seconds.toString().padStart(2, "0")}s`;
    }
  };

  // 更新计时器显示
  const updateTimer = () => {
    if (startTime) {
      const now = Date.now();
      const elapsed = now - startTime;
      setElapsedTime(formatTime(elapsed));
      animationFrameRef.current = requestAnimationFrame(updateTimer);
    }
  };

  // 使用useMemo优化计时器显示，减少重新渲染
  const timerDisplay = useMemo(() => {
    return elapsedTime || "00:00";
  }, [elapsedTime]);

  // 从localStorage加载状态
  useEffect(() => {
    const savedIsActive = localStorage.getItem("keepScreenAwake_active");
    const savedStartTime = localStorage.getItem("keepScreenAwake_startTime");

    if (savedIsActive === "true" && savedStartTime) {
      setIsActive(true);
      setStartTime(parseInt(savedStartTime));
    }
  }, []);

  // 处理计时器动画
  useEffect(() => {
    if (isActive && startTime) {
      updateTimer();
    } else {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      // 重置计时器显示，避免闪动
      setElapsedTime("00:00");
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isActive, startTime]);

  useEffect(() => {
    let wakeLock: WakeLockSentinel | null = null;

    const requestWakeLock = async () => {
      try {
        if ("wakeLock" in navigator) {
          wakeLock = await navigator.wakeLock.request("screen");
          console.log("Wake Lock is active");
        }
      } catch (err) {
        console.error("Wake Lock request failed:", err);
      }
    };

    const releaseWakeLock = async () => {
      if (wakeLock) {
        try {
          await wakeLock.release();
          wakeLock = null;
          console.log("Wake Lock released");
        } catch (err) {
          console.error("Wake Lock release failed:", err);
        }
      }
    };

    if (isActive) {
      requestWakeLock();
    } else {
      releaseWakeLock();
    }

    // Cleanup function
    return () => {
      if (wakeLock) {
        releaseWakeLock();
      }
    };
  }, [isActive]);

  const handleToggle = () => {
    const newIsActive = !isActive;
    setIsActive(newIsActive);

    if (newIsActive) {
      const now = Date.now();
      setStartTime(now);
      localStorage.setItem("keepScreenAwake_active", "true");
      localStorage.setItem("keepScreenAwake_startTime", now.toString());
    } else {
      setStartTime(null);
      setElapsedTime("");
      localStorage.removeItem("keepScreenAwake_active");
      localStorage.removeItem("keepScreenAwake_startTime");
    }
  };

  return (
    <>
      <div
        className="h-screen flex flex-col items-center  justify-center p-8 relative"
        style={{ backgroundColor: colorTheme.background }}
      >
        {/* Main Content */}
        <div className="text-center space-y-8 flex-1 flex flex-col items-center justify-center">
          {/* Title */}
          <h1
            className="text-6xl md:text-8xl font-bold transition-colors duration-300 text-center"
            style={{
              color: isActive ? colorTheme.primary : "white",
            }}
          >
            {t.title}
          </h1>

          {/* Toggle Switch */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <button
              onClick={handleToggle}
              className="relative inline-flex h-16 w-32 items-center rounded-full transition-all duration-500 ease-out cursor-pointer border-4"
              style={{
                backgroundColor: isActive ? colorTheme.primary : "#6B7280",
                borderColor: isActive ? colorTheme.primary : "#6B7280",
                boxShadow: isActive
                  ? `0 0 20px ${colorTheme.primary}4D`
                  : "none",
              }}
            >
              <span
                className="inline-block h-12 w-12 transform rounded-full bg-white transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]"
                style={{
                  transform: isActive ? "translateX(64px)" : "translateX(4px)",
                }}
              />
            </button>

            {/* Timer Display */}
            <div className="text-center">
              <div
                className="text-lg mb-2  transition-all duration-500"
                style={{ color: isActive ? colorTheme.primary : "white" }}
              >
                {t.timer.label}
              </div>
              <div
                className="text-3xl font-mono font-bold px-6 py-3  transition-all duration-500 rounded-lg border min-w-[120px]"
                style={{
                  color: isActive ? colorTheme.primary : "white",
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                  borderColor: isActive ? colorTheme.primary : "white",
                }}
              >
                {timerDisplay}
              </div>
            </div>
          </div>

          {/* Status Text */}
          <p
            className="text-lg md:text-xl max-w-md text-center  transition-all duration-500"
            style={{ color: isActive ? colorTheme.primary : "white" }}
          >
            {isActive ? t.status.active : t.status.inactive}
          </p>

          {/* Instructions */}
          <div
            className="text-sm md:text-base max-w-lg space-y-2 text-center"
            style={{ color: colorTheme.secondary }}
          >
            <p>• {t.instructions.keepTabOpen}</p>
            <p>• {t.instructions.dontMinimize}</p>
            <p>• {t.instructions.worksOnBrowsers}</p>
          </div>
        </div>

        {/* Footer */}
        <div
          className="text-center text-sm mt-auto pb-8"
          style={{ color: colorTheme.secondary }}
        >
          made by no-chili
        </div>
      </div>

      {/* Custom Color Section */}
      <div
        className="h-screen flex flex-col items-center justify-center p-8 relative"
        style={{ backgroundColor: colorTheme.background }}
      >
        <div className="text-center space-y-8 flex-1 flex flex-col items-center justify-center">
          <div className="w-full max-w-4xl">
            <h2
              className="text-4xl md:text-6xl font-bold mb-8"
              style={{
                color: isActive ? colorTheme.primary : colorTheme.primary,
              }}
            >
              {t.settings.customColors}
            </h2>

            <div className="grid md:grid-cols-2 gap-8 h-64">
              {/* Background Color Customization */}
              <div
                className="border flex flex-col rounded-lg p-6"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                  borderColor: colorTheme.border,
                }}
              >
                <h3
                  className="text-2xl font-semibold mb-4"
                  style={{ color: colorTheme.primary }}
                >
                  {t.settings.backgroundColor}
                </h3>
                <div className="flex-1 relative">
                  <input
                    type="color"
                    value={colorTheme.background}
                    onChange={(e) =>
                      handleColorChange("background", e.target.value)
                    }
                    className="w-full h-full rounded-lg cursor-pointer border-2 border-dashed opacity-0 absolute inset-0"
                    style={{ borderColor: colorTheme.border }}
                  />
                  <div
                    className="w-full h-full rounded-lg border-2 border-dashed pointer-events-none"
                    style={{
                      backgroundColor: colorTheme.background,
                      borderColor: colorTheme.border,
                    }}
                  />
                </div>
              </div>

              {/* Primary Color Customization */}
              <div
                className="border flex flex-col rounded-lg p-6"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                  borderColor: colorTheme.border,
                }}
              >
                <h3
                  className="text-2xl font-semibold mb-4"
                  style={{ color: colorTheme.primary }}
                >
                  {t.settings.primaryColor}
                </h3>
                <div className="flex-1 relative">
                  <input
                    type="color"
                    value={colorTheme.primary}
                    onChange={(e) =>
                      handleColorChange("primary", e.target.value)
                    }
                    className="w-full h-full rounded-lg cursor-pointer border-2 border-dashed opacity-0 absolute inset-0"
                    style={{ borderColor: colorTheme.border }}
                  />
                  <div
                    className="w-full h-full rounded-lg border-2 border-dashed pointer-events-none"
                    style={{
                      backgroundColor: colorTheme.primary,
                      borderColor: colorTheme.border,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Customization Note and Reset Button */}
            <div className="mt-6 text-center space-y-6">
              <p
                className="text-sm max-w-2xl mx-auto"
                style={{ color: colorTheme.secondary }}
              >
                {t.settings.colorCustomization}
              </p>

              {/* Recommended Color Themes */}
              <div className="space-y-3">
                <h4
                  className="text-lg font-semibold"
                  style={{ color: colorTheme.primary }}
                >
                  {t.settings.recommendedThemes}
                </h4>
                <div className="flex justify-center items-center gap-3 flex-wrap">
                  {recommendedThemes.map((theme, index) => (
                    <button
                      key={index}
                      onClick={() => applyRecommendedTheme(theme)}
                      className="w-12 h-12 rounded-lg border-2 border-dashed transition-all duration-300 cursor-pointer"
                      style={{
                        backgroundColor: theme.primary,
                        borderColor: colorTheme.border,
                      }}
                      title={`Apply ${theme.primary} color theme`}
                    />
                  ))}
                </div>
              </div>

              {/* Reset to Default Button */}
              <button
                onClick={resetToDefault}
                className="px-6 py-3 rounded-lg border-2 transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                  borderColor: colorTheme.primary,
                  color: colorTheme.primary,
                }}
              >
                <span className="text-lg font-semibold">
                  {t.settings.reset}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div
        className="h-screen flex flex-col items-center justify-center p-8 relative"
        style={{ backgroundColor: colorTheme.background }}
      >
        <div className="text-center space-y-8 flex-1 flex flex-col items-center justify-center">
          <div className="w-full max-w-4xl">
            <h2
              className="text-4xl md:text-6xl font-bold mb-8"
              style={{
                color: isActive ? colorTheme.primary : colorTheme.primary,
              }}
            >
              {t.faq.title}
            </h2>

            <div className="space-y-6 text-left">
              <div
                className="border rounded-lg p-6"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                  borderColor: colorTheme.border,
                }}
              >
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: colorTheme.primary }}
                >
                  {t.faq.howItWorks.question}
                </h3>
                <p
                  className="leading-relaxed"
                  style={{ color: colorTheme.secondary }}
                >
                  {t.faq.howItWorks.answer}
                </p>
              </div>

              <div
                className="border rounded-lg p-6"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                  borderColor: colorTheme.border,
                }}
              >
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: colorTheme.primary }}
                >
                  {t.faq.notWorking.question}
                </h3>
                <p
                  className="leading-relaxed"
                  style={{ color: colorTheme.secondary }}
                >
                  {t.faq.notWorking.answer}
                </p>
              </div>

              <div
                className="border rounded-lg p-6"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                  borderColor: colorTheme.border,
                }}
              >
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: colorTheme.primary }}
                >
                  {t.faq.safety.question}
                </h3>
                <p
                  className="leading-relaxed"
                  style={{ color: colorTheme.secondary }}
                >
                  {t.faq.safety.answer}
                </p>
              </div>

              <div
                className="border rounded-lg p-6"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                  borderColor: colorTheme.border,
                }}
              >
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: colorTheme.primary }}
                >
                  {t.faq.mobile.question}
                </h3>
                <p
                  className="leading-relaxed"
                  style={{ color: colorTheme.secondary }}
                >
                  {t.faq.mobile.answer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 多语言菜单 */}
      <div
        className="h-screen flex flex-col items-center justify-center p-8 relative"
        style={{ backgroundColor: colorTheme.background }}
      >
        <div className="text-center space-y-8 flex-1 flex flex-col items-center justify-center">
          <div className="w-full max-w-4xl">
            <h2
              className="text-4xl md:text-6xl font-bold mb-8"
              style={{ color: colorTheme.primary }}
            >
              {t.languages[currentLanguage]}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(t.languages).map(([langCode, langName]) => (
                <a
                  key={langCode}
                  href={langCode === "en" ? "/" : `/${langCode}`}
                  className="px-6 py-4 rounded-lg border-2 transition-all duration-300 cursor-pointer hover:scale-105"
                  style={{
                    backgroundColor:
                      currentLanguage === langCode
                        ? colorTheme.primary
                        : "rgba(0, 0, 0, 0.2)",
                    borderColor: colorTheme.primary,
                    color:
                      currentLanguage === langCode
                        ? colorTheme.background
                        : colorTheme.primary,
                  }}
                >
                  <span className="text-lg font-semibold">{langName}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KeepScreenAwake;
