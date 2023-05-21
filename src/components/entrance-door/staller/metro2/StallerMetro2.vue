<template>
  <div class="entrance-door-details-wrapper">
    <BackToStaller/>
    <h2 class="entrance-door-details-title">СТАЛЛЕР МЕТРО2</h2>
    <div class="entrance-door-series-img-container" style="flex-wrap: wrap">
      <img class="door-series-img" src="../../../../assets/entrance-door/staller/metro2_1.webp" loading="lazy" alt="СТАЛЛЕР МЕТРО2">
      <img class="door-series-img" src="../../../../assets/entrance-door/staller/metro2_2.webp" loading="lazy" alt="СТАЛЛЕР МЕТРО2">

    </div>
    <div class="entrance-door-series-content-container">
      <h6 class="door-series-desc" ><span>от</span> 1463 руб</h6>
      <h6 class="door-series-desc" ><span></span>СТАЛЛЕР МЕТРО2</h6>
    </div>
    <div class="entrance-door-details-description">
      <p> Современная входная дверь «Метро 2» декорирована квадратной фрезеровкой с разными уровнями, что придает двери
        невероятный образ сочетающий в себе и модерн, и минимализм. Такой образ входной двери позволит вам подчеркнуть
        стиль вашего дома и ваш личный вкус, поскольку такая дверь будет выигрышно выделяться среду стандартных дверей соседей.</p>
      <p>Внешнее МДФ полотно 16 мм обработано качественным экологичным покрытием Vinorit,
        обладающим антивандальными свойствами и защитой от внешних воздействий. Наличие
        регулятора притвора обеспечивает плавное комфортное открывание и закрывание, а также хорошее прилегание полотна к коробу.
        Высококачественные замочные механизмы защищены врезными броненакладками Apecs,
        обеспечивающими еще большую защиту от взлома вашей квартиры.</p>

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
          <td>Антрацит</td>
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
  name: "StallerMetro2",
  components: {BackToStaller, ContactContainerMobile}
}
</script>

<style scoped>
@import "@/assets/styles/entrance_door.css";
</style>