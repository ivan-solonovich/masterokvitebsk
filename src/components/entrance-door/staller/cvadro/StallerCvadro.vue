<template>
  <div class="entrance-door-details-wrapper">
    <BackToStaller/>
    <h2 class="entrance-door-details-title">СТАЛЛЕР КВАДРО </h2>
    <div class="entrance-door-series-img-container" style="flex-wrap: wrap">
      <img class="door-series-img" src="../../../../assets/entrance-door/staller/cvadro_1.webp" loading="lazy" alt="СТАЛЛЕР КВАДРО ">
      <img class="door-series-img" src="../../../../assets/entrance-door/staller/cvadro_2.webp" loading="lazy" alt="СТАЛЛЕР КВАДРО ">

    </div>
    <div class="entrance-door-series-content-container">
      <h6 class="door-series-desc" ><span>от</span> 1405 руб</h6>
      <h6 class="door-series-desc" ><span></span>СТАЛЛЕР КВАДРО </h6>
    </div>
    <div class="entrance-door-details-description">
      <p>Металлическая входная дверь «Квадро» декорирована стильной геометрической фрезеровкой, что создает уникальный
        стильный образ модели. Для максимальной устойчивости к механическим нагрузкам толщина металла полотна и коробки
        составляет 1,5 мм.</p>
      <p>Высокопрочная входная дверь обладает влаго- и шумоизоляционными свойствами. Надежную защиту от проникновения
        сквозняков в ваш дом обеспечивает трехконтурное уплотнение: полотно – 2 контура профиль Е, коробка – 1 контур
        Шлегель. Для плотного прилегания двери, плавного открывания и закрывания дверь дополнена регулятором притвора.
      </p>

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
          <td>Тиковое дерево</td>
        </tr>
        <tr>
          <td>Цвет внутренний</td>
          <td>Венге светлый</td>
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
          <td>пвх</td>
        </tr>
        <tr>
          <td>Толщина внутренней панели</td>
          <td>16</td>
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
  name: "StallerCvadro",
  components: {BackToStaller, ContactContainerMobile}
}
</script>

<style scoped>
@import "@/assets/styles/entrance_door.css";
</style>