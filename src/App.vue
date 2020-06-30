<template>
  <div class="container">
    <div class="row">
      <h1>Filters && Mixins</h1>
      <p>{{ text | toUpperCase | to-LowerCase }}</p>
      <hr>
      <button @click="fruits.push('Berries')">Add new</button>
      <input type="text" v-model="filterText">
      <ul>
        <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
      </ul>
      <hr>
      <app-list></app-list>
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
