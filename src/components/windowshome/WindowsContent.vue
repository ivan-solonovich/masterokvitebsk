<template>
<div class="windows-content">
  <div class="container">
    <h2 style="text-align: center; background-color: #198754; padding-bottom: .5rem">Мы предлагаем справедливые цены на:</h2>
  </div>

  <div class="container">
    <div class="row  justify-content-center ">

        <div class=" col-sm-12 col-6 icon-point p-3">
          <img class="goods-menu-image" src="../../assets/windows/one-win/sm_gluh.png" alt="">
          <h4 class="name-point">Окно одинарное глухое</h4>
          <h4 class="price">от 99 руб</h4>
        </div>

      <div class=" col-sm-12 col-6 icon-point p-3">
        <img class="goods-menu-image" src="../../assets/windows/one-win/sm_close.png" alt="">
        <h5 class="name-point">Окно одинарное с окрывающейся створкой</h5>
        <h4 class="price">от 160 руб</h4>
      </div>

      <div class=" col-sm-12 col-6 icon-point p-3">
        <img class="goods-menu-image" src="../../assets/windows/two-win/sm_right_close.png" alt="">
        <h5 class="name-point">Двухстворчатое с одной открывающейся створкой</h5>
        <h4 class="price">от 380 руб</h4>
      </div>

      <div class=" col-sm-12 col-6 icon-point p-3">
        <img class="goods-menu-image" src="../../assets/windows/two-win/two-win.png" alt="">
        <h5 class="name-point">Двухстворчатое с двумя открывающимеся створками</h5>
        <h4 class="price">от 470 руб</h4>
      </div>

      <div class=" col-sm-12 col-6 icon-point p-3">
        <img class="goods-menu-image" src="../../assets/windows/three-win/okna-three-one.png" alt="">
        <h5 class="name-point">Трехстворчатое с одной открывающейся створкой</h5>
        <h4 class="price">от 560 руб</h4>
      </div>

      <div class=" col-sm-12 col-6 icon-point p-3">
        <img class="goods-menu-image" src="../../assets/windows/three-win/1614578821_78-p-okno-na-belom-fone-98.jpg" alt="">
        <h4 class="name-point">Трехстворчатое с двумя открывающимеся створками</h4>
        <h4 class="price">от 650 руб</h4>
      </div>
      <div class=" col-sm-12 col-6 icon-point p-3">
        <img class="goods-menu-image" src="../../assets/windows/balcon/balcon-blok.jpg" alt="">
        <h4 class="name-point">Балконный блок</h4>
        <h4 class="price">от 540 руб</h4>
      </div>

    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "WindowsContent"
}
</script>

<style scoped>
.windows-content{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.icon-point{
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: .3rem;
}
.goods-menu-image{
  width: 180px;
  height: 180px;


}
.name-point{
  padding-top: .3rem;
  list-style: none;
  cursor: pointer;
  text-decoration: none;
  color: black;
}
.price{
  color: crimson;
}
@media only screen and (max-width: 690px) {
  .icon-point{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: .3rem;
  }
}
</style>