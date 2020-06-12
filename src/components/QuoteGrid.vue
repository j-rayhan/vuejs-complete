<template>
  <div class="row">
    <app-quote v-for="(quote, i) in quotes" :key="i">
      {{ quote }}
    </app-quote>
  </div>
</template>

<script>
import Quote from './Quote';

export default {
 props: ['quotes'],
 components: {
   appQuote: Quote
 }
}
</script>

<style>

</style>