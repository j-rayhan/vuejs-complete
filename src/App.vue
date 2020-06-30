<template>
  <div class="container">
    <div class="row">
      <h1>Filters && Mixins</h1>
      <p>{{ text | toUpperCase }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "Hello there!"
    }
  },
  filters: {
    toUpperCase(value){
      return value.toUpperCase();
    }
  }
}
</script>

<style>
 
</style>
