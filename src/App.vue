<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Built-in Directives</h1>
        <p v-text="'Some text'"></p>
        <p v-html="'<strong>Some strong text</strong>'"></p>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>
        <p v-highlight:background.delayed="'yellow'">Color this</p>
        <p v-highlight:background="'red'">Color this</p>
        <p v-highlight="'green'">Color this</p>
        <hr>
        
        <p v-local-highlight:background.delayed="'green'">Local Color this</p>
        <p v-local-highlight:background="'red'">Local Color this</p>
      </div>
    </div>
  </div>
</template>

<script>
import Switch from './components/Switch'
export default {
  directives: {
    'local-highlight': {
      bind(el, binding, vnode) {
    // el.style.backgroundColor = 'green'
      let delay = 0;
      if (binding.modifiers['delayed']) delay = 3000;
        setTimeout(() => {
          if (binding.arg === 'background') {
            el.style.backgroundColor = binding.value
          } else {
            el.style.color = binding.value 
            el.style.fontSize = '36px'
          }
        }, delay);
      }
    }
  }
}
</script>

<style>
 
</style>
