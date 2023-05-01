<template>
<div class="door-inside-series">
  <DoorBenefit/>
  <h3 style="text-align: center; margin-top: 2rem">В нашем каталоге почти 60 вариантов дверей</h3>
  <div class="container door-series-container">

    <router-link class="door-inside-series-link"  :to="{name:'standart'}">
      <div class="door-series">
        <img class="door-series-img" src="../../assets/door-inside/door-series/MODEL_15.jpg" alt="">
        <h5 style="text-align: center">Серия Стандарт</h5>
        <h5 style="text-align: center; color: crimson">Класика</h5>
      </div>
    </router-link>

    <router-link class="door-inside-series-link"  :to="{name:'blanko'}">
      <div class="door-series">
        <img class="door-series-img" src="../../assets/door-inside/door-series/blanko_07.jpg" alt="">
        <h5 style="text-align: center">Серия Бланко</h5>
        <h5 style="text-align: center; color: crimson">Демократичный стиль</h5>
      </div>
    </router-link>


    <router-link class="door-inside-series-link"  :to="{name:'armany'}">
    <div class="door-series">
      <img class="door-series-img" src="../../assets/door-inside/door-series/Amati_15.jpg" alt="">
      <h5 style="text-align: center">Серия Армани</h5>
      <h5 style="text-align: center; color: crimson">Современный стиль</h5>
    </div>
    </router-link>

  </div>
</div>
</template>

<script>
import doorseries from "@/data/doorseries.json";
import DoorBenefit from "@/components/door-inside/DoorBenefit";


export default {
  name: "DoorInsideSeries",
  components: {DoorBenefit},
  data() {
    return {
      doorSeries: doorseries,

    };
  },
computed:{

}

}
</script>

<style scoped>
.door-inside-series{
  width: 100%;
  display: flex;
  justify-content: center;
 flex-direction: column;
}
.door-series-container{
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.door-series{
  max-width: 200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  margin: 3rem;
}
.door-series-img{
  width: 220px;
  height: auto;
  margin: 1rem;
}
.door-inside-series-link{
  cursor: pointer;
  text-decoration: none;
  color: #198754;

}
</style>