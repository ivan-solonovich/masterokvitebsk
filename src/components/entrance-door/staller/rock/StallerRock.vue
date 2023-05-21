<template>
  <div class="entrance-door-details-wrapper">
    <BackToStaller/>
    <h2 class="entrance-door-details-title">СТАЛЛЕР СКАЛА</h2>
    <div class="entrance-door-series-img-container" style="flex-wrap: wrap">
      <img class="door-series-img" src="../../../../assets/entrance-door/staller/line_1.webp" loading="lazy" alt="СТАЛЛЕР СКАЛА">
      <img class="door-series-img" src="../../../../assets/entrance-door/staller/line_2.webp" loading="lazy" alt="СТАЛЛЕР СКАЛА">

    </div>
    <div class="entrance-door-series-content-container">
      <h6 class="door-series-desc" ><span>от</span> 1347 руб</h6>
      <h6 class="door-series-desc" ><span></span>СТАЛЛЕР СКАЛА</h6>
    </div>
    <div class="entrance-door-details-description">
      <p> Наличие геометрических объемных фрезеровок подчеркивает современный образ квартирной двери «Скала».
                Конструкция с цельногнутым полотном усилена в районе замков и имеет 4 ребра жесткости.
                Прочная замковая система обладает 3-м классом взломостойкости, что обеспечивает высокую защиту
        вашего дома от краж и вскрытия замков.</p>
      <p>Для увеличения тепло- и шумоизоляционных свойств, огнеупорности и защиты от посторонних запахов,
        конструкция утеплена экологичной и безопасной минеральной ватой. Двухконтурный уплотнитель состоит из 1 контура.
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
          <td>Венге тёмный</td>
        </tr>
        <tr>
          <td>Цвет внутренний</td>
          <td> Пломбир</td>
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
  name: "StallerRock",
  components: {BackToStaller, ContactContainerMobile}
}
</script>

<style scoped>
@import "@/assets/styles/entrance_door.css";
</style>