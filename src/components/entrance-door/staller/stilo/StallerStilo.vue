<template>
  <div class="entrance-door-details-wrapper">
    <BackToStaller/>
    <h2 class="entrance-door-details-title">СТАЛЛЕР СТИЛО</h2>
    <div class="entrance-door-series-img-container" style="flex-wrap: wrap">
      <img class="door-series-img" src="../../../../assets/entrance-door/staller/stilo_1.webp" loading="lazy" alt="СТАЛЛЕР СТИЛО">
      <img class="door-series-img" src="../../../../assets/entrance-door/staller/stilo_2.webp" loading="lazy" alt="СТАЛЛЕР СТИЛО">
      <img class="door-series-img" src="../../../../assets/entrance-door/staller/stilo_3.webp" loading="lazy" alt="СТАЛЛЕР СТИЛО">
      <img class="door-series-img" src="../../../../assets/entrance-door/staller/stilo_4.webp" loading="lazy" alt="СТАЛЛЕР СТИЛО">
    </div>
    <div class="entrance-door-series-content-container">
      <h6 class="door-series-desc" ><span>от</span> 1628 руб</h6>
      <h6 class="door-series-desc" ><span></span>СТАЛЛЕР СТИЛО</h6>
    </div>
    <div class="entrance-door-details-description">

      <p>В дверных блоках допускается искажение зеркал в соответствии с СТБ EN 1036-1-2013.</p>
      <p>Стильная входная дверь «Стило» имеет беззазорную конструкцию и может быть выполнена в двух размерных вариантах:
        860х2050 мм и 960х2050 мм. Внутренняя панель дополнена широкой зеркальной вставкой по вертикали, которая зрительно
        расширяет пространство коридора в вашем доме, делает его светлее. К тому же, зеркальная вставка может послужить
        в качестве гардеробного зеркала.</p>
      <p>Дверь выглядит очень стильно и современно. Подойдет для хозяев, которые ценят практичность и комфорт.</p>
      <p>На внешней панели выразительная древесная фактура в цвете Венге серый безупречно сочетается с черной матовой
        вставкой. Дополняет дизайн двери изящный вертикальный молдинг на стыке двух материалов.</p>
      <p>На внутренней панели во всю высоту полотна размещено зеркало. Это невероятно удобное решение, которое не имеет
        аналогов в других моделях. Кроме того, внутреннюю панель можно на выбор заказать в цветах Аляска, Антрацит,
        Манхэттен или Магнолия.</p>
      <p>3 контура уплотнения, утеплитель Knauf от немецкого производителя, толщина металла 1,5 мм –
        именно благодаря этим характеристикам дверь обеспечит шумо- и теплоизоляцию в Вашей квартире.</p>
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
          <td>Венге серый</td>
        </tr>
        <tr>
          <td>Цвет внутренний</td>
          <td> Аляска, Манхэттен, Магнолия</td>
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
          <td>Эмаль</td>
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
  name: "StallerStilo",
  components: {BackToStaller, ContactContainerMobile}
}
</script>

<style scoped>
@import "@/assets/styles/entrance_door.css";
</style>