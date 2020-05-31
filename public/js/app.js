let data = {
  title: 'The VueJS instance',
  showPharagraph: false
}

let vm1 = new Vue({
 el: '#app1',
 data,
 methods: {
   show: function() {
     this.showPharagraph = true;
     this.updateTitle('The VueJS instance (Update)');
     console.log('Button ref instance', this.$refs);
     this.$refs.myButton.innerText = "TEST";
     
   },
   updateTitle: function(value){
     this.title = value;
   }
 },
 watch: {
   title: function(value){
     alert('Title changed, new title '+ value);
   }
 }
});
vm1.$refs.heading.innerText = "Something else!"
// setTimeout(() => {
//   vm1.title = "Title changed from timer"
// }, 3000);

// setTimeout(() => {
//   vm1.show()
// }, 6000);

// vm1.newPro = "New title!"; // I can't use this (We should use Vue constructor)
// console.log('vm1----->',vm1.$data === data);

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