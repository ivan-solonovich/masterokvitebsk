<template>
  <div class="armany">
    <BackToSeries/>
    <h1 class="armany-title">Стандарт 34</h1>
    <div class="container">
      <h2 class="armany-subtitle">От 103 руб за полотно и от 155 руб за комплект c матовым стеклом</h2>
      <h4 class="armany-subtitle-desc">Окончательная стоимость может зависить от пипа фурнитуры, необходимости использовать дополнительные компоненты
        и других факторов, - проконсультируйтесь с нашим специалистом. Это - бесплатно!</h4>
      <ColorAttension/>
    </div>
    <div class="container door-series-container">
      <div class="door-series">
        <img class="door-series-img" src="../../../assets/door-inside/door-series/standart_34/C34_beldyb.png" alt="">
        <h6 class="door-series-desc" ><span>Цвет:</span> Беленый дуб></h6>
        <h6 class="door-series-desc" ><span>Стекло:</span> Матовое</h6>
      </div>

      <div class="door-series">
        <img class="door-series-img" src="../../../assets/door-inside/door-series/standart_34/C34_ital.png" alt="">
        <h6 class="door-series-desc" ><span>Цвет:</span> Итальянский орех</h6>
        <h6 class="door-series-desc" ><span>Стекло:</span> Матовое</h6>
      </div>

      <div class="door-series">
        <img class="door-series-img" src="../../../assets/door-inside/door-series/standart_34/C34_milan.png" alt="">
        <h6 class="door-series-desc" ><span>Цвет:</span> Миланский орех</h6>
        <h6 class="door-series-desc" ><span>Стекло:</span>  Матовое</h6>
      </div>

      <div class="door-series">
        <img class="door-series-img" src="../../../assets/door-inside/door-series/standart_34/C34_venge.png" alt="">
        <h6 class="door-series-desc" ><span>Цвет:</span> Венге</h6>
        <h6 class="door-series-desc" ><span>Стекло:</span>  Матовое</h6>
      </div>9
    </div>
    <BackToSeries/>
    <ContactContainerMobile/>
  </div>
</template>

<script>
import BackToSeries from "@/components/door-inside/BackToSeries";
import ContactContainerMobile from "@/components/mobile/mobileMenu/ContactContainerMobile";
import ColorAttension from "@/components/door-inside/ColorAttension";
export default {
  name: "DoorStandart34",
  components: {ColorAttension, ContactContainerMobile, BackToSeries}
}
</script>

<style scoped>
@import "@/assets/styles/door_armany.css";
</style>