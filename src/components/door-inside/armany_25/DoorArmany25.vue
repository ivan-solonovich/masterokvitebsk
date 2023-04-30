<template>
  <div class="armany">
    <BackToSeries/>
    <h1 class="armany-title">Армани 25</h1>
    <div class="container">
      <h2 class="armany-subtitle">От 169 руб за полотно и от 285 за комплект с матовым стеклом</h2>
      <h2 class="armany-subtitle">От 186 руб за полотно и от 303 за комплект с черным стеклом</h2>
      <h4 class="armany-subtitle-desc">Окончательная стоимость может зависить от пипа фурнитуры, необходимости использовать дополнительные компоненты
        и других факторов, - проконсультируйтесь с нашим специалистом. Это - бесплатно!</h4>
      <ColorAttension/>
    </div>
    <div class="container door-series-container">
      <div class="door-series">
        <img class="door-series-img" src="../../../assets/door-inside/door-series/armany_25/_25(ч)шале-графит.jpg" alt="">
        <h6 class="door-series-desc" ><span>Цвет:</span> Шале графит</h6>
        <h6 class="door-series-desc" ><span>Стекло:</span> Черное</h6>
      </div>


      <div class="door-series">
        <img class="door-series-img" src="../../../assets/door-inside/door-series/armany_25/_25_СкандиКлассик.jpg" alt="">
        <h6 class="door-series-desc" ><span>Цвет:</span> Сканди класик</h6>
        <h6 class="door-series-desc" ><span>Стекло:</span> Матовое</h6>
      </div>


      <div class="door-series">
        <img class="door-series-img" src="../../../assets/door-inside/door-series/armany_25/_25(ч)шале-корица.jpg" alt="">
        <h6 class="door-series-desc" ><span>Цвет:</span> Шале корица</h6>
        <h6 class="door-series-desc" ><span>Стекло:</span> Черное</h6>
      </div>

      <div class="door-series">
        <img class="door-series-img" src="../../../assets/door-inside/door-series/armany_25/_25(ч)шале-натуральный.jpg" alt="">
        <h6 class="door-series-desc" ><span>Цвет:</span> Шале натуральный</h6>
        <h6 class="door-series-desc" ><span>Стекло:</span>Черное</h6>
      </div>

      <div class="door-series">
        <img class="door-series-img" src="../../../assets/door-inside/door-series/armany_25/_25(ч)эшвайт.jpg" alt="">
        <h6 class="door-series-desc" ><span>Цвет:</span> Эшвайт</h6>
        <h6 class="door-series-desc" ><span>Стекло:</span> Матовое</h6>
      </div>




      <div class="door-series">
        <img class="door-series-img" src="../../../assets/door-inside/door-series/armany_25/_25(ч)шале-дымчатый.jpg" alt="">
        <h6 class="door-series-desc" ><span>Цвет:</span> Дуб дымчатый</h6>
        <h6 class="door-series-desc" ><span>Стекло:</span> Черное</h6>
      </div>

      <div class="door-series">
        <img class="door-series-img" src="../../../assets/door-inside/door-series/armany_25/_25(ч)венге.jpg" alt="">
        <h6 class="door-series-desc" ><span>Цвет:</span> Венге</h6>
        <h6 class="door-series-desc" ><span>Стекло:</span> Черное</h6>
      </div>
      <div class="door-series">
        <img class="door-series-img" src="../../../assets/door-inside/door-series/armany_25/_25_Бьянко.jpg" alt="">
        <h6 class="door-series-desc" ><span>Цвет:</span> Бьянко</h6>
        <h6 class="door-series-desc" ><span>Стекло:</span> Матовое</h6>
      </div>
      <div class="door-series">
        <img class="door-series-img" src="../../../assets/door-inside/door-series/armany_25/-25(ч).png" alt="">
        <h6 class="door-series-desc" ><span>Цвет:</span> Бьянко</h6>
        <h6 class="door-series-desc" ><span>Стекло:</span> Черное</h6>
      </div>
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
  name: "DoorArmany25",
  components: {ColorAttension, ContactContainerMobile, BackToSeries}
}
</script>

<style scoped>
@import "@/assets/styles/door_armany.css";
</style>