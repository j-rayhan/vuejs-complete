// const data = { status: "Critial" }; // it's not the right way to use 

Vue.component('my-tag', {
  data: function () {
    return { status: 'Critical'};
  },
  methods: {
    changeStatus: function () {
      this.status = "Normal"
    }
  },
  template: "<h2>Server Status: {{ status }} (<button @click='changeStatus'>Change</button>)</h2>"
})

new Vue({
  el: "#app"
})