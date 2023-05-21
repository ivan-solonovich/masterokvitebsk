<template>
  <div class="entrance-door-details-wrapper">
    <BackToStaller/>
    <h2 class="entrance-door-details-title">СТАЛЛЕР МОДЕРНО</h2>
    <div class="entrance-door-series-img-container" style="flex-wrap: wrap">
      <img class="door-series-img" src="../../../../assets/entrance-door/staller/moderno_1.webp" loading="lazy" alt="СТАЛЛЕР МОДЕРНО">
      <img class="door-series-img" src="../../../../assets/entrance-door/staller/moderno_2.webp" loading="lazy" alt="СТАЛЛЕР МОДЕРНО">

    </div>
    <div class="entrance-door-series-content-container">
      <h6 class="door-series-desc" ><span>от</span> 1440 руб</h6>
      <h6 class="door-series-desc" ><span></span>СТАЛЛЕР МОДЕРНО</h6>
    </div>
    <div class="entrance-door-details-description">
      <p> Входная дверь с ярким характером. Подойдет для хозяев, которые ценят в интерьере индивидуальность и неординарность.</p>


      <p>Для надежной защиты Вашего жилья, модель двери оснащена двумя замками (3-й и 4-й высший класс защиты), противосъемными штырями и броненакладкой.</p>
      <p>Также в модели присутствует зарекомендовавший себя элемент – ночной страж.</p>
      <p>Ручка Alfa – идеально сочетается с дверью как внутри так и снаружи.</p>
      <p>Дверной глазок – как один из важных элементов в квартирной двери – выполнен в цвет со всей фурнитурой.</p>
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
          <td>Венге тёмный</td>
        </tr>
        <tr>
          <td>Цвет внутренний</td>
          <td> ZB Белый</td>
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
          <td>Экошпон</td>
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
  name: "StallerModerno",
  components: {BackToStaller, ContactContainerMobile}
}
</script>

<style scoped>
@import "@/assets/styles/entrance_door.css";
</style>