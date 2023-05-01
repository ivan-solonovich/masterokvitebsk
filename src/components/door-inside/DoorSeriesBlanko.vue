<template>
  <div class="door-inside-series">
    <BackToSeries style="padding-top: 2rem"/>
    <h2 class="door-inside-series-title">Серия Бланко</h2>
    <h4 class="door-inside-series-subtitle">Серия Бланко - недорогая, но стильная серия</h4>
    <div class="container door-series-container">
      <router-link class="door-inside-series-link"  :to="{name:'blanko_00'}">
        <div class="door-series">
          <img class="door-series-img" src="../../assets/door-inside/door-series/blanko_00.jpg" alt="">
          <h5 style="text-align: center">Серия Бланко 00</h5>
          <h5 style="text-align: center; color: crimson">от 129 руб</h5>
        </div>
      </router-link>
      <router-link class="door-inside-series-link"  :to="{name:'blanko_01'}">
        <div class="door-series">
          <img class="door-series-img" src="../../assets/door-inside/door-series/blanko_01.jpg" alt="">
          <h5 style="text-align: center">Серия Бланко 01</h5>
          <h5 style="text-align: center; color: crimson">от 129 руб</h5>
        </div>
      </router-link>
      <router-link class="door-inside-series-link"  :to="{name:'blanko_03'}">
        <div class="door-series">
          <img class="door-series-img" src="../../assets/door-inside/door-series/blanko_03.jpg" alt="">
          <h5 style="text-align: center">Серия Бланко 03</h5>
          <h5 style="text-align: center; color: crimson">от 129 руб</h5>
        </div>
      </router-link>
      <router-link class="door-inside-series-link"  :to="{name:'blanko_04'}">
        <div class="door-series">
          <img class="door-series-img" src="../../assets/door-inside/door-series/blanko_04.jpg" alt="">
          <h5 style="text-align: center">Серия Бланко 04</h5>
          <h5 style="text-align: center; color: crimson">от 146 руб</h5>
        </div>
      </router-link>
      <router-link class="door-inside-series-link"  :to="{name:'blanko_06'}">
        <div class="door-series">
          <img class="door-series-img" src="../../assets/door-inside/door-series/blanko_06.jpg" alt="">
          <h5 style="text-align: center">Серия Бланко 06</h5>
          <h5 style="text-align: center; color: crimson">от 146 руб</h5>
        </div>
      </router-link>
      <router-link class="door-inside-series-link"  :to="{name:'blanko_07'}">
        <div class="door-series">
          <img class="door-series-img" src="../../assets/door-inside/door-series/blanko_07.jpg" alt="">
          <h5 style="text-align: center">Серия Бланко 07</h5>
          <h5 style="text-align: center; color: crimson">от 146 руб</h5>
        </div>
      </router-link>
      <router-link class="door-inside-series-link"  :to="{name:'blanko_12'}">
        <div class="door-series">
          <img class="door-series-img" src="../../assets/door-inside/door-series/blanko_12.jpg" alt="">
          <h5 style="text-align: center">Серия Бланко 12</h5>
          <h5 style="text-align: center; color: crimson">от 146 руб</h5>
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
  name: "DoorInsideSeries",
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
.door-inside-series-title{
  margin: 1rem;
  text-align: center;
  font-weight: bolder;
  color: crimson;
}
.door-inside-series-subtitle{
  margin: 1rem;
  text-align: center;
}
</style>