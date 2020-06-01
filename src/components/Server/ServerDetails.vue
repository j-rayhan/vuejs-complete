<template>
  <div>
    <h1>Server status: {{ status }}</h1>
    <button @click="changeStatus">Change</button>
  </div>
</template>

<script>
export default {
  data: () => ({status: 'Critical'}),
  methods: {
    changeStatus() {
      this.status = 'Normal';
    }
  }
}
</script>
