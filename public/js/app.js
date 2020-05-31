new Vue({
 el: '#app1',
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

new Vue({
  el: '#app2',
  data: {
    title: 'The VueJS second instance',
    showPharagraph: false
  },
  methods: {
    show: function() {
      this.showPharagraph = true;
      this.title = 'The VueJS second instance (Update)'
    }
  }
 });