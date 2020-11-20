// 防抖-->防止高频触发函数调用
function debounce (fn, wait = 200) {
 let timeId = null
 function helper () {
  if (timeId) {
    clearTimeout(timeId)
    timeId = null
  }
  timeId = setTimeout(function () {
    fn()
  }, wait)
 }

 return helper
}

function cale () {
  console.log('cale target triger')
}

const highDebounce = debounce(cale)

highDebounce()
highDebounce()
highDebounce()