var name = '小张'
var age = 13
var obj = {
  name: '小刘',
  objAge: this.age,
  myFunc: function () {
    console.log(this.name + '年龄' + this.age)
  }
}
console.log(obj.objAge) // 13
obj.myFunc() // 小刘年龄undefined

var faw = '小僧'
function showName () {
  console.log(this.faw) // 小僧
}
showName()

var db = {
  name: '德玛',
  age: 99
}

obj.myFunc() // 小刘年龄undefined --> this指向obj
obj.myFunc.call() // 小刘年龄13 --> this指向window
obj.myFunc.call(db) // 小刘年龄99 --> this指向db

function add (a, b) {
  console.log(a + b)
}

function reduce (a, b) {
  console.log(a - b)
}

add.call(reduce, 1, 3) // 将add方法作用到reduce上运行--> 4
reduce.call(add, 4, 6)
