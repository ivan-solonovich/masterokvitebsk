<template>
  <div class="armany">
    <BackToSeries/>
    <h1 class="armany-title">Бланко 00</h1>
    <div class="container">
      <h2 class="armany-subtitle">От 129 руб за полотно и от 225 за комплект </h2>

      <h4 class="armany-subtitle-desc">Окончательная стоимость может зависить от пипа фурнитуры, необходимости использовать дополнительные компоненты
        и других факторов, - проконсультируйтесь с нашим специалистом. Это - бесплатно!</h4>
    </div>
    <div class="container door-series-container">
      <div class="door-series">
        <img class="door-series-img" src="../../../assets/door-inside/door-series/blanko_00/00-Дуб-Сонома.jpg" alt="">
        <h6 class="door-series-desc" ><span>Цвет:</span> Дуб Сонома</h6>
        <h6 class="door-series-desc" ><span>Стекло:</span> Без стекла</h6>
      </div>
      <div class="door-series">
        <img class="door-series-img" src="../../../assets/door-inside/door-series/blanko_00/00-Лиственница-Сибиу.jpg" alt="">
        <h6 class="door-series-desc" ><span>Цвет:</span> Лиственница сибиу</h6>
        <h6 class="door-series-desc" ><span>Стекло:</span> Без стекла</h6>
      </div>

      <div class="door-series">
        <img class="door-series-img" src="../../../assets/door-inside/door-series/blanko_00/00-Дуб-Стирлинг.jpg" alt="">
        <h6 class="door-series-desc" ><span>Цвет:</span> Дуб стирлинг</h6>
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
export default {
  name: "DoorArmany17",
  components: {ContactContainerMobile, BackToSeries}
}
</script>

<style scoped>
@import "@/assets/styles/door_armany.css";
</style>