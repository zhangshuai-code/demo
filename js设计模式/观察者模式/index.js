let obj = {
  age: 13
}

function observableObj (oldName, newName) {
  console.info('name的属性值从' + oldName + '改变到' + newName)
}

Object.defineProperty(obj, 'name', {
  enumerable: true,
  configurable: true,
  get: function () {
    return name
  },
  set: function (o,val) {
    observableObj(o, val)
    return name = val
  }
})

obj.name = 'ls'
obj.name = 'zs'
console.info('obj变成',obj)