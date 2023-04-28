<template>
  <div class="armany">
    <h1 class="armany-title">Армани 01</h1>
    <div class="container">
      <h2 class="armany-subtitle">От 147 руб за полотно и от 262 за комплект с матовым стеклом</h2>
      <h2 class="armany-subtitle">От 163 руб за полотно и от 279 за комплект с черным стеклом</h2>
      <h4 class="armany-subtitle-desc">Окончательная стоимость может зависить от пипа фурнитуры, необходимости использовать дополнительные компоненты
        и других факторов, - проконсультируйтесь с нашим специалистом. Это - бесплатно!</h4>
    </div>
    <div class="container door-series-container">
      <div class="door-series">
        <img class="door-series-img" src="../../../assets/door-inside/door-series/armany_01/01эшвайт.jpg" alt="">
        <h6 class="door-series-desc" ><span>Цвет:</span> Эшвайт</h6>
        <h6 class="door-series-desc" ><span>Стекло:</span> Матовое</h6>
      </div>
      <div class="door-series">
        <img class="door-series-img" src="../../../assets/door-inside/door-series/armany_01/01эшвайт(ч).jpg" alt="">
        <h6 class="door-series-desc" ><span>Цвет:</span> Эшвайт</h6>
        <h6 class="door-series-desc" ><span>Стекло:</span> Черное</h6>
      </div>
      <div class="door-series">
        <img class="door-series-img" src="../../../assets/door-inside/door-series/armany_01/01чграфит.jpg" alt="">
        <h6 class="door-series-desc" ><span>Цвет:</span> Шале графит</h6>
        <h6 class="door-series-desc" ><span>Стекло:</span> Черное</h6>
      </div>
      <div class="door-series">
        <img class="door-series-img" src="../../../assets/door-inside/door-series/armany_01/01чкорица.jpg" alt="">
        <h6 class="door-series-desc" ><span>Цвет:</span> Шале корица</h6>
        <h6 class="door-series-desc" ><span>Стекло:</span> Черное</h6>
      </div>
      <div class="door-series">
        <img class="door-series-img" src="../../../assets/door-inside/door-series/armany_01/_01чнатур.jpg" alt="">
        <h6 class="door-series-desc" ><span>Цвет:</span> Шале натуральный</h6>
        <h6 class="door-series-desc" ><span>Стекло:</span>Черное</h6>
      </div>
      <div class="door-series">
        <img class="door-series-img" src="../../../assets/door-inside/door-series/armany_01/Amati_1_Dyb_Belenij.jpg" alt="">
        <h6 class="door-series-desc" ><span>Цвет:</span> Беленый дуб</h6>
        <h6 class="door-series-desc" ><span>Стекло:</span> Матовое</h6>
      </div>
      <div class="door-series">
        <img class="door-series-img" src="../../../assets/door-inside/door-series/armany_01/Amati_01(ch)_Dyb_belenij.jpg" alt="">
        <h6 class="door-series-desc" ><span>Цвет:</span> Беленый дуб</h6>
        <h6 class="door-series-desc" ><span>Стекло:</span> Черное</h6>
      </div>
      <div class="door-series">
        <img class="door-series-img" src="../../../assets/door-inside/door-series/armany_01/Amati_1_Dyb_Dimchatij.jpg" alt="">
        <h6 class="door-series-desc" ><span>Цвет:</span> Дуб дымчатый</h6>
        <h6 class="door-series-desc" ><span>Стекло:</span> Матовое</h6>
      </div>
      <div class="door-series">
        <img class="door-series-img" src="../../../assets/door-inside/door-series/armany_01/Amati_01(ch)_Dyb_dimchatij.jpg" alt="">
        <h6 class="door-series-desc" ><span>Цвет:</span> Дуб дымчатый</h6>
        <h6 class="door-series-desc" ><span>Стекло:</span> Черное</h6>
      </div>
      <div class="door-series">
        <img class="door-series-img" src="../../../assets/door-inside/door-series/armany_01/Amati_1_Venge.jpg" alt="">
        <h6 class="door-series-desc" ><span>Цвет:</span> Венге</h6>
        <h6 class="door-series-desc" ><span>Стекло:</span> Матовое</h6>
      </div>
      <div class="door-series">
        <img class="door-series-img" src="../../../assets/door-inside/door-series/armany_01/Amati_01(ch)_Dyb_venge.jpg" alt="">
        <h6 class="door-series-desc" ><span>Цвет:</span> Венге</h6>
        <h6 class="door-series-desc" ><span>Стекло:</span> Черное</h6>
      </div>
      <div class="door-series">
        <img class="door-series-img" src="../../../assets/door-inside/door-series/armany_01/_01_Бьянко.jpg" alt="">
        <h6 class="door-series-desc" ><span>Цвет:</span> Бьянко</h6>
        <h6 class="door-series-desc" ><span>Стекло:</span> Матовое</h6>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "DoorArmany01"
}
</script>

<style scoped>
.armany{
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.armany-title{
  text-align: center;
  color: crimson;
  font-weight: bolder;
  padding: 2rem;
}
.armany-subtitle{
  text-align: center;
  padding: 1rem;
}
.armany-subtitle-desc{
  text-align: center;
  padding: 1rem;
  background-color: #198754;
  padding-bottom: 2rem;
}
.door-series-container{
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.door-series{
  max-width: 200px;
  height: 556px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  margin: 3rem;
}
.door-series-img{
  width: 220px;
  height: 492px;
  margin: 1rem;
}

.door-series-desc{
  text-align: center;
  padding-top: .5rem;
  padding-bottom: .5rem
}
</style>