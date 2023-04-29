<template>
  <div class="door-inside-series">
    <BackToSeries style="padding-top: 2rem"/>
    <div class="container door-series-container">
      <router-link class="door-inside-series-link"  :to="{name:'standart_01'}">
        <div class="door-series">
          <img class="door-series-img" src="../../assets/door-inside/door-series/MODEL_1.jpg" alt="">
          <h5 style="text-align: center">Серия Стандарт 01</h5>
          <h5 style="text-align: center; color: crimson">от 78 руб</h5>
        </div>
      </router-link>
      <router-link class="door-inside-series-link"  :to="{name:'standart_02'}">
        <div class="door-series">
          <img class="door-series-img" src="../../assets/door-inside/door-series/MODEL_2.jpg" alt="">
          <h5 style="text-align: center">Серия Стандарт 02</h5>
          <h5 style="text-align: center; color: crimson">от 131 руб</h5>
        </div>
      </router-link>

    </div>
    <BackToSeries/>
  </div>
</template>

<script>
import doorseries from "@/data/doorseries.json";
import BackToSeries from "@/components/door-inside/BackToSeries";

export default {
  name: "DoorSiriesStandart",
  components: {BackToSeries},
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