function forEach (fn) {
  console.log(fn)
  for(let a = 0; a < this.length; a++) {
    fn(this[a], a, this)
  }
}

Array.prototype._myForEach = forEach

let arry = [1,2,3,4,6]
arry._myForEach((item) => console.log(item))