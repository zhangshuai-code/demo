<template>
  <div>
    <div class="msg" ref="msg" :class="{ active: msgStatus }">
      <div class="msg-warpper">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'msgVue',
  data() {
    return {
      text: '',
      msgStatus: false
    }
  },
  methods: {
    msgPlugin (msg) {
      this.text = msg
      this.msgStatus = true
      setTimeout(() => {
        this.msgStatus = false
      }, 3000);
    }
  }
}
</script>

<style scoped>
  .msg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, 50%);
    width: 0;
    min-height: 0;
    text-align: center;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    color: #fff;
    transition: all 0.5s;
    z-index: -1;
    opacity: 0;
  }

  .msg.active {
    width: 150px;
    min-height: 25px;
    opacity: 1;
    z-index: 11;
  }
</style>