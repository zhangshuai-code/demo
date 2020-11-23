const a = 1

function test (a, b, c) {
  console.log(...arguments)
}
// test(1,2,8,3)


function createdEle (start) {
  console.log(start)
  return function () {
    console.log(start)
    return start++
  }
}

let state = createdEle(1)
console.log(state())
// console.log(state())
// console.log(state())