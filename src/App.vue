<template>
  <div class="container">
      {{ maxQuotes }}
  </div>
</template>

<script>

export default {
  data: function () {
    return {
      quotes: [
        'Just a quote to see somenting!'
      ],
      maxQuotes: 10,
    }
  },
}
</script>

<style>
 
</style>
