import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
  bind(el, binding, vnode) {
    // el.style.backgroundColor = 'green'
    let delay = 0;
    if (binding.modifiers['delayed']) delay = 3000;
    setTimeout(() => {
      if (binding.arg === 'background') {
        el.style.backgroundColor = binding.value
      } else {
        el.style.color = binding.value 
        el.style.fontSize = '26px'
      }
    }, delay);
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
