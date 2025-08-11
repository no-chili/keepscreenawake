# 多语言功能使用指南

## 概述

Keep Screen Awake 现在支持 8 种语言：

- 🇺🇸 English (默认) - `/`
- 🇨🇳 中文 - `/zh`
- 🇯🇵 日本語 - `/ja`
- 🇰🇷 한국어 - `/ko`
- 🇪🇸 Español - `/es`
- 🇫🇷 Français - `/fr`
- 🇩🇪 Deutsch - `/de`
- 🇷🇺 Русский - `/ru`

## 功能特性

### 1. 自动语言检测

- 访问根路径 `/` 时，系统会自动检测用户浏览器语言
- 如果检测到支持的语言，会自动重定向到对应的语言页面
- 英文作为默认语言，不会自动重定向

### 2. 语言切换菜单

- 在页面底部提供水平布局的多语言菜单
- 当前语言会高亮显示
- 点击任意语言按钮即可切换到对应语言

### 3. 完整的本地化

- 所有用户界面文本都已翻译，包括：
  - 主要功能文本（标题、描述、状态信息）
  - 计时器相关文本
  - 使用说明文本
  - 设置和自定义颜色文本
  - FAQ 问题与答案
  - 多语言菜单
- 页面标题和描述支持多语言
- HTML lang 属性动态设置
- SEO meta 标签本地化

## 文件结构

```
src/
├── lib/
│   └── i18n.ts                    # 多语言配置和翻译
├── pages/
│   ├── index.astro                # 英文页面 (默认)
│   ├── zh/index.astro            # 中文页面
│   ├── ja/index.astro            # 日语页面
│   ├── ko/index.astro            # 韩语页面
│   ├── es/index.astro            # 西班牙语页面
│   ├── fr/index.astro            # 法语页面
│   ├── de/index.astro            # 德语页面
│   └── ru/index.astro            # 俄语页面
└── components/react/
    └── KeepScreenAwake.tsx       # 主组件 (支持多语言)
```

## 使用方法

### 访问特定语言

直接在 URL 中添加语言代码：

```
https://keepscreenawake.org/zh    # 中文
https://keepscreenawake.org/ja    # 日语
https://keepscreenawake.org/ko    # 韩语
https://keepscreenawake.org/es    # 西班牙语
https://keepscreenawake.org/fr    # 法语
https://keepscreenawake.org/de    # 德语
https://keepscreenawake.org/ru    # 俄语
```

### 语言切换

1. 滚动到页面底部
2. 在多语言菜单中点击目标语言
3. 页面会自动跳转到对应语言版本

## 技术实现

### 1. 语言检测

```typescript
// 从URL路径检测语言
export function getLanguageFromPath(pathname: string): Language {
  const lang = pathname.split("/")[1];
  if (lang && Object.keys(translations).includes(lang)) {
    return lang as Language;
  }
  return "en";
}
```

### 2. 翻译系统

```typescript
// 获取当前语言的翻译
const t = getTranslation(currentLanguage);

// 使用翻译
<h1>{t.title}</h1>
<p>{t.description}</p>
```

### 3. 自动重定向

```javascript
// 检测用户语言并重定向
const userLang = navigator.language;
const langCode = userLang.split("-")[0];
if (supportedLangs.includes(langCode) && window.location.pathname === "/") {
  window.location.href = `/${langCode}`;
}
```

## 添加新语言

要添加新语言，需要：

1. 在 `src/lib/i18n.ts` 中添加新语言代码和翻译
2. 创建对应的页面文件 `src/pages/[lang]/index.astro`
3. 更新 `astro.config.mjs` 中的 sitemap 配置
4. 在组件中添加新语言支持

## SEO 优化

- 每个语言页面都有独立的 meta 标签
- 支持 hreflang 标签 (可扩展)
- 动态设置 HTML lang 属性
- 本地化的 Open Graph 标签

## 注意事项

1. 所有翻译内容都存储在 `i18n.ts` 文件中，便于维护
2. 语言切换使用标准的 `<a>` 标签，支持浏览器前进/后退
3. 自动重定向仅在根路径生效，避免循环重定向
4. 组件会自动检测当前语言并显示对应内容

## 未来扩展

- 添加更多语言支持
- 实现语言偏好本地存储
- 添加 hreflang 标签
- 支持子路径语言切换
- 添加语言检测 API
