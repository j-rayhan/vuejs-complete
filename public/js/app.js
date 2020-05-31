let vm1 = new Vue({
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
 },
 watch: {
   title: function(value){
     alert('Title changed, new title '+ value);
   }
 }
});

setTimeout(() => {
  vm1.title = "Title changed from timer"
}, 3000);

let mv2 = new Vue({
  el: '#app2',
  data: {
    title: 'The VueJS second instance',
    showPharagraph: false
  },
  methods: {
    onChange: function() {
      this.showPharagraph = true;
      vm1.title = 'The VueJS instance (Update from vm2)'
    }
  }
 });