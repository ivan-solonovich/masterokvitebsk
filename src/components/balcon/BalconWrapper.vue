<template>
<div class="balcon-wrapper">
  <div class="balcon-title">
    <h2>Остекление балконов и лоджий</h2>
  </div>

  <div class="balcon-content container">
    <div class="img-content-container-wrapper">
      <router-link class="door-inside-series-link"  :to="{name:'balcon-home-cold'}">
        <div class="img-content-container">

          <img src="../../assets/balcon/cold-balcon.jpg" class="img-content-main" width="100">
          <div class="text-over-img" >
            <p class="over-text" >Остекление аллюминиевыми раздвижными системами</p>
            <p class="over-text">Холодное остекление</p>
          </div>

        </div>
    </router-link>
      <router-link class="door-inside-series-link"  :to="{name:'balcon-home-hot'}">
        <div class="img-content-container">

            <img src="../../assets/balcon/hot-balcon.jpg" class="img-content-main" width="100">
          <div class="text-over-img">
            <p class="over-text">Остекление оконными системами</p>
            <p class="over-text">Теплое остекление</p>
          </div>
        </div>
      </router-link>
  </div>
  </div>
  <div class="container">
    <p style="text-align: center; border: #198754 solid 1px; padding: 1rem;">Остекление балкона и лоджии помогает не только защитить дом от атмосферных осадков, пыли и уличного шума, но и
      сделать жилое пространство более комфортным.
      Холодное остекление балкона применимо в том случае, если перед вами стоит необходимость уменьшить нагрузку на балконную плиту.
      Алюминиевые рамы более легкие, но в то же время не так хорошо сохраняют тепло, как окна ПВХ. Тёплое остекление позволит
      превратить балкон в дополнительную комнату для отдыха или работы либо просто расширить прилегающее помещение.
      В любом случае после остекления это пространство будет более полезным, чем раньше.</p>
  </div>

<BalconGallery/>
  <SocialNetworks/>
  <ContactContainerMobile/>
</div>
</template>

<script>

import BalconGallery from "@/components/balcon/BalconGallery";
import SocialNetworks from "@/components/networks/SocialNetworks";
export default {
  name: "BalconWrapper",
  components: {SocialNetworks, BalconGallery},
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

.door-inside-series-link{
  cursor: pointer;
  text-decoration: none;
  color: #198754;
  margin-left: 2rem;
  margin-right: 2rem;
}
</style>