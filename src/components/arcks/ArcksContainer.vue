<template>
<div class="arcks-container">
  <div class="main-title">
    <h2 class="arcks-title"> Арки</h2>
  </div>

  <div class="card mb-3" style="max-width: 840px; border: none">
    <div class="row g-0">
      <div class="col-md-4">
        <div class="image-container">
          <img src="../../assets/logos/cheap.png" class="img-fluid rounded-start cheap-img" alt="...">
        </div>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title" style="color: crimson">Цены производителя. Лучшие цены в стране!</h5>
          <p class="card-text">Никаких посредников! Конструкция арки будет доставлена вам прямо с завода.</p>
          <p class="card-text"><small class="text-muted">Никаких никаких скрытых платежей! Еще на этапе консультации,
            мы предоставим вам полную и точную информачию о формировании цены.</small></p>
        </div>
      </div>
    </div>
  </div>
    <div class="we-do-all">
      <h3 style="color: crimson; text-align: center">Мы выполняем весь комплекс работ по установке арок</h3>
    </div>
  <div class="container door-series-container">
    <router-link class="door-inside-series-link"  :to="{name:'arcks-milan'}">
      <div class="door-series">
        <img class="door-series-img" src="../../assets/arcks/Milano_ital.jpg" alt="">
        <h5 style="text-align: center">Модель Милан</h5>
        <h5 style="text-align: center; color: crimson">от 258 руб</h5>
      </div>
    </router-link>
    <router-link class="door-inside-series-link"  :to="{name:'arcks-palermo'}">
      <div class="door-series">
        <img class="door-series-img" src="../../assets/arcks/MILAN.png" alt="">
        <h5 style="text-align: center">Модель Палермо</h5>
        <h5 style="text-align: center; color: crimson">от 228 руб</h5>
      </div>
    </router-link>

  </div>
  <ContactContainerMobile/>
  <ArcksGallery/>
  <SocialNetworks/>
</div>
</template>

<script>
import ArcksGallery from "@/components/arcks/ArcksGallery";
import ContactContainerMobile from "@/components/mobile/mobileMenu/ContactContainerMobile";
import SocialNetworks from "@/components/networks/SocialNetworks";
export default {
  name: "ArcksContainer",
  components: {SocialNetworks, ContactContainerMobile, ArcksGallery}
}
</script>

<style scoped>
.arcks-container{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;
}
.arcks-title{
  padding-top: 2rem;
  padding-bottom: 2rem;
  color: crimson;
}
.image-container{
  width: 100%;
  display: flex;
  justify-content: center;
}
.cheap-img{
  width: 150px;
  height: 150px;
  text-align: center;
}
.door-series-container{
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.door-series{
  max-width: 200px;
  max-height: 450px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-left: 2rem;
  margin-right: 2rem;
  padding-bottom: 0;
}
.door-series-img{
  max-width: 220px;
  max-height: 300px;
  margin: 1rem;
}
a.door-inside-series-link{
  max-height: 450px;
  margin: 0;
  padding: 0;

}
.door-inside-series-link{
  cursor: pointer;
  text-decoration: none;
  color: #198754;
  padding: 0;
  margin: 0;
}
.door-inside-series-title{
  margin: 1rem;
  text-align: center;
  font-weight: bolder;
  color: crimson;
}
.door-inside-series-subtitle{
  margin: 1rem;
  text-align: center;
}
.we-do-all{
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 1rem;

}
</style>