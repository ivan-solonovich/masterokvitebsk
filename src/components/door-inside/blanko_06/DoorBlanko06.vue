<template>
  <div class="armany">
    <BackToSeries/>
    <h1 class="armany-title">Бланко 06</h1>
    <div class="container">
      <h2 class="armany-subtitle">От 149 руб за полотно и от 241 за комплект с матовым стеклом</h2>
      <h2 class="armany-subtitle">От 181 руб за полотно и от 276 за комплект с черным стеклом</h2>
      <h4 class="armany-subtitle-desc">Окончательная стоимость может зависить от пипа фурнитуры, необходимости использовать дополнительные компоненты
        и других факторов, - проконсультируйтесь с нашим специалистом. Это - бесплатно!</h4>
      <ColorAttension/>
    </div>
    <div class="container door-series-container">
      <div class="door-series">
        <img class="door-series-img" src="../../../assets/door-inside/door-series/blanko_06/06ДубСонома.png" alt="">
        <h6 class="door-series-desc" ><span>Цвет:</span> Дуб Сонома</h6>
        <h6 class="door-series-desc" ><span>Стекло:</span> Матовое</h6>
      </div>
      <div class="door-series">
        <img class="door-series-img" src="../../../assets/door-inside/door-series/blanko_06/06(ч)ДубСонома.png" alt="">
        <h6 class="door-series-desc" ><span>Цвет:</span> Дуб Сонома</h6>
        <h6 class="door-series-desc" ><span>Стекло:</span> Черное</h6>
      </div>
      <div class="door-series">
        <img class="door-series-img" src="../../../assets/door-inside/door-series/blanko_06/06ЛиственницаСибиу.png" alt="">
        <h6 class="door-series-desc" ><span>Цвет:</span> Лиственница сибиу</h6>
        <h6 class="door-series-desc" ><span>Стекло:</span> Матовое</h6>
      </div>

      <div class="door-series">
        <img class="door-series-img" src="../../../assets/door-inside/door-series/blanko_06/06(ч)ЛиственницаСибиу.png" alt="">
        <h6 class="door-series-desc" ><span>Цвет:</span> Дуб стирлинг</h6>
        <h6 class="door-series-desc" ><span>Стекло:</span> Черное</h6>
      </div>
      <div class="door-series">
        <img class="door-series-img" src="../../../assets/door-inside/door-series/blanko_06/06ДубСтирлинг.png" alt="">
        <h6 class="door-series-desc" ><span>Цвет:</span> Дуб стирлинг</h6>
        <h6 class="door-series-desc" ><span>Стекло:</span> Матовое</h6>
      </div>
      <div class="door-series">
        <img class="door-series-img" src="../../../assets/door-inside/door-series/blanko_06/06(ч)ДубСтирлинг.png" alt="">
        <h6 class="door-series-desc" ><span>Цвет:</span> Дуб стирлинг</h6>
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
  name: "DoorArmany17",
  components: {ColorAttension, ContactContainerMobile, BackToSeries}
}
</script>


<style scoped>
@import "@/assets/styles/door_armany.css";
</style>