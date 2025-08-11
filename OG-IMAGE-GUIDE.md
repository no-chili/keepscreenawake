# Open Graph Image Generation Guide

## 生成分享卡片图片

为了获得最佳的社交媒体分享效果，你需要创建一个 1200x630 像素的 PNG 图片。

### 方法 1：使用提供的 HTML 模板

1. 在浏览器中打开 `public/og-image.html`
2. 调整浏览器窗口大小到 1200x630 像素
3. 使用浏览器开发者工具或截图工具截取图片
4. 保存为 `public/og-image.png`

### 方法 2：使用在线设计工具

推荐使用以下工具：

- **Canva**: 免费模板，易于使用
- **Figma**: 专业设计工具
- **Adobe Express**: Adobe 的免费在线工具

### 方法 3：使用代码生成

可以使用以下工具：

- **@vercel/og**: Vercel 的 Open Graph 图片生成器
- **@astrojs/image**: Astro 的图片优化插件

## 图片设计要求

- **尺寸**: 1200x630 像素
- **格式**: PNG 或 JPG
- **内容**:
  - 应用名称: "Keep Screen Awake"
  - 主要功能描述
  - 品牌颜色: #FFEB3B (黄色) 和 #181818 (深灰色)
  - 简洁的视觉设计

## 文件位置

将生成的图片保存为 `public/og-image.png`

## 测试

生成图片后，可以使用以下工具测试：

- Facebook Sharing Debugger
- Twitter Card Validator
- LinkedIn Post Inspector
