<template>
  <div class="entrance-door-details-wrapper">
    <BackToStaller/>
    <h2 class="entrance-door-details-title">СТАЛЛЕР МИЛЕНА</h2>
    <div class="entrance-door-series-img-container" style="flex-wrap: wrap">
      <img class="door-series-img" src="../../../../assets/entrance-door/staller/milena_1.webp" loading="lazy" alt="СТАЛЛЕР МИЛЕНА">
      <img class="door-series-img" src="../../../../assets/entrance-door/staller/milena_2.webp" loading="lazy" alt="СТАЛЛЕР МИЛЕНА">

    </div>
    <div class="entrance-door-series-content-container">
      <h6 class="door-series-desc" ><span>от</span> 1383 руб</h6>
      <h6 class="door-series-desc" ><span></span>СТАЛЛЕР МИЛЕНА</h6>
    </div>
    <div class="entrance-door-details-description">
      <p>Строгие, элегантные и стильные двери. Подойдут для хозяев, которые ценят в интерьере лаконичность и минимализм.
        Изюминка модели — изящный горизонтальный молдинг и имитация швейной «строчки».</p>
      <p>Наружная панель выполнена в роскошном цвете – Венге черный. Дизайн дополняет молдинг.
      </p>
      <p>Внутреннюю панель можно взять на выбор — в цвет наружной панели или с отделкой «Белая кожа». Имитация кожи
        в отделке полотна мягкая и приятная на ощупь.</p>
      <p>Надежную шумо- и теплоизоляцию Вам обеспечат: 2 контура уплотнения, утеплитель Knauf.</p>
      <p>Кроме того, такая дверь — это надежное решение для любой квартиры! Дверь оснащена двумя замками (3-го и 4-го
        высшего класса защиты). Также в двери присутствуют противосъемные штыри, которые устойчивы к взлому.</p>
      <p>Хромированная ручка ALFA идеально дополняет дизайн двери. Броненакладка на наружной панели двери обеспечивает
        дополнительную защиту двери.</p>
      <p>Дверь оснащена ночной задвижкой, которая обеспечит дополнительную защиту двери. Вскрыть данную задвижку
        снаружи нет никакой возможности, ведь она запирается только изнутри.</p>
      <p>Сложно представить квартирную дверь без дверного глазка. Ведь именно благодаря ему Вы сможете осмотреть пространство за дверью.</p>
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
          <td>Венге черный</td>
        </tr>
        <tr>
          <td>Цвет внутренний</td>
          <td>Кожа белая</td>
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
          <td>пвх</td>
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
          <td>пвх</td>
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
  name: "StallerMilena",
  components: {BackToStaller, ContactContainerMobile}
}
</script>

<style scoped>
@import "@/assets/styles/entrance_door.css";
</style>