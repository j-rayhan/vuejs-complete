<template>
  <div class="container">
      <app-new-quote @quoteAdded="newQuote"></app-new-quote>
      <app-quote-grid :quotes="quotes"></app-quote-grid>
  </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid'
import NewQuote from './components/NewQuote'
export default {
  data: function () {
    return {
      quotes: [
        'Just a quote to see somenting!'
      ],
      maxQuotes: 10,
    }
  },
  methods: {
    newQuote(q){
      console.log('PRINT IN %s=====>','App', q);
      this.quotes.push(q)
    }
  },
  components: {
    appQuoteGrid: QuoteGrid,
    appNewQuote: NewQuote
  }
}
</script>

<style>
 
</style>
