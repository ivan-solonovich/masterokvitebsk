<template>
  <div class="entrance-door-details-wrapper">
    <BackToStaller/>
    <h2 class="entrance-door-details-title">СТАЛЛЕР ЛОФТ</h2>
    <div class="entrance-door-series-img-container" style="flex-wrap: wrap">
      <img class="door-series-img" src="../../../../assets/entrance-door/staller/loft_1.webp" loading="lazy" alt="СТАЛЛЕР ЛОФТ">
      <img class="door-series-img" src="../../../../assets/entrance-door/staller/loft_2.webp" loading="lazy" alt="СТАЛЛЕР ЛОФТ">

    </div>
    <div class="entrance-door-series-content-container">
      <h6 class="door-series-desc" ><span>от</span> 1535 руб</h6>
      <h6 class="door-series-desc" ><span></span>СТАЛЛЕР ЛОФТ</h6>
    </div>
    <div class="entrance-door-details-description">
      <p>Входная дверь СТАЛЛЕР ЛОФТ – один из лучших вариантов практичной и функциональной входной двери. В производстве
        используются надежные материалы, изделие хорошо подходит для белорусского климата.</p>

    </div>
    <div class="entrance-door-details container">
      <h4 style="text-align: center">СВОЙСТВА ДВЕРИ</h4>
      <table class="table table-striped">
        <tbody>
        <tr>
          <td>Толщина двери</td>
          <td> 93 </td>
        </tr>
        <tr>
          <td>Цвет внешний</td>
          <td>Шпат графит</td>
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
          <td>16</td>
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
  name: "StallerLoft",
  components: {BackToStaller, ContactContainerMobile}
}
</script>

<style scoped>
@import "@/assets/styles/entrance_door.css";
</style>