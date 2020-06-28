import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
  bind(el, binding, vnode) {
    el.style.backgroundColor = 'green'
  }
})

export const eventBus = new Vue({
  methods: {
    changeAge(age){
      this.$emit('ageWasEdit', age)
    }
  }
});
new Vue({
  el: '#app',
  render: h => h(App)
})
