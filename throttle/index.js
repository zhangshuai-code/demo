// 节流
function throttle (fn, throthroud) {
  let last
  let timeer
  throthroud || (throthroud = 1000)
  return function () {
    const context = this
    let args = arguments
    let now = +new Date()
    if (last && now < last + throthroud) {
      clearTimeout(timeer)
      timeer = setTimeout(function () {
        last = now
        fn.apply(context, args)
      }, throthroud)
    } else {
      last = now
      fn.apply(context, args)
    }
  }

}

function cale () {
  console.log('节流')
}

const thrott = throttle(cale)

thrott()
thrott()
thrott()
thrott()