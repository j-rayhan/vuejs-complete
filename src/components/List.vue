<template>
  <div>
      <input type="text" v-model="filterText">
      <ul>
        <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
      </ul>
  </div>
</template>

<script>
import { fruitMixin } from "../fruitMixin";
export default {
  mixins: [fruitMixin],
  created() {
   console.log('PRINT IN %s=====>','List', 'created hook');
  }
}
</script>

<style>
 
</style>
