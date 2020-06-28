<template>
  <div>
   <div
    @click="switched(true)"
    :class="{active: value}"
    id="on">
    ON
   </div>
   <div
    @click="switched(false)"
    :class="{active: !value}"
    id="off">
    OFF
    </div>
  </div>
</template>

<script>
export default {
 props: ['value'],
 methods: {
  switched(isOn){
   this.$emit('input', isOn)
  }
 }
}
</script>

<style scoped>
 #on, #off {
  width: 40px;
  height: 20px;
  background-color: lightgray;
  padding: 2px;
  display: inline-block;
  margin: 10px -2px;
  box-sizing: content-box;
  cursor: pointer;
  text-align: center;
 }
 #on:hover, #on.active {
  background-color: lightgreen;
 }
 #off:hover, #off.active {
  background-color: lightcoral;
 }
</style>