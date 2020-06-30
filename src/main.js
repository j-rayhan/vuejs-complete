import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-LowerCase', (value) => value.toLowerCase())
Vue.mixin({
  created(){
    console.log('PRINT IN %s=====>','Global', 'mixin created');
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
