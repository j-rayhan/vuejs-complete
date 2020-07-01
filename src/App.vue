<template>
  <div class="container">
    <div class="row">
      <h1>Routes</h1>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import List from './components/List'
import { fruitMixin } from "./fruitMixin";
export default {
  mixins: [fruitMixin],
  data() {
    return {
      text: "Hello there!"
    }
  },
  filters: {
    toUpperCase(value){
      return value.toUpperCase();
    }
  },
  components: {
    appList: List
  }
}
</script>

<style>
 
</style>
