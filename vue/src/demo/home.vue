<template>
  <div>
    vue组件化开发{{ msg }}
    <div>
      输入框：
      <input 
        type="text"
        v-focus
        v-model="phone"
        placeholder="请输入电话号码"/>
        <button @click="submit">提交</button>

        <msg-vue ref="msg"></msg-vue>
        <vue-button type="warn">警告按钮</vue-button>
        <vue-button type="error">错误按钮</vue-button>
    </div>
  </div>
</template>

<script>
export default {
 name: 'homeVue',
 data () {
   return {
     msg: '我是vue',
     phone: ''
   }
 },
 methods: {
   // 提交
   submit () {
     if (!this.phone) {
      //  alert('请填写电话')
      // console.log(this.$msg)
      // console.log(this.$myMythod())
      this.$nextTick(() => {
        this.$refs.msg.msgPlugin('请输入电话号码')
      })
     }else {
       console.log('提交数据', this.phone)
     }
   }
 },
}
</script>

<style>

</style>