<template>
  <div class="entrance-door-details-wrapper">
    <BackToStallerComfort/>
    <h2 class="entrance-door-details-title">СТАЛЛЕР КОМФОРТ БАВАРИЯ</h2>
    <div class="entrance-door-series-img-container" style="flex-wrap: wrap">
      <img class="door-series-img" src="../../../../assets/entrance-door/staller-comfort/bavaria_1.webp" loading="lazy" alt="СТАЛЛЕР КОМФОРТ БАВАРИЯ">
      <img class="door-series-img" src="../../../../assets/entrance-door/staller-comfort/bavaria_2.webp" loading="lazy" alt="СТАЛЛЕР КОМФОРТ БАВАРИЯ">

    </div>
    <div class="entrance-door-series-content-container">
      <h6 class="door-series-desc" ><span>от</span> 1004 руб</h6>
      <h6 class="door-series-desc" ><span></span>СТАЛЛЕР КОМФОРТ БАВАРИЯ</h6>
    </div>
    <div class="entrance-door-details-description">
      <p>Входная дверь СТАЛЛЕР КОМФОРТ БАВАРИЯ – один из лучших вариантов практичной и функциональной входной двери. В производстве
        используются надежные материалы, изделие хорошо подходит для белорусского климата.</p>
      <p>Ключевая особенность модели атмосферостойкое покрытие. Порошково-полимерный состав наружной стороны устойчив
        к непогоде и механическим воздействиям эксплуатации.
        СТАЛЛЕР КОМФОРТ БАВАРИЯ можно устанавливать в дома с прямым выходом на улицу. Это могут быть загородные частные дома,
        летние дачи, офисы и склады.</p>
      <p>Часто хозяева предпочитают устанавливать СТАЛЛЕР КОМФОРТ БАВАРИЯ в качестве входа в квартиру, ведь модель обладает
        всем необходимым набором надежной и безопасной двери. Дверное полотно с утеплителем и уплотнителем защищает от
        излишков шума с общей площадки многоквартирного дома. </p>
    </div>
    <div class="entrance-door-details container">
      <h4 style="text-align: center">СВОЙСТВА ДВЕРИ</h4>
      <table class="table table-striped">
        <tbody>
        <tr>
          <td>Толщина двери</td>
          <td> 75 </td>
        </tr>
        <tr>
          <td>Цвет внешний</td>
          <td>Орех темный</td>
        </tr>
        <tr>
          <td>Цвет внутренний</td>
          <td>ZB Белый</td>
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
          <td>Vinorit</td>
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
import BackToStallerComfort from "@/components/entrance-door/stallerComfort/BackToStallerComfort";
export default {
  name: "StallerComfortBavaria",
  components:{ContactContainerMobile, BackToStallerComfort}
}
</script>

<style scoped>
@import "@/assets/styles/entrance_door.css";
</style>