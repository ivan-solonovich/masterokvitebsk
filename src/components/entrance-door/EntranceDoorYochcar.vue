<template>
  <div class="entrance-door-garda">
    <div class="main-title">
      <h2 class="arcks-title"> Входные двери ЙОШКАР</h2>
    </div>
    <EntranceDoorBack/>
    <h5 style="text-align: center; background-color: #0b6efd; margin: 1rem; padding: .5rem; color: white;">Для некоторых
      дверей цвет внутренней отделки имеет несколько вариантов. Уточняйте возможные варианты в интересующих вас моделях.
      Или проконсультируйтесь у нашего специалиста.</h5>

    <div class=" entrance-door-container container">
      <div class="entrance-door-series">
        <router-link  :to="{name:'entrance-door-yochcar-1'}" active-class="none">
          <div class="entrance-door-series-img-container">
            <img class="door-series-img" src="../../assets/entrance-door/yochcar/yochcar_1.webp" loading="lazy" alt="Входные двери ЙОШКАР">
            <img class="door-series-img" src="../../assets/entrance-door/yochcar/yochcar_2.webp" loading="lazy" alt="Входные двери ЙОШКАР">
          </div>
          <div class="entrance-door-series-content-container">
            <h6 class="door-series-desc" ><span>от</span> 591 руб</h6>
            <h6 class="door-series-desc" ><span></span> ЙОШКАР</h6>
          </div>
        </router-link>
      </div>

    </div>
    <ContactContainerMobile/>
  </div>
</template>

<script>

import EntranceDoorBack from "@/components/entrance-door/EntranceDoorBack";
import ContactContainerMobile from "@/components/mobile/mobileMenu/ContactContainerMobile";

export default {
  name: "EntranceDoorYochcar",
  components: {EntranceDoorBack, ContactContainerMobile}
}
</script>

<style scoped>
.entrance-door-garda{
  width: 100%;
  display: flex;

  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 2rem;
  box-sizing: border-box;
}
.main-title{
  width: 100%;
  display: flex;
  justify-content: center;
}
.door-title{
  color: crimson;
  padding-bottom: 2rem;
}
.entrance-door-container{
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.entrance-door-series{
  width: 260px;
  height: 450px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 2rem;
  padding-right: 2rem;
}
.entrance-door-series-img-container{
  width: 100%;
  display: flex;
  justify-content: center;
}
.door-series-img{
  width: 120px;
  height: auto;
}
.entrance-door-series-content-container{
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
a{
  text-decoration: none;
  color: black;
}
</style>