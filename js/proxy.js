// js代理模式--为其他对象提供一种代理以控制对这个对象的访问，为了不暴露执行对象的代码
// 比如：男孩想对女孩表白，男孩委托快递小哥把礼物送到女孩手里
// 女孩
function Girl (name) {
  this.name = name
}

// 男孩
function Boy (girl) {
  this.girl = girl
  this.send = function (gift) {
    console.log('你好:' + this.girl.name + '给你一个' + gift)
  }
}

// 快递小哥
function ProxyBoy (girl) {
  this.send = function (gift) {
    new Boy(girl).send(gift)
  }
}

const pro = new ProxyBoy(new Girl('lisa'))

pro.send('玫瑰花')
