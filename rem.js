(function (win, dom) {
  // TODO 更优的rem布局方案。rem自适应布局。自动计算rem值
  // TODO resize函数需要节流，刷新页面后的元素跳动处理。
  const html = dom.documentElement
  const resizeEvt = 'oritationchange' in win ? 'oritationchange' : 'resize'
  const recalc = function () {
    const clientWidth = html.clientWidth
    if (!clientWidth) { return }
    // 桌面端分辨率自适应：最小1280*720，最大1920*1080。
    if (clientWidth > 1920) {
      html.style.fontSize = '100px'
    } else if (clientWidth < 1280) {
      html.style.fontSize = '66.67px'
    } else {
      html.style.fontSize = 100 * (clientWidth / 1920) + 'px'
    }
    console.log(html.style.fontSize)
  }
  if (!dom.addEventListener) { return }
  win.addEventListener(resizeEvt, recalc, false)
  dom.addEventListener('DomContentLoaded', recalc, false)
  recalc()
})(window, document)
