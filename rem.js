(function (win, dom) {
  // rem自适应布局。自动计算rem值
// TODO resize函数节流。刷新页面后的元素跳动处理。
  const html = dom.documentElement
  const resizeEvt = 'oritationchange' in win ? 'oritationchange' : 'resize'
  const recalc = function () {
    const clientWidth = html.clientWidth
    if (!clientWidth) { return }
    // 最小兼容尺寸为1366*768，最大尺寸1920*1080 ，小屏幕笔记本。
    if (clientWidth > 1920) {
      html.style.fontSize = '20px'
    } else if (clientWidth < 1280) {
      html.style.fontSize = '13.33px'
    } else {
      html.style.fontSize = 20 * (clientWidth / 1920) + 'px'
    }
  }
  if (!dom.addEventListener) { return }
  win.addEventListener(resizeEvt, recalc, false)
  dom.addEventListener('DomContentLoaded', recalc, false)
  recalc()
})(window, document)
