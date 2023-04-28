<template>


    <div class="goods-menu">
      <div class="container">
        <h2 style="text-align: center; background-color: #198754; padding-bottom: .5rem">Мы предлагаем справедливые цены на:</h2>
      </div>

      <div class="container">
          <div class="row  justify-content-center ">
              <router-link class="menu-item col-sm-12 col-6 icon-point p-3 name-point" :to="{name:'windows'}" active-class="none">
                  <div class=" col-sm-12 col-6 icon-point p-3">
                    <img class="goods-menu-image" src="../../assets/windows/sm_3x_close.png" alt="">
                    <h4 class="name-point">Окна</h4>
                  </div>
              </router-link>
                <div class=" col-sm-12 col-6 icon-point p-3">
                  <img class="goods-menu-image" src="../../assets/windows/door-outside.jpg" alt="">
                  <h4 class="name-point">Двери входные</h4>
                </div>
            <router-link class="menu-item col-sm-12 col-6 icon-point p-3 name-point" :to="{name:'doorsInside'}" active-class="none">
                  <div class=" col-sm-12 col-6 icon-point p-3">
                    <img class="goods-menu-image" src="../../assets/windows/door-inside.jpg" alt="">
                    <h4 class="name-point">Двери межкомнатные</h4>
                  </div>
                </router-link>
                <div class=" col-sm-12 col-6 icon-point p-3">
                  <img class="goods-menu-image" src="../../assets/windows/arcs.jpg" alt="">
                  <h4 class="name-point">Арки</h4>
                </div>

                <div class=" col-sm-12 col-6 icon-point p-3">
                  <img class="goods-menu-image" src="../../assets/windows/teplyj-balkon.jpg" alt="">
                  <h4 class="name-point">Остекление балконов</h4>
                </div>

                <div class=" col-sm-12 col-6 icon-point p-3">
                  <img class="goods-menu-image" src="../../assets/windows/acsessuars.jpeg" alt="">
                  <h4 class="name-point">Аксессуары</h4>
                </div>
          </div>
      </div>

    </div>
</template>

<script>
export default {
  name: "GoodsMenu"
}
</script>

<style scoped>
.goods-menu{
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
.menu-item{
  list-style: none;
  cursor: pointer;
  text-decoration: none;
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