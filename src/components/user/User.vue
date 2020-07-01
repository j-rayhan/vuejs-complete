<template>
  <div>
    <h1>User details</h1>
    <hr>
    <button @click="navigateToHome" class="btn btn-primary">Go to Home</button>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToHome(){
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>