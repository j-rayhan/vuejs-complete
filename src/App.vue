<template>
  <div class="container">
    <div class="row">
      <h1>Filters && Mixins</h1>
      <p>{{ text | toUpperCase | to-LowerCase }}</p>
      <hr>
      <input type="text" v-model="filterText">
      <ul>
        <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "Hello there!",
      filterText: '',
      fruits: [ 'Apple', 'Banana', 'Mango', 'Melon']
    }
  },
  filters: {
    toUpperCase(value){
      return value.toUpperCase();
    }
  },
  computed: {
    filteredFruits () {
      return this.fruits.filter(e => e.match(this.filterText))
    }
  }
}
</script>

<style>
 
</style>
