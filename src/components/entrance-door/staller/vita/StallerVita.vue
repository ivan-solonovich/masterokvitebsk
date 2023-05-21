<template>
  <div class="entrance-door-details-wrapper">
    <BackToStaller/>
    <h2 class="entrance-door-details-title">СТАЛЛЕР ВИТА</h2>
    <div class="entrance-door-series-img-container" style="flex-wrap: wrap">
      <img class="door-series-img" src="../../../../assets/entrance-door/staller/alba_1.webp" loading="lazy" alt="СТАЛЛЕР ВИТА">
      <img class="door-series-img" src="../../../../assets/entrance-door/staller/alba_2.webp" loading="lazy" alt="СТАЛЛЕР ВИТА">

    </div>
    <div class="entrance-door-series-content-container">
      <h6 class="door-series-desc" ><span>от</span> 1319 руб</h6>
      <h6 class="door-series-desc" ><span></span>СТАЛЛЕР ВИТА</h6>
    </div>
    <div class="entrance-door-details-description">
      <p>Практичные, строгие и надежные двери с изюминкой. Подойдут для хозяев, которые ценят в интерьере лаконичность и минимализм.</p>
      <p>Два контура уплотнения, толщина металла 1,2 мм, а также утеплитель из минеральной ваты – все это на 100% защитит
        Ваше жилье от сквозняков, запахов и постороннего шума с лестничной площадки.</p>
      <p>На наружной панели совмещены два оттенка венге – черный и серый. Отдельное внимание заслуживает фрезеровка.
        Будьте уверены – эта модель двери будет выделять Вас среди других соседей! </p>
      <p>Внутренняя панель выполнена в мягком цвете — Экодуб молочный, который сочетается со многими межкомнатными
        дверями. Выглядит такая дверь очень стильно! Дополнительный антураж модели придает глубокая горизонтальная фрезеровка.</p>
      <p>Хромированная ручка ALFA идеально дополняет дизайн двери. Броненакладка на замке – обеспечит дополнительную защиту двери от взлома и проникновения.</p>
      <p>Дверь Вита от Staller оснащена двумя замками: верхний замок (3-й класс защиты) оснащен автошторкой,
        которая гарантирует защиту от сквозняков. Нижний замок - 4-й, высший класс защиты.</p>
      <p>Ночная задвижка – один из неотъемлемых атрибутов в квартирной двери и дополнительный фактор безопасности.</p>
      <p>Один из обязательных атрибутов входной двери в квартире – глазок.</p>
      <p>Модель Вита от Staller отлично сочетается с межкомнатными дверями</p>
    </div>
    <div class="entrance-door-details container">
      <h4 style="text-align: center">СВОЙСТВА ДВЕРИ</h4>
      <table class="table table-striped">
        <tbody>

        <tr>
          <td>Цвет внешний</td>
          <td>Венге черный</td>
        </tr>
        <tr>
          <td>Цвет внутренний</td>
          <td>Экодуб молочный</td>
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
  name: "StallerVita",
  components: {BackToStaller, ContactContainerMobile}
}
</script>

<style scoped>
@import "@/assets/styles/entrance_door.css";
</style>