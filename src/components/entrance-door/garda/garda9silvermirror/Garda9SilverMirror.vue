<template>
  <div class="entrance-door-details-wrapper">
    <BackToGarda/>
    <h2 class="entrance-door-details-title">ГАРДА 9 СЕРЕБРО ЗЕРКАЛО</h2>
    <div class="entrance-door-series-img-container" style="flex-wrap: wrap">
      <img class="door-series-img" src="../../../../assets/entrance-door/garda/ГАРДА9СЕРЕБРОЗЕРКАЛО_1.webp" loading="lazy" alt="ГАРДА 9 СЕРЕБРО ЗЕРКАЛО">
      <img class="door-series-img" src="../../../../assets/entrance-door/garda/ГАРДА9СЕРЕБРОЗЕРКАЛО_2.webp" loading="lazy" alt="ГАРДА 9 СЕРЕБРО ЗЕРКАЛО">

    </div>
    <div class="entrance-door-series-content-container">
      <h6 class="door-series-desc" ><span>от</span> 866 руб</h6>
      <h6 class="door-series-desc" ><span></span>ГАРДА 9 СЕРЕБРО ЗЕРКАЛОЕ</h6>
    </div>
    <div class="entrance-door-details-description">
      <p>Входная дверь ГАРДА 9 СЕРЕБРО ЗЕРКАЛО – один из лучших вариантов практичной и функциональной входной двери. В производстве
        используются надежные материалы, изделие хорошо подходит для белорусского климата.</p>
      <p>Ключевая особенность модели атмосферостойкое покрытие. Порошково-полимерный состав наружной стороны устойчив
        к непогоде и механическим воздействиям эксплуатации.
        Стройгост 5 РФ можно устанавливать в дома с прямым выходом на улицу. Это могут быть загородные частные дома,
        летние дачи, офисы и склады.</p>
      <p>Часто хозяева предпочитают устанавливать ГАРДА 9 СЕРЕБРО ЗЕРКАЛО в качестве входа в квартиру, ведь модель обладает
        всем необходимым набором надежной и безопасной двери. Дверное полотно с утеплителем и уплотнителем защищает от
        излишков шума с общей площадки многоквартирного дома. </p>
    </div>
    <div class="entrance-door-details container">
      <h4 style="text-align: center">СВОЙСТВА ДВЕРИ</h4>
      <table class="table table-striped">
        <tbody>
        <tr>
          <td>Толщина двери</td>
          <td> 90 </td>
        </tr>
        <tr>
          <td>Цвет внешний</td>
          <td>Серебро антик</td>
        </tr>
        <tr>
          <td>Цвет внутренний</td>
          <td>Эмалит белый</td>
        </tr>
        <tr>
          <td>Размер</td>
          <td>860*2050</td>
        </tr>
        <tr>
          <td>Применение</td>
          <td>Уличная</td>
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
          <td>металл</td>
        </tr>
        <tr>
          <td>Толщина внутренней панели</td>
          <td>10</td>
        </tr>
        <tr>
          <td>Тип покрытия наружной панели</td>
          <td>полимерно-порошковое</td>
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
import BackToGarda from "@/components/entrance-door/garda/BackToGarda";
export default {
  name: "Garda9SilverMirror",
  components: {BackToGarda, ContactContainerMobile}
}
</script>

<style scoped>
@import "@/assets/styles/entrance_door.css";
</style>