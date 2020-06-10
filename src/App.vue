<template>
  <div class="container">
      <div class="row">
          <div class="col-xs-12">
            <button @click="selectedComponent = 'appQuote'">Quote</button>
            <button @click="selectedComponent = 'appAuthor'">Author</button>
            <button @click="selectedComponent = 'appNewQuote'">New Quote</button>
            <hr>
            <p> {{ selectedComponent }} </p>
            <keep-alive>
              <component :is="selectedComponent">Default Text</component>
            </keep-alive>
              <!-- <app-quote>
                <h2 slot="title"> {{ quoteTitle }} </h2>
                <p>A Wonderful Quote!</p>
              </app-quote> -->
          </div>
      </div>
  </div>
</template>

<script>
import Quote from './components/Quote';
import Author from './components/Author';
import NewQuote from './components/NewQuote';

export default {
  data: function () {
    return {
      quoteTitle: "The Quote!",
      selectedComponent: 'appQuote',
    }
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNewQuote: NewQuote,
  }
}
</script>

<style>
 
</style>
