// https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript/901144#901144
export function getParameterByName (name, url) {
  if (!url) url = window.location.href
  name = name.replace(/[\[\]]/g, '\\$&')
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
  var results = regex.exec(url)
  if (!results) return null
  if (!results[2]) return ''
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

export function isIos () {
  var ua = window.navigator.userAgent
  return !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
}

export function isWeiXin () {
  var ua = window.navigator.userAgent.toLowerCase()
  if (
    ua.match(/MicroMessenger/i) === 'micromessenger' ||
    ua.match(/_SQ_/i) === '_sq_'
  ) {
    return true
  } else {
    return false
  }
}
