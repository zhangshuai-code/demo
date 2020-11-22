import Vue from 'vue/dist/vue.esm'

const vm = new Vue({
  el: '#app',
  data: {},
  template: `
    <div>
      <lcc></lcc>
    </div>
  `,
  components: {
    lcc: {
      data () {
        return {
          name: '林潺潺',
        }
      },
      template: `
        <div>
          <h1>{{ name }}</h1>
        </div>
      `
    }
  }
})