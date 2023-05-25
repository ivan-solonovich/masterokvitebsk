<template>
<div class="balcon-wrapper">
  <div class="balcon-title">
    <h2>Остекление балконов и лоджий</h2>
  </div>

  <div class="balcon-content container">
    <div class="img-content-container-wrapper">
        <div class="img-content-container">

          <img src="../../assets/balcon/cold-balcon.jpg" class="img-content-main" width="100">
          <div class="text-over-img" >
            <p class="over-text" >Остекление аллюминиевыми раздвижными системами</p>
            <p class="over-text">Холодное остекление</p>
          </div>


        </div>
        <div class="img-content-container">

            <img src="../../assets/balcon/hot-balcon.jpg" class="img-content-main" width="100">
          <div class="text-over-img">
            <p class="over-text">Остекление оконными системами</p>
            <p class="over-text">Теплое остекление</p>
          </div>
        </div>
  </div>
  </div>
  <div class="container">
    <p style="text-align: center; ">Остекление балкона и лоджии помогает не только защитить дом от атмосферных осадков, пыли и уличного шума, но и
      сделать жилое пространство более комфортным.
      Холодное остекление балкона применимо в том случае, если перед вами стоит необходимость уменьшить нагрузку на балконную плиту.
      Алюминиевые рамы более легкие, но в то же время не так хорошо сохраняют тепло, как окна ПВХ. Тёплое остекление позволит
      превратить балкон в дополнительную комнату для отдыха или работы либо просто расширить прилегающее помещение.
      В любом случае после остекления это пространство будет более полезным, чем раньше.</p>
  </div>
  <div class="container balcon-benefits">
  <h4 style="text-align: center; color: #198754">Преймущества остекления аллюминиевыми раздвижными системами</h4>
    <div class="container img-container-2">
    <img style="max-width: 300px; height: auto"  src="../../assets/balcon/cold-balcon-2.jpg" alt="">
    </div>
    <ul class="list-benefit">
      <li><Icon icon="mdi:check-circle" color="#27a287" /> Остекление алюминием в 2–3 раза дешевле, чем ПВХ.</li>
      <li><Icon icon="mdi:check-circle" color="#27a287" /> Для открывания раздвижных створок не требуется дополнительного пространства, они не создают ограничений в расстановке мебели, предметов интерьера</li>
      <li><Icon icon="mdi:check-circle" color="#27a287" /> У вас маленький балкон. Раздвижные створки экономят пространство — удобно вешать белье или проводить уборку</li>
      <li><Icon icon="mdi:check-circle" color="#27a287" />Когда нет потребности в дополнительном теплом помещении — достаточно «стеклянного барьера» от погодных условий</li>
      <li><Icon icon="mdi:check-circle" color="#27a287" />Узкие рамы незначительно перекрывают проем, благодаря чему попадает больше естественного освещения.</li>
      <li><Icon icon="mdi:check-circle" color="#27a287" /> Бесшумное перемещение створок вдоль металлических направляющих.</li>
    </ul>
</div>
</div>
</template>

<script>
//import ContactContainerMobile from "@/components/mobile/mobileMenu/ContactContainerMobile";
import { Icon } from '@iconify/vue';
export default {
  name: "BalconWrapper",
components: {Icon}
}
</script>

<style scoped>
.balcon-wrapper{
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.balcon-title{
  margin-top: 2rem;
  color: crimson;
  text-align: center;
}
.balcon-content{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.img-content-container-wrapper{
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.img-content-container{
  width: 300px;
  height: 300px;

  margin: 2rem;
}
.img-content-main{
  width:300px;
  height: 300px;
  z-index: 0;
  border-radius: 20%;
}
.text-over-img{
  z-index:1;
  font-size: 1.2em;
  margin-top: -40%;
}
.over-text{
  padding-left: 1.5rem;
  color: white;
}
.list-benefit{
  list-style: none;
}
.img-container-2{
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>