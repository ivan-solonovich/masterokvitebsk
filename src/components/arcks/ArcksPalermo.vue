<template>
  <div class="armany">
    <BackArcs/>
    <h1 class="armany-title">Модель Палермо</h1>
    <div class="container">
      <h2 class="armany-subtitle">От 228 руб</h2>

      <h4 class="armany-subtitle-desc">Окончательная стоимость может зависить от  необходимости использовать дополнительные компоненты
        и других факторов, - проконсультируйтесь с нашим специалистом. Это - бесплатно!</h4>
      <ColorAttension/>
    </div>
    <div class="container door-series-container">
      <div class="door-series">
        <img class="door-series-img" src="../../assets/arcks/arka-palermo-oak-belen.jpg" alt="">
        <h6 class="door-series-desc" ><span>Цвет:</span> Беленый дуб></h6>

      </div>
      <div class="door-series">
        <img class="door-series-img" src="../../assets/arcks/Palermo-italyanskij-orekh-1000x1340.jpg" alt="">
        <h6 class="door-series-desc" ><span>Цвет:</span> Итальянский орех></h6>

      </div>
      <div class="door-series">
        <img class="door-series-img" src="../../assets/arcks/MILAN.png" alt="">
        <h6 class="door-series-desc" ><span>Цвет:</span> Миланский орех</h6>

      </div>
      <div class="door-series">
        <img class="door-series-img" src="../../assets/arcks/arka-palermo.jpg" alt="">
        <h6 class="door-series-desc" ><span>Цвет:</span> Венге</h6>

      </div>

    </div>
    <BackArcs style="margin-bottom: 1rem"></BackArcs>
    <ContactContainerMobile/>
  </div>
</template>

<script>
import BackArcs from "@/components/arcks/BackArcs";
import ContactContainerMobile from "@/components/mobile/mobileMenu/ContactContainerMobile";
import ColorAttension from "@/components/door-inside/ColorAttension";
export default {
  name: "ArcksPalermo",
  components: {BackArcs, ContactContainerMobile, ColorAttension}
}
</script>

<style scoped>

</style>