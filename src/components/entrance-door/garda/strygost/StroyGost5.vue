<template>
<div class="entrance-door-details-wrapper">
  <BackToGarda/>
  <h2 class="entrance-door-details-title">ГАРДА СТРОЙГОСТ 5 РФ</h2>
      <div class="entrance-door-series-img-container">
        <img class="door-series-img" src="../../../../assets/entrance-door/garda/стройгост5ЗФметалл_1.jpg" loading="lazy" alt="Входные двери Гарда СТРОЙГОСТ 5 РФ">
        <img class="door-series-img" src="../../../../assets/entrance-door/garda/стройгост5ЗФметалл_2.jpg" loading="lazy" alt="Входные двери Гарда СТРОЙГОСТ 5 РФ">
      </div>
  <div class="entrance-door-series-content-container">
      <h6 class="door-series-desc" ><span>от</span> 340 руб</h6>
      <h6 class="door-series-desc" ><span></span> ГАРДА СТРОЙГОСТ 5 РФ</h6>
  </div>
  <div class="entrance-door-details-description">
    <p>Входная дверь Стройгост 5 РФ – один из лучших вариантов практичной и функциональной входной двери. В производстве
      используются надежные материалы, изделие хорошо подходит для белорусского климата.</p>
    <p>Ключевая особенность модели атмосферостойкое покрытие. Порошково-полимерный состав наружной стороны устойчив
      к непогоде и механическим воздействиям эксплуатации.
      Стройгост 5 РФ можно устанавливать в дома с прямым выходом на улицу. Это могут быть загородные частные дома,
      летние дачи, офисы и склады.</p>
    <p>Часто хозяева предпочитают устанавливать Стройгост 5 РФ в качестве входа в квартиру, ведь модель обладает
      всем необходимым набором надежной и безопасной двери. Дверное полотно с утеплителем и уплотнителем защищает от
      излишков шума с общей площадки многоквартирного дома. Декоративная внутренняя панель в цвете рустикальный дуб
      придает обстановке домашний уют.</p>
  </div>
  <div class="entrance-door-details container">
    <h4 style="text-align: center">СВОЙСТВА ДВЕРИ</h4>
    <table class="table table-striped">
      <tbody>
      <tr>
        <td>Толщина двери</td>
        <td>45</td>
      </tr>
      <tr>
        <td>Цвет внешний</td>
        <td>Медный антик</td>
      </tr>
      <tr>
        <td>Цвет внутренний</td>
        <td>Рустикальный дуб</td>
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
        <td>пвх</td>
      </tr>
      <tr>
        <td>Материал внутренней панели</td>
        <td>хдф</td>
      </tr>
      <tr>
        <td>Материал наружной панели</td>
        <td>металл</td>
      </tr>
      <tr>
        <td>Толщина внутренней панели</td>
        <td>3</td>
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
  name: "StroyGost5",
  components: {BackToGarda, ContactContainerMobile}
}
</script>

<style scoped>
@import "@/assets/styles/entrance_door.css";
</style>