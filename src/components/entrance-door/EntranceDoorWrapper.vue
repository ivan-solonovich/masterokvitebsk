<template>
<div class="entrance-door-container">
  <div class="main-title">
    <h2 class="arcks-title"> Входные двери</h2>
  </div>
  <div class="container door-series-container">
    <router-link class="door-inside-series-link"  :to="{name:'entrance-door-garda'}">
      <div class="door-series">
        <img class="door-series-img" src="../../assets/entrance-door/СерияГарда.jpg" alt="Входный двери Серия Града">
        <h5 style="text-align: center">Гарда</h5>
        <h5 style="text-align: center; color: crimson">от 340 руб</h5>
      </div>
    </router-link>
    <router-link class="door-inside-series-link"  :to="{name:'entrance-door-staller'}">
      <div class="door-series">
        <img class="door-series-img" src="../../assets/entrance-door/СерияСталлер.jpg" alt="Входный двери Серия Сталлер">
        <h5 style="text-align: center">Cталлер</h5>
        <h5 style="text-align: center; color: crimson">от 1205 руб</h5>
      </div>
    </router-link>
    <router-link class="door-inside-series-link"  :to="{name:'entrance-door-staller-comfort'}">
      <div class="door-series">
        <img class="door-series-img" src="../../assets/entrance-door/СерияСталлерКомфорт.jpg" alt="Входный двери Серия Сталлер Комфорт">
        <h5 style="text-align: center">Cталлер Комфорт</h5>
        <h5 style="text-align: center; color: crimson">от 963 руб</h5>
      </div>
    </router-link>
    <router-link class="door-inside-series-link"  :to="{name:'entrance-door-staller-comfort'}">
      <div class="door-series">
        <img class="door-series-img" src="../../assets/entrance-door/СерияЙошкар.jpg" alt="Входный двери Серия Йошкар">
        <h5 style="text-align: center">Йошкар</h5>
        <h5 style="text-align: center; color: crimson">от 591 руб</h5>
      </div>
    </router-link>
  </div>
</div>
</template>

<script>
export default {
  name: "EntranceDoorWrapper"
}
</script>

<style scoped>
.entrance-door-container{
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.main-title{
  padding-top: 1rem;
  display: flex;
  justify-content: center;
}
.door-series-container{
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 3rem;
  padding-right: 2rem;
  padding-left: 2rem;
}
.door-series-img{
  width: 300px;
  height: auto;
}
.door-inside-series-link{
  cursor: pointer;
  text-decoration: none;
  color: #198754;

}
</style>