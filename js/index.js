// js设计模式-策略模式---不用写过多的if else判断语句
const object = {
  'A': function (num) {
    return num * 1
  },
  'B': function (num) {
    return num * 2
  },
  'C': function (num) {
    return num * 3
  }
}

const fn = function (name, money) {
  return object[name](money)
}

console.log(fn('B', 10000))