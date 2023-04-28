<template>
<div class="door-inside-wrapper">
  <div class="container">
      <h2 class="door-inside-title">Серии входных дверей, на любой вкус и кошелек.</h2>
  </div>
  <div class="container">

   <DoorInsideSeries/>
  </div>
</div>
</template>

<script>

import DoorInsideSeries from "@/components/door-inside/DoorInsideSeries";
export default {
  name: "DoorInsideWrapper",
  components: {DoorInsideSeries},
}
</script>

<style scoped>
.door-inside-wrapper{
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

}
.door-inside-title{
  color: crimson;
  text-align: center;
}
</style>