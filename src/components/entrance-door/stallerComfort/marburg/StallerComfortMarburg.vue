<template>
  <div class="entrance-door-details-wrapper">
    <BackToStallerComfort/>
    <h2 class="entrance-door-details-title">СТАЛЛЕР КОМФОРТ МАРБУРГ</h2>
    <div class="entrance-door-series-img-container" style="flex-wrap: wrap">
      <img class="door-series-img" src="../../../../assets/entrance-door/staller-comfort/marburg_1.webp" loading="lazy" alt="СТАЛЛЕР КОМФОРТ МАРБУРГ">
      <img class="door-series-img" src="../../../../assets/entrance-door/staller-comfort/marburg_2.webp" loading="lazy" alt="СТАЛЛЕР КОМФОРТ МАРБУРГ">

    </div>
    <div class="entrance-door-series-content-container">
      <h6 class="door-series-desc" ><span>от</span> 1045 руб</h6>
      <h6 class="door-series-desc" ><span></span>СТАЛЛЕР КОМФОРТ МАРБУРГ</h6>
    </div>
    <div class="entrance-door-details-description">
      <p>Входная дверь СТАЛЛЕР КОМФОРТ МАРБУРГ – один из лучших вариантов практичной и функциональной входной двери. В производстве
        используются надежные материалы, изделие хорошо подходит для белорусского климата.</p>

      <p>Часто хозяева предпочитают устанавливать СТАЛЛЕР КОМФОРТ МАРБУРГ в качестве входа в квартиру, ведь модель обладает
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
          <td>Верона графит</td>
        </tr>
        <tr>
          <td>Цвет внутренний</td>
          <td> Верона бьянко</td>
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
import BackToStallerComfort from "@/components/entrance-door/stallerComfort/BackToStallerComfort";
export default {
  name: "StallerComfortMarburg",
  components:{ContactContainerMobile, BackToStallerComfort}
}
</script>

<style scoped>
@import "@/assets/styles/entrance_door.css";
</style>