<template>
  <div>
   <div
    @click="isOn = true"
    :class="{active: isOn}"
    id="on">
    ON
   </div>
   <div
    @click="isOn = false"
    :class="{active: !isOn}"
    id="off">
    OFF
    </div>
  </div>
</template>

<script>
export default {
 data(){
  return {
   isOn: true
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