<template>
<div class="armany">
      <h1 class="armany-title">Армани 00</h1>
      <div class="container">
            <h2 class="armany-subtitle">От 147 руб за полотно и от 262 за комплект</h2>
            <h4 class="armany-subtitle-desc">Окончательная стоимость может зависить от пипа фурнитуры, необходимости использовать дополнительные компоненты
              и других факторов, - проконсультируйтесь с нашим специалистом. Это - бесплатно!</h4>
            </div>
      <div class="container door-series-container">

    <div class="door-series">
      <img class="door-series-img" src="../../../assets/door-inside/door-series/armany_00/00графит.jpg" alt="">
      <h6 class="door-series-desc" ><span>Цвет:</span> Графит</h6>
      <h6 class="door-series-desc" ><span>Стекло:</span> Без стекла</h6>
    </div>
    <div class="door-series">
      <img class="door-series-img" src="../../../assets/door-inside/door-series/armany_00/_00венге.jpg" alt="">
      <h6 class="door-series-desc" ><span>Цвет:</span> Венге</h6>
      <h6 class="door-series-desc" ><span>Стекло:</span> Без стекла</h6>
    </div>
    <div class="door-series">
      <img class="door-series-img" src="../../../assets/door-inside/door-series/armany_00/_00_Бьянко.jpg" alt="">
      <h6 class="door-series-desc" ><span>Цвет:</span> Бьянко</h6>
      <h6 class="door-series-desc" ><span>Стекло:</span> Без стекла</h6>
    </div>
    <div class="door-series">
      <img class="door-series-img" src="../../../assets/door-inside/door-series/armany_00/00беленыйдуб.jpg" alt="">
      <h6 class="door-series-desc" ><span>Цвет:</span> Беленый дуб</h6>
      <h6 class="door-series-desc" ><span>Стекло:</span> Без стекла</h6>
    </div>
    <div class="door-series">
      <img class="door-series-img" src="../../../assets/door-inside/door-series/armany_00/_00корица.jpg" alt="">
      <h6 class="door-series-desc" ><span>Цвет:</span> Корица</h6>
      <h6 class="door-series-desc" ><span>Стекло:</span> Без стекла</h6>
    </div>
    <div class="door-series">
      <img class="door-series-img" src="../../../assets/door-inside/door-series/armany_00/00дубдымчатый.jpg" alt="">
      <h6 class="door-series-desc" ><span>Цвет:</span> Дуб дымчатый</h6>
      <h6 class="door-series-desc" ><span>Стекло:</span> Без стекла</h6>
    </div>
    <div class="door-series">
      <img class="door-series-img" src="../../../assets/door-inside/door-series/armany_00/00СкандиКлассик.jpg" alt="">
      <h6 class="door-series-desc" ><span>Цвет:</span> Сканди класик</h6>
      <h6 class="door-series-desc" ><span>Стекло:</span> Без стекла</h6>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "DoorArmany00"
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
.door-inside-series-link{
  cursor: pointer;
  text-decoration: none;
  color: #198754;
}
.door-series-desc{
  text-align: center;
  padding-top: .5rem;
  padding-bottom: .5rem
}
.armany-subtitle-desc{
  text-align: center;
  padding: 1rem;
  background-color: #198754;
  padding-bottom: 2rem;
}
</style>