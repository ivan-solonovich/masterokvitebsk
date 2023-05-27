<template>
<div class="container balcon-cold-wrapper">
  <BackToBalcon/>
  <div class="balcon-title">
    <h2>Остекление аллюминиевыми раздвижными системами</h2>
  </div>
  <div class="container balcon-benefits">

    <div class="container img-container-2">
      <img class="balcon-img" style="max-width: 300px; height: 280px"  src="../../assets/balcon/cold-balcon-2.jpg" alt="">
      <img class="balcon-img" style="max-width: 300px; height: auto"  src="../../assets/balcon/cold-balcon-3.jpg" alt="">
      <img class="balcon-img" style="max-width: 300px; height: auto"  src="../../assets/balcon/cold-balcon-4.jpg" alt="">
      <img class="balcon-img" style="max-width: 300px; height: auto"  src="../../assets/balcon/cold-balcon-5.jpg" alt="">
    </div>
    <h4 style="text-align: center; background-color: #198754; padding: 1rem;">Преймущества остекления аллюминиевыми раздвижными системами</h4>
    <ul class="list-benefit">
      <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#27a287" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"/></svg> Остекление алюминием в 2–3 раза дешевле, чем ПВХ.</li>
      <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#27a287" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"/></svg> Для открывания раздвижных створок не требуется дополнительного пространства, они не создают ограничений в расстановке мебели, предметов интерьера</li>
      <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#27a287" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"/></svg> У вас маленький балкон. Раздвижные створки экономят пространство — удобно вешать белье или проводить уборку</li>
      <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#27a287" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"/></svg> Когда нет потребности в дополнительном теплом помещении — достаточно «стеклянного барьера» от погодных условий</li>
      <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#27a287" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"/></svg> Узкие рамы незначительно перекрывают проем, благодаря чему попадает больше естественного освещения.</li>
      <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#27a287" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"/></svg> Бесшумное перемещение створок вдоль металлических направляющих.</li>
    </ul>
  </div>
  <div class="balcon-desc ">
    <h4>Мы также выполняем другие работы по благоустройству балконов и лоджий, не стесняйтесь спросить специалиста,
      чем мы можем вам помочь! Возможно производство работ любой сложности.</h4>
  </div>

  <div class="container img-container-2">
    <div class="balcon-img-other">
    <img class="balcon-img" style="max-width: 260px; height: 260px"  src="../../assets/balcon/image-31.png" alt="">
    <h6>Укрепление парапета</h6>
  </div>
    <div class="balcon-img-other">
    <img class="balcon-img" style="max-width: 260px; height: 260px"  src="../../assets/balcon/image-3.png" alt="">
      <h6>Установка крыши</h6>
    </div>
    <div class="balcon-img-other">
    <img class="balcon-img" style="max-width: 260px; height: 260px"  src="../../assets/balcon/image-4.png" alt="">
      <h6>Отделка парапета снаружи</h6>
    </div>
    <div class="balcon-img-other">
    <img class="balcon-img" style="max-width: 260px; height: 260px"  src="../../assets/balcon/image-5.png" alt="">
      <h6>Отделка балкона внутри</h6>
    </div>
    <div class="balcon-desc ">
      <h4>Каждый случай индивидуален, оценить объем и стоимость работ иногда возможно только при обследовании балкона нашим специалистом.</h4>
    </div>
  </div>
  <ContactContainerMobile/>
  <BalconGallery/>
  <SocialNetworks/>
</div>
</template>

<script>

import BackToBalcon from "@/components/balcon/BackToBalcon";
import ContactContainerMobile from "@/components/mobile/mobileMenu/ContactContainerMobile";
import BalconGallery from "@/components/balcon/BalconGallery";
import SocialNetworks from "@/components/networks/SocialNetworks";
export default {
  name: "BalconCold",
  components: {SocialNetworks, BalconGallery, ContactContainerMobile, BackToBalcon }
}
</script>

<style scoped>
.balcon-title{
  color: crimson;
  text-align: center;
}
.list-benefit{
  list-style: none;
}
.img-container-2{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;
}
.balcon-img{
  padding: 1rem;
}
.balcon-desc{
  display: flex;
  justify-content: center;
  padding: 1rem;
  margin: 1rem;
  background-color: crimson;
  color: white;
}
.balcon-img-other{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
}
</style>