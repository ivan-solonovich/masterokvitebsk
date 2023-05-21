<template>
  <div class="entrance-door-details-wrapper">
    <BackToStaller/>
    <h2 class="entrance-door-details-title">СТАЛЛЕР ТОРОНТО</h2>
    <div class="entrance-door-series-img-container" style="flex-wrap: wrap">
      <img class="door-series-img" src="../../../../assets/entrance-door/staller/toronto_1.webp" loading="lazy" alt="СТАЛЛЕР ТОРОНТО">
      <img class="door-series-img" src="../../../../assets/entrance-door/staller/toronto_2.webp" loading="lazy" alt="СТАЛЛЕР ТОРОНТО">

    </div>
    <div class="entrance-door-series-content-container">
      <h6 class="door-series-desc" ><span>от</span> 1397 руб</h6>
      <h6 class="door-series-desc" ><span></span>СТАЛЛЕР ТОРОНТО</h6>
    </div>
    <div class="entrance-door-details-description">
      <p> Входная дверь с ярким характером. Подойдет для хозяев, которые ценят в интерьере индивидуальность и неординарность.</p>
      <p>Для надежной защиты Вашего жилья, модель двери оснащена двумя замками (3-й и 4-й высший класс защиты), противосъемными штырями и броненакладкой.</p>
      <p>Также в модели присутствует зарекомендовавший себя элемент – ночной страж.</p>

    </div>
    <div class="entrance-door-details container">
      <h4 style="text-align: center">СВОЙСТВА ДВЕРИ</h4>
      <table class="table table-striped">
        <tbody>
        <tr>
          <td>Толщина двери</td>
          <td> 83 </td>
        </tr>
        <tr>
          <td>Цвет внешний</td>
          <td>Камень черный</td>
        </tr>
        <tr>
          <td>Цвет внутренний</td>
          <td>Пекан темный</td>
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
          <td>8</td>
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
  name: "StallerToronto",
  components: {BackToStaller, ContactContainerMobile}
}
</script>

<style scoped>
@import "@/assets/styles/entrance_door.css";
</style>