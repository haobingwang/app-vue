/**
 * 使用方式1：<div v-html="$options.filters.summaryFormatter(post.sum)"></div>
 * 使用方式2：<div>{{ post.sum | summaryFormatter }}</div>
 *
 * @param {string} summary
 */
export function summaryFormatter (summary) {
  // 移除两端的空格，全局替换 #&# 为 换行标记
  const regex = /#&#/gi
  return '&#12288;&#12288;' + summary.trim().replace(regex, '<br/>&#12288;&#12288;')
}
