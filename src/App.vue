<template>
  <div class="container">
      <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
      <app-new-quote @quoteAdded="newQuote"></app-new-quote>
      <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
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
import Header from './components/Header'
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
      if(this.quotes.length >= this.maxQuotes) return alert('Please delete quotes first!');
      this.quotes.push(q)
    },
    deleteQuote(index){
      this.quotes.splice(index, 1);
    }
  },
  components: {
    appHeader: Header,
    appQuoteGrid: QuoteGrid,
    appNewQuote: NewQuote
  }
}
</script>

<style>
 
</style>
