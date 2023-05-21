<template>
  <div class="entrance-door-details-wrapper">
    <BackToStaller/>
    <h2 class="entrance-door-details-title">СТАЛЛЕР ЭТНА</h2>
    <div class="entrance-door-series-img-container" style="flex-wrap: wrap">
      <img class="door-series-img" src="../../../../assets/entrance-door/staller/etna_1.webp" loading="lazy" alt="СТАЛЛЕР ЭТНА">
      <img class="door-series-img" src="../../../../assets/entrance-door/staller/etna_2.webp" loading="lazy" alt="СТАЛЛЕР ЭТНА">

    </div>
    <div class="entrance-door-series-content-container">
      <h6 class="door-series-desc" ><span>от</span> 1440 руб</h6>
      <h6 class="door-series-desc" ><span></span>СТАЛЛЕР ЭТНА</h6>
    </div>
    <div class="entrance-door-details-description">
      <p>Эта дверь — эталонный образец аутентичного дизайна. Она подойдет для хозяев, которые ценят в интерьере оригинальность и экстравагантность.</p>
      <p>В модели продумана каждая деталь. Изящный молдинг, потрясающее сочетание материалов и цветов превращает дверь в настоящее произведение искусства.
      </p>
      <p>Наружная панель выполнена в глубоком черном цвете со вставкой, повторяющей срез натуральной древесины. Цвет вставки на выбор — Дун Санремо или Дуб Сонома.

        Покрытие внутренней панели сделано «под кожу». Оно невероятно мягкое и приятное на ощупь.</p>
      <p>Имитация швейной «строчки» расставляет дополнительные акценты в дизайне и придает модели необычайный шарм.</p>
      <p>Эти двери созданы для тех, кто хочет быть уверенным на 100% в защите своего жилья от взлома, от холода и потери
        тепла, от шума и других негативных факторов. Два замка 3-го и 4-го наивысшего класса защиты, броненакладка, ночная задвижка, противосъемные штыри.</p>
      <p>Дверь Этна имеет 2 контура уплотнения, утеплитель Knauf от зарекомендовавшего себя немецкого производителя.</p>

    </div>
    <div class="entrance-door-details container">
      <h4 style="text-align: center">СВОЙСТВА ДВЕРИ</h4>
      <table class="table table-striped">
        <tbody>

        <tr>
          <td>Цвет внешний</td>
          <td>Сонома дуб</td>
        </tr>
        <tr>
          <td>Цвет внутренний</td>
          <td>Сонома дуб</td>
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
import BackToStaller from "@/components/entrance-door/staller/BackToStaller";
export default {
  name: "StallerEtna",
  components: {BackToStaller, ContactContainerMobile}
}
</script>

<style scoped>
@import "@/assets/styles/entrance_door.css";
</style>