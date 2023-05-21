<template>
  <div class="entrance-door-details-wrapper">
    <BackToStaller/>
    <h2 class="entrance-door-details-title">СТАЛЛЕР ЛАЙН</h2>
    <div class="entrance-door-series-img-container" style="flex-wrap: wrap">
      <img class="door-series-img" src="../../../../assets/entrance-door/staller/line_1.webp" loading="lazy" alt="СТАЛЛЕР ЛАЙН">
      <img class="door-series-img" src="../../../../assets/entrance-door/staller/line_2.webp" loading="lazy" alt="СТАЛЛЕРЛАЙН">

    </div>
    <div class="entrance-door-series-content-container">
      <h6 class="door-series-desc" ><span>от</span> 1333 руб</h6>
      <h6 class="door-series-desc" ><span></span>СТАЛЛЕР ЛАЙН</h6>
    </div>
    <div class="entrance-door-details-description">
      <p>Долговечная металлическая дверь «Лайн» обеспечивает ряд важных показателей для защиты вашего дома: термо- и
        звукоизоляция, 3-й класс взломостойкости, стойкость к возникновению сквозняков. В качестве замочной системы
        используются: верхний замок – Apecs
        Т57 с накладкой Apecs и автошторкой; нижний замок – Apecs Т52 с броненакладкой Apecs; задвижка – Apecs L-0260 и
        сложный цилиндр с поворотной ручкой.</p>
      <p>Благодаря наружным петлям и наличнику, встроенным в полотно, дверь открывается на 180 градусов плавно и комфортно.
        Внешнее и внутреннее полотно покрыты влагостойкими полотнами из экошпона и декорированы вертикальными объемными
        фрезеровками, которые помогают зрительно увеличить высоту потолков в вашем доме.

      </p>

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
          <td> Венге</td>
        </tr>
        <tr>
          <td>Цвет внутренний</td>
          <td> Венге</td>
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
          <td>12</td>
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
  name: "StallerLine",
  components: {BackToStaller, ContactContainerMobile}
}
</script>

<style scoped>
@import "@/assets/styles/entrance_door.css";
</style>