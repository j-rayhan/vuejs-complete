Vue.component('my-tag', {
  data: function() {
    return {status: "Critial"}
  },
  template: "<h2>Server Status: {{ status }}</h2>"
})

new Vue({
  el: "#app"
})