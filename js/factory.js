// 工厂函数模式---就是做一个对象的创建封装，然后把该对象return出去
function fn (name, age) {
  let obj = new Object()
  obj.name = name
  obj.age = age
  return obj
}

const a = fn('zd', 20)
console.log(a)
