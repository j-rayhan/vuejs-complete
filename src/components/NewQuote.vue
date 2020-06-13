<template>
  <div class="row">
    <form>
     <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
      <label for="quote">Quote</label>
      <textarea 
      name="quote" 
      id="quote" 
      cols="30" 
      rows="3" 
      v-model="quote" 
      class="form-control">
      </textarea>
     </div>
     <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
      <button class="btn btn-primary" @click.prevent="createNew">Add New</button>
     </div>
    </form>
  </div>
</template>

<script>

export default {
 data: function () {
  return {
   quote: ''
  }
 },
 methods: {
  createNew() {
   console.log('PRINT IN %s=====>','NewQuote', this.quote);
   this.$emit('quoteAdded', this.quote);
   this.quote = '';
  }
 }
}
</script>

<style>

</style>