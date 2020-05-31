new Vue({
 el: '#app',
 data: {
   title: 'The VueJS instance',
   showPharagraph: false
 },
 methods: {
   show: function() {
     this.showPharagraph = true;
     this.title = 'The VueJS instance (Update)'
   }
 }
});