<template>
  <div class="container">
      <div class="row">
          <div class="col-xs-12">
              <app-quote quote="A Wonderful Quote!"></app-quote>
          </div>
      </div>
  </div>
</template>

<script>
import Quote from './components/Quote';

export default {
  components: {
    appQuote: Quote,
  }
}
</script>

<style>
 
</style>
