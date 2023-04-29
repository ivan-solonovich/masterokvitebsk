<template>
<div class="armany">
     <BackToSeries/>
      <h1 class="armany-title">Армани 00</h1>
      <div class="container">
            <h2 class="armany-subtitle">От 147 руб за полотно и от 262 за комплект</h2>
            <h4 class="armany-subtitle-desc">Окончательная стоимость может зависить от пипа фурнитуры, необходимости использовать дополнительные компоненты
              и других факторов, - проконсультируйтесь с нашим специалистом. Это - бесплатно!</h4>
            </div>
  <ColorAttension/>
      <div class="container door-series-container">

    <div class="door-series">
      <img class="door-series-img" src="../../../assets/door-inside/door-series/armany_00/00графит.jpg" alt="">
      <h6 class="door-series-desc" ><span>Цвет:</span> Графит</h6>
      <h6 class="door-series-desc" ><span>Стекло:</span> Без стекла</h6>
    </div>
    <div class="door-series">
      <img class="door-series-img" src="../../../assets/door-inside/door-series/armany_00/_00венге.jpg" alt="">
      <h6 class="door-series-desc" ><span>Цвет:</span> Венге</h6>
      <h6 class="door-series-desc" ><span>Стекло:</span> Без стекла</h6>
    </div>
    <div class="door-series">
      <img class="door-series-img" src="../../../assets/door-inside/door-series/armany_00/_00_Бьянко.jpg" alt="">
      <h6 class="door-series-desc" ><span>Цвет:</span> Бьянко</h6>
      <h6 class="door-series-desc" ><span>Стекло:</span> Без стекла</h6>
    </div>
    <div class="door-series">
      <img class="door-series-img" src="../../../assets/door-inside/door-series/armany_00/00беленыйдуб.jpg" alt="">
      <h6 class="door-series-desc" ><span>Цвет:</span> Беленый дуб</h6>
      <h6 class="door-series-desc" ><span>Стекло:</span> Без стекла</h6>
    </div>
    <div class="door-series">
      <img class="door-series-img" src="../../../assets/door-inside/door-series/armany_00/_00корица.jpg" alt="">
      <h6 class="door-series-desc" ><span>Цвет:</span> Корица</h6>
      <h6 class="door-series-desc" ><span>Стекло:</span> Без стекла</h6>
    </div>
    <div class="door-series">
      <img class="door-series-img" src="../../../assets/door-inside/door-series/armany_00/00дубдымчатый.jpg" alt="">
      <h6 class="door-series-desc" ><span>Цвет:</span> Дуб дымчатый</h6>
      <h6 class="door-series-desc" ><span>Стекло:</span> Без стекла</h6>
    </div>
    <div class="door-series">
      <img class="door-series-img" src="../../../assets/door-inside/door-series/armany_00/00СкандиКлассик.jpg" alt="">
      <h6 class="door-series-desc" ><span>Цвет:</span> Сканди класик</h6>
      <h6 class="door-series-desc" ><span>Стекло:</span> Без стекла</h6>
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
  name: "DoorArmany00",
  components: {ColorAttension, ContactContainerMobile, BackToSeries}
}
</script>

<style scoped>
@import "@/assets/styles/door_armany.css";
</style>