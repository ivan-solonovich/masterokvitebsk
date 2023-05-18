<template>
  <div class="entrance-door-garda">
        <div class="main-title">
          <h2 class="door-title"> Входные двери Гарда</h2>
        </div>
          <EntranceDoorBack/>
    <h5 style="text-align: center; background-color: #0b6efd; margin: 1rem; padding: .5rem; color: white;">Для большинства
      дверей цвет внутренней отделки имеет несколько вариантов. Уточняйте возможные варианты в интересующих вас моделях.
      Или проконсультируйтесь у нашего специалиста.</h5>
          <div class=" entrance-door-container">
            <div class="entrance-door-series">
              <router-link  :to="{name:'entrance-door-garda-stroygost5'}" active-class="none">
                  <div class="entrance-door-series-img-container">
                    <img class="door-series-img" src="../../assets/entrance-door/garda/стройгост5ЗФметалл_1.jpg" loading="lazy" alt="Входные двери Гарда СТРОЙГОСТ 5 РФ">
                    <img class="door-series-img" src="../../assets/entrance-door/garda/стройгост5ЗФметалл_2.jpg" loading="lazy" alt="Входные двери Гарда СТРОЙГОСТ 5 РФ">
                  </div>
                  <div class="entrance-door-series-content-container">
                    <h6 class="door-series-desc" ><span>от</span> 340 руб</h6>
                    <h6 class="door-series-desc" ><span></span> ГАРДА СТРОЙГОСТ 5 РФ</h6>
                  </div>
              </router-link>
            </div>
            <div class="entrance-door-series">
              <router-link  :to="{name:'entrance-door-garda-stroygost5met'}" active-class="none">
                <div class="entrance-door-series-img-container">
                  <img class="door-series-img" src="../../assets/entrance-door/garda/stroygost5-met_1.jpg" loading="lazy" alt="Входные двери Гарда ГАРДА СТРОЙГОСТ 5 РФ Металл/Металл">
                  <img class="door-series-img" src="../../assets/entrance-door/garda/stroygost5-met_2.jpg" loading="lazy" alt="Входные двери Гарда ГАРДА СТРОЙГОСТ 5 РФ Металл/Металл">
                </div>
                <div class="entrance-door-series-content-container">
                  <h6 class="door-series-desc" ><span>от</span> 356 руб</h6>
                  <h6 class="door-series-desc" ><span></span> ГАРДА СТРОЙГОСТ 5 РФ Металл/Металл</h6>
                </div>
              </router-link>
            </div>
            <div class="entrance-door-series">
              <router-link  :to="{name:'entrance-door-garda-stroygost5syl'}" active-class="none">
                <div class="entrance-door-series-img-container">
                  <img class="door-series-img" src="../../assets/entrance-door/garda/СТРОЙГОСТ5РФСЕРЕБРО_1.jpg" loading="lazy" alt="Входные двери Гарда ГАРДА СТРОЙГОСТ 5 РФ Металл/Металл">
                  <img class="door-series-img" src="../../assets/entrance-door/garda/СТРОЙГОСТ5РФСЕРЕБРО_2.jpg" loading="lazy" alt="Входные двери Гарда ГАРДА СТРОЙГОСТ 5 РФ Металл/Металл">
                </div>
                <div class="entrance-door-series-content-container">
                  <h6 class="door-series-desc" ><span>от</span> 371 руб</h6>
                  <h6 class="door-series-desc" ><span></span> ГАРДА СТРОЙГОСТ 5 РФ СЕРЕБРО</h6>
                </div>
              </router-link>
            </div>
            <div class="entrance-door-series">
              <router-link  :to="{name:'entrance-door-garda-8'}" active-class="none">
                <div class="entrance-door-series-img-container">
                  <img class="door-series-img" src="../../assets/entrance-door/garda/ВХОДНАЯДВЕРЬГАРДА8ММ_1.jpg" loading="lazy" alt="Входные двери Гарда ГАРДА 8">
                  <img class="door-series-img" src="../../assets/entrance-door/garda/ВХОДНАЯДВЕРЬГАРДА8ММ_2.jpg" loading="lazy" alt="Входные двери Гарда ГАРДА 8">

                </div>
                <div class="entrance-door-series-content-container">
                  <h6 class="door-series-desc" ><span>от</span> 549 руб</h6>
                  <h6 class="door-series-desc" ><span></span>ГАРДА 8 ММ</h6>
                </div>
              </router-link>
            </div>
            <div class="entrance-door-series">
              <router-link  :to="{name:'entrance-door-garda-muar-8'}" active-class="none">
                <div class="entrance-door-series-img-container">
                  <img class="door-series-img" src="../../assets/entrance-door/garda/ГАРДАМУАР8_1.webp" loading="lazy" alt="Входные двери Гарда ГАРДА 8">
                  <img class="door-series-img" src="../../assets/entrance-door/garda/ГАРДАМУАР8_2.webp" loading="lazy" alt="Входные двери Гарда ГАРДА 8">

                </div>
                <div class="entrance-door-series-content-container">
                  <h6 class="door-series-desc" ><span>от</span> 561 руб</h6>
                  <h6 class="door-series-desc" ><span></span>ГАРДА МУАР 8 ММ</h6>
                </div>
              </router-link>
            </div>
        </div>
<ContactContainerMobile/>
  </div>
</template>

<script>
import ContactContainerMobile from "@/components/mobile/mobileMenu/ContactContainerMobile";
import EntranceDoorBack from "@/components/entrance-door/EntranceDoorBack";
export default {
  name: "EntranceDoorGarda",
  components: {EntranceDoorBack, ContactContainerMobile}
}
</script>

<style scoped>
.entrance-door-garda{
  width: 100%;
  display: flex;

  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 2rem;
  box-sizing: border-box;
}
.main-title{
  width: 100%;
  display: flex;
  justify-content: center;
}
.door-title{
  color: crimson;
  padding-bottom: 2rem;
}
.entrance-door-container{
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.entrance-door-series{
  width: 260px;
  height: 450px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 2rem;
  padding-right: 2rem;
}
.entrance-door-series-img-container{
  width: 100%;
  display: flex;
  justify-content: center;
}
.door-series-img{
  width: 120px;
  height: auto;
}
.entrance-door-series-content-container{
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
a{
  text-decoration: none;
  color: black;
}
</style>