;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-weixin" viewBox="0 0 1000 1000">'+
      ''+
      '<path d="M351.5501 365.3473c16.6874 0 27.8862-11.3453 27.8862-28.2458 0-16.9795-11.1989-28.1739-27.8862-28.1739-16.6804 0-33.5176 11.1944-33.5176 28.1739C318.0324 354.002 334.8697 365.3473 351.5501 365.3473zM507.4328 308.9265c-16.6874 0-33.4467 11.1944-33.4467 28.1739 0 16.9015 16.7593 28.2458 33.4467 28.2458 16.8233 0 27.9512-11.3453 27.9512-28.2458C535.384 320.122 524.256 308.9265 507.4328 308.9265zM702.3866 517.7789c16.7593 0 27.9502-11.1994 27.9502-22.5407 0-11.2694-11.1909-22.6147-27.9502-22.6147-10.977 0-22.034 11.3453-22.034 22.6147C680.3536 506.5795 691.4096 517.7789 702.3866 517.7789zM579.8796 517.7789c16.9012 0 27.8782-11.1994 27.8782-22.5407 0-11.2694-10.977-22.6147-27.8782-22.6147-11.05 0-22.2478 11.3453-22.2478 22.6147C557.6318 506.5795 568.8297 517.7789 579.8796 517.7789zM76.7541 483.6761c0 242.5146 196.5688 439.0743 439.0903 439.0743 242.5215 0 439.0903-196.5597 439.0903-439.0743S758.3659 44.6048 515.8444 44.6048C273.3229 44.6048 76.7541 241.1615 76.7541 483.6761zM627.2255 370.1031c-105.8206 0-189.3934 80.0567-189.3934 178.6299 0 16.4658 2.5654 32.2731 6.8826 47.3449-6.8826 0.5856-13.7642 0.8784-20.7828 0.8784-27.8153 0-50.205-5.7061-78.0133-11.3413l-77.8704 39.5902 22.2478-67.911c-55.7655-39.5152-89.1322-90.3767-89.1322-152.3597 0-107.4242 100.3321-192.0178 222.7681-192.0178 109.5512 0 205.4951 67.6152 224.7338 158.5055C641.6473 370.6177 634.4718 370.1031 627.2255 370.1031zM830.526 546.0957c0 50.8605-33.2958 95.94-78.0133 129.8909l16.7593 56.4957-61.1041-33.881c-22.3268 5.6352-44.6386 11.2694-66.8214 11.2694-105.9625 0-189.5363-73.3992-189.5363-163.776 0-90.3008 83.5738-163.8439 189.5363-163.8439C741.3857 382.2518 830.526 455.795 830.526 546.0957z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-github" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M941.714 512q0 143.433-83.712 258.011t-216.283 158.574q-15.433 2.853-22.565-3.986t-7.131-17.152v-120.576q0-55.442-29.696-81.152 32.585-3.438 58.587-10.277t53.723-22.272 46.299-37.998 30.281-60.014 11.703-86.016q0-69.157-45.129-117.723 21.138-52.005-4.571-116.553-16.018-5.157-46.299 6.29t-52.553 25.161l-21.723 13.714q-53.138-14.848-109.714-14.848t-109.714 14.848q-9.143-6.29-24.283-15.433t-47.726-22.016-49.152-7.717q-25.161 64.585-3.986 116.553-45.129 48.567-45.129 117.723 0 48.567 11.703 85.723t29.989 60.014 46.007 38.29 53.723 22.272 58.587 10.277q-22.857 20.553-28.014 58.843-11.995 5.705-25.71 8.558t-32.585 2.853-37.413-12.288-31.707-35.73q-10.862-18.286-27.721-29.696t-28.27-13.714l-11.447-1.719q-11.995 0-16.567 2.56t-2.853 6.583 5.157 8.009 7.424 6.839l3.986 2.853q12.581 5.705 24.869 21.723t17.993 29.147l5.705 13.129q7.424 21.723 25.161 35.145t38.29 17.152 39.717 3.986 31.707-2.011l13.129-2.304q0 21.723 0.293 50.871t0.293 30.866q0 10.277-7.424 17.152t-22.857 3.986q-132.571-43.995-216.283-158.574t-83.712-258.011q0-119.442 58.843-220.27t159.707-159.707 220.27-58.843 220.27 58.843 159.707 159.707 58.843 220.27z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
