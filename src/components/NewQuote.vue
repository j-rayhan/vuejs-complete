<template>
<div>
  <h2>New quote</h2>
  <button @click="counter++">Increase!</button>
  <p>{{ counter }}</p>
</div>
</template>

<script>
export default {
  data: () => {
    return {
      counter: 0
    }
  },
  destroyed(){
    console.log('Destroyed!------->');
    
  }
}
</script>

<style>

</style>