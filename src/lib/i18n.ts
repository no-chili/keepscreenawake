export type Language = "en" | "zh" | "ja" | "ko" | "es" | "fr" | "de" | "ru";

export interface Translations {
  title: string;
  description: string;
  toggleLabel: string;
  status: {
    active: string;
    inactive: string;
  };
  timer: {
    label: string;
    running: string;
    stopped: string;
  };
  instructions: {
    keepTabOpen: string;
    dontMinimize: string;
    worksOnBrowsers: string;
  };
  settings: {
    title: string;
    theme: string;
    customColors: string;
    reset: string;
    apply: string;
    backgroundColor: string;
    primaryColor: string;
    colorCustomization: string;
    recommendedThemes: string;
  };
  faq: {
    title: string;
    howItWorks: {
      question: string;
      answer: string;
    };
    notWorking: {
      question: string;
      answer: string;
    };
    safety: {
      question: string;
      answer: string;
    };
    mobile: {
      question: string;
      answer: string;
    };
  };
  languages: {
    en: string;
    zh: string;
    ja: string;
    ko: string;
    es: string;
    fr: string;
    de: string;
    ru: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    title: "Keep Screen Awake",
    description: "Free online tool to prevent your computer from sleeping",
    toggleLabel: "Keep Screen Awake",
    status: {
      active: "Screen is being kept awake",
      inactive: "Screen will sleep normally",
    },
    timer: {
      label: "Timer",
      running: "Running",
      stopped: "Stopped",
    },
    instructions: {
      keepTabOpen: "Keep this tab open and visible",
      dontMinimize: "Don't minimize the window",
      worksOnBrowsers: "Works on all modern browsers",
    },
    settings: {
      title: "Settings",
      theme: "Theme",
      customColors: "Custom Colors",
      reset: "Reset to Default",
      apply: "Apply",
      backgroundColor: "Background Color",
      primaryColor: "Primary Color",
      colorCustomization: "Click on the color squares to customize your experience. Changes are automatically saved and applied throughout the app.",
      recommendedThemes: "Recommended Themes",
    },
    faq: {
      title: "Frequently Asked Questions",
      howItWorks: {
        question: "How does Keep Screen Awake work?",
        answer:
          "Keep Screen Awake uses the Screen Wake Lock API to prevent your computer from going to sleep. Simply toggle the switch and keep this browser window open and visible to maintain screen wakefulness.",
      },
      notWorking: {
        question: "Why isn't Keep Screen Awake working on my device?",
        answer:
          "Ensure you're using a modern browser that supports the Wake Lock API. Keep the browser window active and don't minimize it. Some devices may have additional power management settings that need adjustment.",
      },
      safety: {
        question: "Is Keep Screen Awake safe to use?",
        answer:
          "Yes, Keep Screen Awake is completely safe. The application only prevents sleep while the browser window is active. Once you close the window or toggle it off, your computer will return to normal power management settings.",
      },
      mobile: {
        question: "Does it work on mobile devices?",
        answer:
          "The Wake Lock API is primarily designed for desktop browsers. Mobile devices have different power management systems and may not support this feature.",
      },
    },
    languages: {
      en: "English",
      zh: "中文",
      ja: "日本語",
      ko: "한국어",
      es: "Español",
      fr: "Français",
      de: "Deutsch",
      ru: "Русский",
    },
  },
  zh: {
    title: "保持屏幕唤醒",
    description: "免费在线工具，防止电脑进入睡眠状态",
    toggleLabel: "保持屏幕唤醒",
    status: {
      active: "屏幕正在保持唤醒状态",
      inactive: "屏幕将正常进入睡眠",
    },
    timer: {
      label: "计时器",
      running: "运行中",
      stopped: "已停止",
    },
    instructions: {
      keepTabOpen: "保持此标签页打开和可见",
      dontMinimize: "不要最小化窗口",
      worksOnBrowsers: "适用于所有现代浏览器",
    },
    settings: {
      title: "设置",
      theme: "主题",
      customColors: "自定义颜色",
      reset: "重置为默认",
      apply: "应用",
      backgroundColor: "背景颜色",
      primaryColor: "主色调",
      colorCustomization: "点击颜色方块来自定义您的体验。更改会自动保存并在整个应用程序中应用。",
      recommendedThemes: "推荐主题",
    },
    faq: {
      title: "常见问题",
      howItWorks: {
        question: "保持屏幕唤醒是如何工作的？",
        answer:
          "保持屏幕唤醒使用屏幕唤醒锁定API来防止您的电脑进入睡眠状态。只需切换开关并保持此浏览器窗口打开和可见即可维持屏幕唤醒状态。",
      },
      notWorking: {
        question: "为什么保持屏幕唤醒在我的设备上不工作？",
        answer:
          "确保您使用的是支持唤醒锁定API的现代浏览器。保持浏览器窗口处于活动状态，不要最小化它。某些设备可能有需要调整的额外电源管理设置。",
      },
      safety: {
        question: "使用保持屏幕唤醒安全吗？",
        answer:
          "是的，保持屏幕唤醒完全安全。该应用程序仅在浏览器窗口处于活动状态时防止睡眠。一旦您关闭窗口或关闭开关，您的电脑将恢复正常电源管理设置。",
      },
      mobile: {
        question: "它在移动设备上工作吗？",
        answer:
          "唤醒锁定API主要为桌面浏览器设计。移动设备具有不同的电源管理系统，可能不支持此功能。",
      },
    },
    languages: {
      en: "English",
      zh: "中文",
      ja: "日本語",
      ko: "한국어",
      es: "Español",
      fr: "Français",
      de: "Deutsch",
      ru: "Русский",
    },
  },
  ja: {
    title: "画面を起動状態に保つ",
    description: "コンピューターをスリープ状態にしない無料オンラインツール",
    toggleLabel: "画面を起動状態に保つ",
    status: {
      active: "画面は起動状態に保たれています",
      inactive: "画面は通常通りスリープします",
    },
    timer: {
      label: "タイマー",
      running: "実行中",
      stopped: "停止中",
    },
    instructions: {
      keepTabOpen: "このタブを開いたまま表示状態に保つ",
      dontMinimize: "ウィンドウを最小化しない",
      worksOnBrowsers: "すべてのモダンブラウザで動作",
    },
    settings: {
      title: "設定",
      theme: "テーマ",
      customColors: "カスタムカラー",
      reset: "デフォルトにリセット",
      apply: "適用",
      backgroundColor: "背景色",
      primaryColor: "プライマリカラー",
      colorCustomization: "色の四角をクリックして体験をカスタマイズします。変更は自動的に保存され、アプリ全体に適用されます。",
      recommendedThemes: "推奨テーマ",
    },
    faq: {
      title: "よくある質問",
      howItWorks: {
        question: "画面を起動状態に保つはどのように動作しますか？",
        answer:
          "画面を起動状態に保つは、Screen Wake Lock APIを使用してコンピューターがスリープ状態になるのを防ぎます。スイッチを切り替えて、このブラウザウィンドウを開いたまま表示状態に保つだけで、画面の起動状態を維持できます。",
      },
      notWorking: {
        question: "画面を起動状態に保つがデバイスで動作しないのはなぜですか？",
        answer:
          "Wake Lock APIをサポートするモダンブラウザを使用していることを確認してください。ブラウザウィンドウをアクティブに保ち、最小化しないでください。一部のデバイスでは、調整が必要な追加の電源管理設定がある場合があります。",
      },
      safety: {
        question: "画面を起動状態に保つは安全に使用できますか？",
        answer:
          "はい、画面を起動状態に保つは完全に安全です。アプリケーションは、ブラウザウィンドウがアクティブな間のみスリープを防ぎます。ウィンドウを閉じるか、オフにすると、コンピューターは通常の電源管理設定に戻ります。",
      },
      mobile: {
        question: "モバイルデバイスで動作しますか？",
        answer:
          "Wake Lock APIは主にデスクトップブラウザ用に設計されています。モバイルデバイスには異なる電源管理システムがあり、この機能をサポートしていない場合があります。",
      },
    },
    languages: {
      en: "English",
      zh: "中文",
      ja: "日本語",
      ko: "한국어",
      es: "Español",
      fr: "Français",
      de: "Deutsch",
      ru: "Русский",
    },
  },
  ko: {
    title: "화면 깨우기 유지",
    description: "컴퓨터가 절전 모드로 들어가지 않도록 하는 무료 온라인 도구",
    toggleLabel: "화면 깨우기 유지",
    status: {
      active: "화면이 깨워진 상태로 유지되고 있습니다",
      inactive: "화면이 정상적으로 절전 모드로 들어갑니다",
    },
    timer: {
      label: "타이머",
      running: "실행 중",
      stopped: "중지됨",
    },
    instructions: {
      keepTabOpen: "이 탭을 열고 보이게 유지",
      dontMinimize: "창을 최소화하지 마세요",
      worksOnBrowsers: "모든 최신 브라우저에서 작동",
    },
    settings: {
      title: "설정",
      theme: "테마",
      customColors: "사용자 정의 색상",
      reset: "기본값으로 재설정",
      apply: "적용",
      backgroundColor: "배경 색상",
      primaryColor: "주요 색상",
      colorCustomization: "색상 사각형을 클릭하여 경험을 사용자 정의하세요. 변경 사항은 자동으로 저장되고 앱 전체에 적용됩니다.",
      recommendedThemes: "권장 테마",
    },
    faq: {
      title: "자주 묻는 질문",
      howItWorks: {
        question: "화면 깨우기 유지는 어떻게 작동하나요?",
        answer:
          "화면 깨우기 유지는 Screen Wake Lock API를 사용하여 컴퓨터가 절전 모드로 들어가는 것을 방지합니다. 스위치를 토글하고 이 브라우저 창을 열고 보이게 유지하여 화면 깨움을 유지하세요.",
      },
      notWorking: {
        question:
          "화면 깨우기 유지가 내 장치에서 작동하지 않는 이유는 무엇인가요?",
        answer:
          "Wake Lock API를 지원하는 최신 브라우저를 사용하고 있는지 확인하세요. 브라우저 창을 활성 상태로 유지하고 최소화하지 마세요. 일부 장치에는 조정이 필요한 추가 전원 관리 설정이 있을 수 있습니다.",
      },
      safety: {
        question: "화면 깨우기 유지를 사용하는 것이 안전한가요?",
        answer:
          "네, 화면 깨우기 유지는 완전히 안전합니다. 애플리케이션은 브라우저 창이 활성 상태일 때만 절전을 방지합니다. 창을 닫거나 토글을 끄면 컴퓨터는 정상적인 전원 관리 설정으로 돌아갑니다.",
      },
      mobile: {
        question: "모바일 장치에서 작동하나요?",
        answer:
          "Wake Lock API는 주로 데스크톱 브라우저용으로 설계되었습니다. 모바일 장치에는 다른 전원 관리 시스템이 있으며 이 기능을 지원하지 않을 수 있습니다.",
      },
    },
    languages: {
      en: "English",
      zh: "中文",
      ja: "日本語",
      ko: "한국어",
      es: "Español",
      fr: "Français",
      de: "Deutsch",
      ru: "Русский",
    },
  },
  es: {
    title: "Mantener Pantalla Despierta",
    description:
      "Herramienta gratuita en línea para evitar que tu computadora se duerma",
    toggleLabel: "Mantener Pantalla Despierta",
    status: {
      active: "La pantalla se mantiene despierta",
      inactive: "La pantalla se dormirá normalmente",
    },
    timer: {
      label: "Temporizador",
      running: "Ejecutando",
      stopped: "Detenido",
    },
    instructions: {
      keepTabOpen: "Mantén esta pestaña abierta y visible",
      dontMinimize: "No minimices la ventana",
      worksOnBrowsers: "Funciona en todos los navegadores modernos",
    },
    settings: {
      title: "Configuración",
      theme: "Tema",
      customColors: "Colores Personalizados",
      reset: "Restablecer por Defecto",
      apply: "Aplicar",
      backgroundColor: "Color de Fondo",
      primaryColor: "Color Primario",
      colorCustomization: "Haz clic en los cuadrados de color para personalizar tu experiencia. Los cambios se guardan automáticamente y se aplican en toda la aplicación.",
      recommendedThemes: "Temas Recomendados",
    },
    faq: {
      title: "Preguntas Frecuentes",
      howItWorks: {
        question: "¿Cómo funciona Mantener Pantalla Despierta?",
        answer:
          "Mantener Pantalla Despierta usa la API de Wake Lock de Pantalla para evitar que tu computadora se duerma. Simplemente activa el interruptor y mantén esta ventana del navegador abierta y visible para mantener la pantalla despierta.",
      },
      notWorking: {
        question:
          "¿Por qué no funciona Mantener Pantalla Despierta en mi dispositivo?",
        answer:
          "Asegúrate de usar un navegador moderno que soporte la API de Wake Lock. Mantén la ventana del navegador activa y no la minimices. Algunos dispositivos pueden tener configuraciones adicionales de gestión de energía que necesitan ajuste.",
      },
      safety: {
        question: "¿Es seguro usar Mantener Pantalla Despierta?",
        answer:
          "Sí, Mantener Pantalla Despierta es completamente seguro. La aplicación solo previene el sueño mientras la ventana del navegador está activa. Una vez que cierres la ventana o la desactives, tu computadora volverá a la configuración normal de gestión de energía.",
      },
      mobile: {
        question: "¿Funciona en dispositivos móviles?",
        answer:
          "La API de Wake Lock está diseñada principalmente para navegadores de escritorio. Los dispositivos móviles tienen sistemas de gestión de energía diferentes y pueden no soportar esta función.",
      },
    },
    languages: {
      en: "English",
      zh: "中文",
      ja: "日本語",
      ko: "한국어",
      es: "Español",
      fr: "Français",
      de: "Deutsch",
      ru: "Русский",
    },
  },
  fr: {
    title: "Garder l'Écran Réveillé",
    description:
      "Outil gratuit en ligne pour empêcher votre ordinateur de s'endormir",
    toggleLabel: "Garder l'Écran Réveillé",
    status: {
      active: "L'écran est maintenu réveillé",
      inactive: "L'écran s'endormira normalement",
    },
    timer: {
      label: "Minuteur",
      running: "En cours",
      stopped: "Arrêté",
    },
    instructions: {
      keepTabOpen: "Gardez cet onglet ouvert et visible",
      dontMinimize: "Ne minimisez pas la fenêtre",
      worksOnBrowsers: "Fonctionne sur tous les navigateurs modernes",
    },
    settings: {
      title: "Paramètres",
      theme: "Thème",
      customColors: "Couleurs Personnalisées",
      reset: "Réinitialiser par Défaut",
      apply: "Appliquer",
      backgroundColor: "Couleur de Fond",
      primaryColor: "Couleur Principale",
      colorCustomization: "Cliquez sur les carrés de couleur pour personnaliser votre expérience. Les modifications sont automatiquement sauvegardées et appliquées dans toute l'application.",
      recommendedThemes: "Thèmes Recommandés",
    },
    faq: {
      title: "Questions Fréquemment Posées",
      howItWorks: {
        question: "Comment fonctionne Garder l'Écran Réveillé ?",
        answer:
          "Garder l'Écran Réveillé utilise l'API Wake Lock de l'écran pour empêcher votre ordinateur de s'endormir. Activez simplement l'interrupteur et gardez cette fenêtre de navigateur ouverte et visible pour maintenir l'écran réveillé.",
      },
      notWorking: {
        question:
          "Pourquoi Garder l'Écran Réveillé ne fonctionne-t-il pas sur mon appareil ?",
        answer:
          "Assurez-vous d'utiliser un navigateur moderne qui prend en charge l'API Wake Lock. Gardez la fenêtre du navigateur active et ne la minimisez pas. Certains appareils peuvent avoir des paramètres de gestion d'énergie supplémentaires qui nécessitent un ajustement.",
      },
      safety: {
        question: "Est-il sûr d'utiliser Garder l'Écran Réveillé ?",
        answer:
          "Oui, Garder l'Écran Réveillé est complètement sûr. L'application ne prévient le sommeil que lorsque la fenêtre du navigateur est active. Une fois que vous fermez la fenêtre ou la désactivez, votre ordinateur reviendra aux paramètres normaux de gestion d'énergie.",
      },
      mobile: {
        question: "Fonctionne-t-il sur les appareils mobiles ?",
        answer:
          "L'API Wake Lock est principalement conçue pour les navigateurs de bureau. Les appareils mobiles ont des systèmes de gestion d'énergie différents et peuvent ne pas prendre en charge cette fonction.",
      },
    },
    languages: {
      en: "English",
      zh: "中文",
      ja: "日本語",
      ko: "한국어",
      es: "Español",
      fr: "Français",
      de: "Deutsch",
      ru: "Русский",
    },
  },
  de: {
    title: "Bildschirm Wachhalten",
    description:
      "Kostenloses Online-Tool, um zu verhindern, dass Ihr Computer in den Schlafmodus wechselt",
    toggleLabel: "Bildschirm Wachhalten",
    status: {
      active: "Der Bildschirm wird wach gehalten",
      inactive: "Der Bildschirm wird normal in den Schlafmodus wechseln",
    },
    timer: {
      label: "Timer",
      running: "Läuft",
      stopped: "Gestoppt",
    },
    instructions: {
      keepTabOpen: "Halten Sie diesen Tab offen und sichtbar",
      dontMinimize: "Minimieren Sie das Fenster nicht",
      worksOnBrowsers: "Funktioniert auf allen modernen Browsern",
    },
    settings: {
      title: "Einstellungen",
      theme: "Thema",
      customColors: "Benutzerdefinierte Farben",
      reset: "Auf Standard zurücksetzen",
      apply: "Anwenden",
      backgroundColor: "Hintergrundfarbe",
      primaryColor: "Primärfarbe",
      colorCustomization: "Klicken Sie auf die Farbquadrate, um Ihre Erfahrung anzupassen. Änderungen werden automatisch gespeichert und in der gesamten App angewendet.",
      recommendedThemes: "Empfohlene Themen",
    },
    faq: {
      title: "Häufig gestellte Fragen",
      howItWorks: {
        question: "Wie funktioniert Bildschirm Wachhalten?",
        answer:
          "Bildschirm Wachhalten verwendet die Screen Wake Lock API, um zu verhindern, dass Ihr Computer in den Schlafmodus wechselt. Schalten Sie einfach den Schalter um und halten Sie dieses Browser-Fenster geöffnet und sichtbar, um den Bildschirm wach zu halten.",
      },
      notWorking: {
        question:
          "Warum funktioniert Bildschirm Wachhalten auf meinem Gerät nicht?",
        answer:
          "Stellen Sie sicher, dass Sie einen modernen Browser verwenden, der die Wake Lock API unterstützt. Halten Sie das Browser-Fenster aktiv und minimieren Sie es nicht. Einige Geräte haben möglicherweise zusätzliche Energieverwaltungseinstellungen, die angepasst werden müssen.",
      },
      safety: {
        question: "Ist es sicher, Bildschirm Wachhalten zu verwenden?",
        answer:
          "Ja, Bildschirm Wachhalten ist völlig sicher. Die Anwendung verhindert nur den Schlafmodus, während das Browser-Fenster aktiv ist. Sobald Sie das Fenster schließen oder es ausschalten, kehrt Ihr Computer zu den normalen Energieverwaltungseinstellungen zurück.",
      },
      mobile: {
        question: "Funktioniert es auf mobilen Geräten?",
        answer:
          "Die Wake Lock API ist hauptsächlich für Desktop-Browser konzipiert. Mobile Geräte haben andere Energieverwaltungssysteme und unterstützen möglicherweise diese Funktion nicht.",
      },
    },
    languages: {
      en: "English",
      zh: "中文",
      ja: "日本語",
      ko: "한국어",
      es: "Español",
      fr: "Français",
      de: "Deutsch",
      ru: "Русский",
    },
  },
  ru: {
    title: "Держать Экран Активным",
    description:
      "Бесплатный онлайн-инструмент для предотвращения перехода компьютера в спящий режим",
    toggleLabel: "Держать Экран Активным",
    status: {
      active: "Экран поддерживается в активном состоянии",
      inactive: "Экран будет переходить в спящий режим как обычно",
    },
    timer: {
      label: "Таймер",
      running: "Работает",
      stopped: "Остановлен",
    },
    instructions: {
      keepTabOpen: "Держите эту вкладку открытой и видимой",
      dontMinimize: "Не сворачивайте окно",
      worksOnBrowsers: "Работает во всех современных браузерах",
    },
    settings: {
      title: "Настройки",
      theme: "Тема",
      customColors: "Пользовательские цвета",
      reset: "Сбросить по умолчанию",
      apply: "Применить",
      backgroundColor: "Цвет фона",
      primaryColor: "Основной цвет",
      colorCustomization: "Нажмите на цветные квадраты, чтобы настроить ваш опыт. Изменения автоматически сохраняются и применяются во всем приложении.",
      recommendedThemes: "Рекомендуемые темы",
    },
    faq: {
      title: "Часто задаваемые вопросы",
      howItWorks: {
        question: "Как работает Держать Экран Активным?",
        answer:
          "Держать Экран Активным использует API Screen Wake Lock для предотвращения перехода вашего компьютера в спящий режим. Просто переключите переключатель и держите это окно браузера открытым и видимым для поддержания активности экрана.",
      },
      notWorking: {
        question:
          "Почему Держать Экран Активным не работает на моем устройстве?",
        answer:
          "Убедитесь, что вы используете современный браузер, который поддерживает API Wake Lock. Держите окно браузера активным и не сворачивайте его. Некоторые устройства могут иметь дополнительные настройки управления питанием, которые требуют корректировки.",
      },
      safety: {
        question: "Безопасно ли использовать Держать Экран Активным?",
        answer:
          "Да, Держать Экран Активным полностью безопасен. Приложение предотвращает переход в спящий режим только пока окно браузера активно. Как только вы закроете окно или выключите переключатель, ваш компьютер вернется к обычным настройкам управления питанием.",
      },
      mobile: {
        question: "Работает ли это на мобильных устройствах?",
        answer:
          "API Wake Lock в основном предназначен для настольных браузеров. Мобильные устройства имеют другие системы управления питанием и могут не поддерживать эту функцию.",
      },
    },
    languages: {
      en: "English",
      zh: "中文",
      ja: "日本語",
      ko: "한국어",
      es: "Español",
      fr: "Français",
      de: "Deutsch",
      ru: "Русский",
    },
  },
};

export function getLanguageFromPath(pathname: string): Language {
  const lang = pathname.split("/")[1];
  if (lang && Object.keys(translations).includes(lang)) {
    return lang as Language;
  }
  return "en";
}

export function getTranslation(lang: Language): Translations {
  return translations[lang];
}
