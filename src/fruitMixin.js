export const fruitMixin = {
 data() {
  return {
    filterText: '',
    fruits: [ 'Apple', 'Banana', 'Mango', 'Melon']
  }
 },
computed: {
  filteredFruits () {
    return this.fruits.filter(e => e.match(this.filterText))
  }
},
created(){
 console.log('PRINT IN %s=====>','FruitMixin', 'Creared hook');
}
}