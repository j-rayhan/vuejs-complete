<template>
  <div class="container">
      <app-new-quote @quoteAdded="newQuote"></app-new-quote>
      <app-quote-grid :quotes="quotes"></app-quote-grid>
      <div class="row">
        <div class="col-sm-12 text-center">
          <div class="alert alert-info">
            Inof: Click on a quote to delete it!
          </div>
        </div>
      </div>
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
