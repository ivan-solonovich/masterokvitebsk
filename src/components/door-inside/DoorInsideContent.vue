<template>
<div class="door-inside-content">
  <div class="card-door">
    <div class="img-container">
        <img src="../../assets/door-inside/armany/series00/armany00grafit.jpg" class="card-door-img" alt="...">
     </div>
    <div class="card-door-body">
      <h5 class="card-door-title">{{ door.name }} 00 шале графит </h5>
      <p class="card-door-price">262.89 руб</p>
      <p style="text-align: center">Артикул 00</p>
    </div>
  </div>
</div>
</template>

<script>
import doorData from '../../data/doordata.json'
export default {
  name: "DoorInsideContent",
  data() {
    return {
      door: doorData,
    };
  },
}
</script>

<style scoped>
.door-inside-content{
  display: flex;
  flex-wrap: wrap;
}
.card-door{
  width: 300px;
  height: 450px;
  border: black 1px solid;
  margin: 3rem;
}
.img-container{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;

}
.card-door-img{
  max-width: 90%;
  height: auto;
}
.card-door-title{
  text-align: center;
}
.card-door-price{
  text-align: center;
  color: crimson;
  font-weight: bold;
}
</style>