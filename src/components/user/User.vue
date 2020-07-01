<template>
  <div>
    <h1>User details</h1>
    <hr>
    <p>Local id: {{ id }}</p>
    <button @click="navigateToHome" class="btn btn-primary">Go to Home</button>
  </div>
</template>

<script>
export default {
  data(){
    const { id } = this.$route.params
    return {
      id
    }
  },
  methods: {
    navigateToHome(){
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>