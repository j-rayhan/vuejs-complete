<template>
  <div class="container">
    <div class="row">
      <h1>Routes</h1>
      <app-header></app-header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './Header'
export default {
  components: {
    appHeader: Header
  }
}
</script>

<style>
 
</style>
