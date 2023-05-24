<template>
  <div className="entrance-door-details-wrapper">
    <BackToYochcar/>
    <h2 className="entrance-door-details-title">ЙОШКАР</h2>
    <div className="entrance-door-series-img-container" style="flex-wrap: wrap">
      <img className="door-series-img" src="../../../assets/entrance-door/yochcar/yochcar_1.webp" loading="lazy" alt="СТАЛЛЕР КОМФОРТ ЙОШКАР">
      <img className="door-series-img" src="../../../assets/entrance-door/yochcar/yochcar_2.webp" loading="lazy" alt="СТАЛЛЕР КОМФОРТ ЙОШКАР">
      <img className="door-series-img" src="../../../assets/entrance-door/yochcar/yochcar_3.webp" loading="lazy" alt="СТАЛЛЕР КОМФОРТ ЙОШКАР">
      <img className="door-series-img" src="../../../assets/entrance-door/yochcar/yochcar_4.webp" loading="lazy" alt="СТАЛЛЕР КОМФОРТ ЙОШКАР">
    </div>
    <div className="entrance-door-series-content-container">
      <h6 className="door-series-desc"><span>от</span> 591руб</h6>
      <h6 className="door-series-desc"><span></span>ЙОШКАР</h6>
    </div>
    <div className="entrance-door-details-description">
      <p>Входная дверь ЙОШКАР – один из лучших вариантов практичной и функциональной входной двери. В
        производстве
        используются надежные материалы, изделие хорошо подходит для белорусского климата.</p>
      <p>Ключевая особенность модели атмосферостойкое покрытие. Порошково-полимерный состав наружной стороны устойчив
        к непогоде и механическим воздействиям эксплуатации.
        ЙОШКАР можно устанавливать в дома с прямым выходом на улицу. Это могут быть загородные частные
        дома,
        летние дачи, офисы и склады.</p>
      <p>Часто хозяева предпочитают устанавливать ЙОШКАР в качестве входа в квартиру, ведь модель обладает
        всем необходимым набором надежной и безопасной двери. Дверное полотно с утеплителем и уплотнителем защищает от
        излишков шума с общей площадки многоквартирного дома. </p>
    </div>
    <div className="entrance-door-details container">
      <h4 style="text-align: center">СВОЙСТВА ДВЕРИ</h4>
      <table className="table table-striped">
        <tbody>
        <tr>
          <td>Толщина двери</td>
          <td> 68</td>
        </tr>
        <tr>
          <td>Цвет внешний</td>
          <td>Черный</td>
        </tr>
        <tr>
          <td>Цвет внутренний</td>
          <td>Венге, Ель карпатская, Дуб золотистый</td>
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
          <td>мдф</td>
        </tr>
        <tr>
          <td>Материал наружной панели</td>
          <td>металл</td>
        </tr>
        <tr>
          <td>Толщина внутренней панели</td>
          <td>8</td>
        </tr>
        <tr>
          <td>Тип покрытия наружной панели</td>
          <td>полимерно-порошковое</td>
        </tr>
        </tbody>
      </table>

    </div>
    <BackToYochcar/>
    <ContactContainerMobile/>
  </div>
</template>

<script>
import ContactContainerMobile from "@/components/mobile/mobileMenu/ContactContainerMobile";

import BackToYochcar from "@/components/entrance-door/yochkar/BackToYochcar";

export default {
  name: "YochkarYochkar",
  components: {BackToYochcar, ContactContainerMobile,}
}
</script>

<style scoped>
@import "@/assets/styles/entrance_door.css";
</style>