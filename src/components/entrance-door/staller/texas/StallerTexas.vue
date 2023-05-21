<template>
  <div class="entrance-door-details-wrapper">
    <BackToStaller/>
    <h2 class="entrance-door-details-title">СТАЛЛЕР ТЕХАС</h2>
    <div class="entrance-door-series-img-container" style="flex-wrap: wrap">
      <img class="door-series-img" src="../../../../assets/entrance-door/staller/texas_1.webp" loading="lazy" alt="СТАЛЛЕР ТЕХАС">
      <img class="door-series-img" src="../../../../assets/entrance-door/staller/texas_2.webp" loading="lazy" alt="СТАЛЛЕР ТЕХАС">
      <img class="door-series-img" src="../../../../assets/entrance-door/staller/texas_3.webp" loading="lazy" alt="СТАЛЛЕР ТЕХАС">
    </div>
    <div class="entrance-door-series-content-container">
      <h6 class="door-series-desc" ><span>от</span> 1570 руб</h6>
      <h6 class="door-series-desc" ><span></span>СТАЛЛЕР ТЕХАС</h6>
    </div>
    <div class="entrance-door-details-description">
      <p>Металлический каркас входной двери «ТЕХАС» имеет толщину 1,5 мм, такая толщина металла гарантирует высокую
        износостойкость, устойчивость к значительным механическим нагрузкам и повышенную долговечность.</p>
      <p>Гладкие внутренние панели Profildoors (серии ZN и XN) идеально комплектуются для такой модели, позволяют создать единство со всеми дверьми внутри вашей квартиры.</p>
      <p>Выигрышные особенности двери «ТЕХАС»:</p>
      <p>– Вы можете самостоятельно выбрать цветовое решение (213 цветов по RAL и 2000 оттенков);</p>
      <p>– Можно использовать ваши рисунки для декора;</p>
      <p>– Широкий выбор декора и покрытий;</p>
      <p>– Возможно производство двери в нестандартных размерах. </p>
    </div>
    <div class="entrance-door-details container">
      <h4 style="text-align: center">СВОЙСТВА ДВЕРИ</h4>
      <table class="table table-striped">
        <tbody>
        <tr>
          <td>Толщина двери</td>
          <td> 84 </td>
        </tr>
        <tr>
          <td>Цвет внешний</td>
          <td>Дуб коньяк</td>
        </tr>
        <tr>
          <td>Цвет внутренний</td>
          <td>Дуб салинас светлый, Дуб салинас темный</td>
        </tr>
        <tr>
          <td>Размер</td>
          <td>860*2050</td>
        </tr>
        <tr>
          <td>Применение</td>
          <td>Квартирная</td>
        </tr>
        <tr>
          <td>Тип покрытия внутренней панели</td>
          <td>Экошпон</td>
        </tr>
        <tr>
          <td>Материал внутренней панели</td>
          <td>мдф</td>
        </tr>
        <tr>
          <td>Материал наружной панели</td>
          <td>мдф</td>
        </tr>
        <tr>
          <td>Толщина внутренней панели</td>
          <td>6</td>
        </tr>
        <tr>
          <td>Тип покрытия наружной панели</td>
          <td>мдф</td>
        </tr>
        </tbody>
      </table>

    </div>
    <BackToGarda/>
    <ContactContainerMobile/>
  </div>
</template>

<script>
import ContactContainerMobile from "@/components/mobile/mobileMenu/ContactContainerMobile";
import BackToStaller from "@/components/entrance-door/staller/BackToStaller";
export default {
  name: "StallerTexas",
  components: {BackToStaller, ContactContainerMobile}
}
</script>

<style scoped>
@import "@/assets/styles/entrance_door.css";
</style>