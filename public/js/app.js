new Vue({
 el: '#app',
 data: {
   playerHealth: 100,
   monsterHealth: 100,
   gameIsRunning: false
 },
 methods: {
   startGame: function() {
     this.gameIsRunning = true;
     this.playerHealth = 100;
     this.monsterHealth = 100;
   },
   attack: function() {
    let damage = this.calculateDamage(10,3);
    this.monsterHealth -= damage;

    if( this.checkWin()){
      return;
    }
    this.monsterAttack();
   },
   specialAttack: function() {
    let damage = this.calculateDamage(20,10);
    this.monsterHealth -= damage;

    if( this.checkWin()){
      return;
    }
    this.monsterAttack();
   },
   heal: function() {

   },
   giveUp: function() {

   },
   monsterAttack: function() {
    damage = this.calculateDamage(12,5);
    this.playerHealth -= damage;

    this.checkWin();
   },
   calculateDamage: function(max, min) {
     return Math.max(Math.floor(Math.random() * max) + 1, min);
   },
   checkWin: function() {
     if ( this.monsterHealth <=0 ) {
       if (confirm("You won! New game?")) {
         this.startGame();
       } else {
         this.gameIsRunning = false;
       }
       return true;
     } else if ( this.playerHealth <=0 ) {
      if (confirm("You lost! New game?")) {
        this.startGame();
      } else {
        this.gameIsRunning = false;
      }
      return true;
     }
     return false;
   }
 }
});