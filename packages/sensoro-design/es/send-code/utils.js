// 获取格式化的模板文本
export function getTemplateText(runText, second) {
  return runText.replace(/\{([^{]*?)%s(.*?)\}/g, second.toString());
}
//# sourceMappingURL=utils.js.map
