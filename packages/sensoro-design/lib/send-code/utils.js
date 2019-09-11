"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTemplateText = getTemplateText;

// 获取格式化的模板文本
function getTemplateText(runText, second) {
  return runText.replace(/\{([^{]*?)%s(.*?)\}/g, second.toString());
}
//# sourceMappingURL=utils.js.map
