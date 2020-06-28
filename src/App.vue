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
        <p v-highlight:background="'red'">Color this</p>
        <p v-highlight="'green'">Color this</p>
      </div>
    </div>
  </div>
</template>

<script>
import Switch from './components/Switch'
export default {
  data() {
    return {
      userData: {
        email: '',
        password: '',
        age: 27
      },
      message: 'A new text',
      language: [],
      gender: 'Male',
      dataSwitch: true,
      isSubmitted: false
    }
  },
  methods: {
    submitted() {
      this.isSubmitted = true
    }
  },
  components: {
    appSwitch: Switch
  }
}
</script>

<style>
 
</style>
