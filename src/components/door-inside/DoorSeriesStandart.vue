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
      <router-link class="door-inside-series-link"  :to="{name:'standart_04'}">
        <div class="door-series">
          <img class="door-series-img" src="../../assets/door-inside/door-series/MODEL_4.jpg" alt="">
          <h5 style="text-align: center">Серия Стандарт 04</h5>
          <h5 style="text-align: center; color: crimson">от 113 руб</h5>
        </div>
      </router-link>
      <router-link class="door-inside-series-link"  :to="{name:'standart_05'}">
        <div class="door-series">
          <img class="door-series-img" src="../../assets/door-inside/door-series/MODEL_5.jpg" alt="">
          <h5 style="text-align: center">Серия Стандарт 05</h5>
          <h5 style="text-align: center; color: crimson">от 103 руб</h5>
        </div>
      </router-link>
      <router-link class="door-inside-series-link"  :to="{name:'standart_06'}">
        <div class="door-series">
          <img class="door-series-img" src="../../assets/door-inside/door-series/MODEL_6.jpg" alt="">
          <h5 style="text-align: center">Серия Стандарт 06</h5>
          <h5 style="text-align: center; color: crimson">от 103 руб</h5>
        </div>
      </router-link>
      <router-link class="door-inside-series-link"  :to="{name:'standart_07'}">
        <div class="door-series">
          <img class="door-series-img" src="../../assets/door-inside/door-series/MODEL_7.jpg" alt="">
          <h5 style="text-align: center">Серия Стандарт 07</h5>
          <h5 style="text-align: center; color: crimson">от 118 руб</h5>
        </div>
      </router-link>
      <router-link class="door-inside-series-link"  :to="{name:'standart_09'}">
        <div class="door-series">
          <img class="door-series-img" src="../../assets/door-inside/door-series/MODEL_9.jpg" alt="">
          <h5 style="text-align: center">Серия Стандарт 09</h5>
          <h5 style="text-align: center; color: crimson">от 103 руб</h5>
        </div>
      </router-link>
      <router-link class="door-inside-series-link"  :to="{name:'standart_10'}">
        <div class="door-series">
          <img class="door-series-img" src="../../assets/door-inside/door-series/MODEL_10.jpg" alt="">
          <h5 style="text-align: center">Серия Стандарт 10</h5>
          <h5 style="text-align: center; color: crimson">от 103 руб</h5>
        </div>
      </router-link>
      <router-link class="door-inside-series-link"  :to="{name:'standart_12'}">
        <div class="door-series">
          <img class="door-series-img" src="../../assets/door-inside/door-series/MODEL_12.jpg" alt="">
          <h5 style="text-align: center">Серия Стандарт 12</h5>
          <h5 style="text-align: center; color: crimson">от 103 руб</h5>
        </div>
      </router-link>
      <router-link class="door-inside-series-link"  :to="{name:'standart_13'}">
        <div class="door-series">
          <img class="door-series-img" src="../../assets/door-inside/door-series/MODEL_13.jpg" alt="">
          <h5 style="text-align: center">Серия Стандарт 13</h5>
          <h5 style="text-align: center; color: crimson">от 103 руб</h5>
        </div>
      </router-link>
      <router-link class="door-inside-series-link"  :to="{name:'standart_14'}">
        <div class="door-series">
          <img class="door-series-img" src="../../assets/door-inside/door-series/MODEL_14.jpg" alt="">
          <h5 style="text-align: center">Серия Стандарт 14</h5>
          <h5 style="text-align: center; color: crimson">от 103 руб</h5>
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