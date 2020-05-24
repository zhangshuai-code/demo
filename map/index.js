// js 原生实现一个map功能
function myMap (fn) {
  let mp = []
  for (let i = 0; i < this.length; i++) {
    
    mp.push(fn(this[i], i, this))
  }
  return mp
}
Array.prototype._map = myMap
let a = [1,2,5,6,8,0]
let b = a._map((item) => item)
console.log(b)