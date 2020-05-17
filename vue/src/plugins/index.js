// import msg from './msg/msg.vue'
// let plugins = {}
// plugins.install = function (Vue) {
//   Vue.prototype.$msg = '我是全局属性'
//   Vue.prototype.$myMythod = function () {
//     console.log('我是全局方法')
//   }
//   Vue.directive('focus', {
//     bind: function () {

//     },
//     inserted: function (el) {
//       el.focus()
//     }
//   })

//   Vue.component(msg.name, msg)
// }

// export default plugins
// 循环引入组件
// https://www.jianshu.com/p/c894ea00dfec require.context 此方法见文档说明
const requireComponent = require.context('./', true, /\.vue$/)
console.log(requireComponent.keys(), 'requireComponent')
const install = (Vue) => {
  // 判断是否被注册
  if (install.installed) return
  install.installed = true
  requireComponent.keys().forEach(item => {
    const config = requireComponent(item)
    console.log(config)
    const componentName = config.default.name
    Vue.component(componentName, config.default || config)
  })

  Vue.directive('focus', {
      bind: function () {
    
        },
        inserted: function (el) {
          el.focus()
        }
      })
}
// 判断是否在浏览器环境
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}