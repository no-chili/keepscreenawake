// 测试多语言配置
const fs = require("fs");
const path = require("path");

// 读取i18n.ts文件
const i18nPath = path.join(__dirname, "src/lib/i18n.ts");
const content = fs.readFileSync(i18nPath, "utf8");

// 检查是否包含所有必要的翻译字段
const requiredFields = [
  "instructions.keepTabOpen",
  "instructions.dontMinimize",
  "instructions.worksOnBrowsers",
  "settings.backgroundColor",
  "settings.primaryColor",
  "settings.colorCustomization",
  "settings.recommendedThemes",
];

console.log("🔍 检查多语言配置...\n");

let allFieldsPresent = true;

requiredFields.forEach((field) => {
  const fieldPath = field.split(".");
  let current = content;

  for (const part of fieldPath) {
    if (current.includes(part)) {
      current = current.substring(current.indexOf(part));
    } else {
      console.log(`❌ 缺少字段: ${field}`);
      allFieldsPresent = false;
      return;
    }
  }
  console.log(`✅ 字段存在: ${field}`);
});

console.log("\n📊 检查结果:");
if (allFieldsPresent) {
  console.log("🎉 所有必要的翻译字段都已配置完成！");
} else {
  console.log("⚠️  部分翻译字段缺失，请检查配置。");
}

// 检查语言数量
const languageMatches = content.match(/^\s*(\w+):\s*{/gm);
if (languageMatches) {
  console.log(`\n🌍 支持的语言数量: ${languageMatches.length}`);
  languageMatches.forEach((match) => {
    const lang = match.trim().replace(":", "").replace("{", "").trim();
    console.log(`   - ${lang}`);
  });
}

console.log("\n✨ 多语言功能配置检查完成！");
