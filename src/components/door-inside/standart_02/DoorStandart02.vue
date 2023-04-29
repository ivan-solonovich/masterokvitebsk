<template>
  <div class="armany">
    <BackToSeries/>
    <h1 class="armany-title">Стандарт 02</h1>
    <div class="container">
      <h2 class="armany-subtitle">От 131 руб за полотно и от 187 руб за комплект c матовым стеклом</h2>
      <h2 class="armany-subtitle">От 145 руб за полотно и от 201 руб за комплект cо стеклом с рисунком (фьюзингом)</h2>
      <h4 class="armany-subtitle-desc">Окончательная стоимость может зависить от пипа фурнитуры, необходимости использовать дополнительные компоненты
        и других факторов, - проконсультируйтесь с нашим специалистом. Это - бесплатно!</h4>
    </div>
    <div class="container door-series-container">
      <div class="door-series">
        <img class="door-series-img" src="../../../assets/door-inside/door-series/standart_02/C2_beldyb.png" alt="">
        <h6 class="door-series-desc" ><span>Цвет:</span> Беленый дуб></h6>
        <h6 class="door-series-desc" ><span>Стекло:</span> Матовое</h6>
      </div>
      <div class="door-series">
        <img class="door-series-img" src="../../../assets/door-inside/door-series/standart_02/C2f_beldyb.png" alt="">
        <h6 class="door-series-desc" ><span>Цвет:</span> Беленый дуб></h6>
        <h6 class="door-series-desc" ><span>Стекло:</span> С фьюзингом</h6>
      </div>
      <div class="door-series">
        <img class="door-series-img" src="../../../assets/door-inside/door-series/standart_02/C2_ital.png" alt="">
        <h6 class="door-series-desc" ><span>Цвет:</span> Итальянский орех</h6>
        <h6 class="door-series-desc" ><span>Стекло:</span> Матовое</h6>
      </div>
      <div class="door-series">
        <img class="door-series-img" src="../../../assets/door-inside/door-series/standart_02/C2f_ital.png" alt="">
        <h6 class="door-series-desc" ><span>Цвет:</span> Итальянский орех</h6>
        <h6 class="door-series-desc" ><span>Стекло:</span> С фьюзингом</h6>
      </div>
      <div class="door-series">
        <img class="door-series-img" src="../../../assets/door-inside/door-series/standart_02/C2_milan.png" alt="">
        <h6 class="door-series-desc" ><span>Цвет:</span> Миланский орех</h6>
        <h6 class="door-series-desc" ><span>Стекло:</span>  Матовое</h6>
      </div>
      <div class="door-series">
        <img class="door-series-img" src="../../../assets/door-inside/door-series/standart_02/C2f_milan.png" alt="">
        <h6 class="door-series-desc" ><span>Цвет:</span> Миланский орех</h6>
        <h6 class="door-series-desc" ><span>Стекло:</span>  С фьюзингом</h6>
      </div>
      <div class="door-series">
        <img class="door-series-img" src="../../../assets/door-inside/door-series/standart_02/C2_venge.png" alt="">
        <h6 class="door-series-desc" ><span>Цвет:</span> Венге</h6>
        <h6 class="door-series-desc" ><span>Стекло:</span>  Матовое</h6>
      </div>
      <div class="door-series">
        <img class="door-series-img" src="../../../assets/door-inside/door-series/standart_02/C2f_venge.png" alt="">
        <h6 class="door-series-desc" ><span>Цвет:</span> Венге</h6>
        <h6 class="door-series-desc" ><span>Стекло:</span>   С фьюзингом</h6>
      </div>
    </div>
    <BackToSeries/>
    <ContactContainerMobile/>
  </div>
</template>

<script>
import BackToSeries from "@/components/door-inside/BackToSeries";
import ContactContainerMobile from "@/components/mobile/mobileMenu/ContactContainerMobile";
export default {
  name: "DoorStandart02",
  components: {ContactContainerMobile, BackToSeries}
}
</script>

<style scoped>
@import "@/assets/styles/door_armany.css";
</style>