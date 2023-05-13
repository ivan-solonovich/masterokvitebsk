<template>
  <div class="main-nav container-fluid">
      <nav class="navbar sticky-top navbar-expand-lg ">
        <div class="container-fluid">

    <!--      The brand container-->
          <a class="navbar-brand" href="#">
            <LogoContainerMobile/>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="menu-item" :to="{name:'home'}" active-class="none">
                <a class="nav-link active" aria-current="page" href="#">На главную</a>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="menu-item" :to="{name:'windows'}" active-class="none">
                <a class="nav-link" href="#">Окна</a>
                </router-link>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">Остеклениие балконов</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Двери входные</a>
              </li>
              <li class="nav-item">
                <router-link class="menu-item" :to="{name:'doorsInside'}" active-class="none">
                <a class="nav-link" href="#">Двери межкомнатные</a>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="menu-item" :to="{name:'arcks'}" active-class="none">
                <a class="nav-link" href="#">Арки</a>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="menu-item" :to="{name:'knob'}" active-class="none">
                <a class="nav-link" href="#">Фурнитура</a>
                </router-link>
              </li>
            </ul>
          </div>
        </div>

      </nav>

    <hr style="width: 100%">


  </div>
</template>

<script>
import LogoContainerMobile from "@/components/mobile/mobileMenu/LogoContainerMobile";



export default {
  name: "NavBar",
  components: { LogoContainerMobile}
}
</script>

<style scoped>
.main-nav{


}
a{
  cursor: pointer;
  text-decoration: none;
}
.menu-item{
  list-style: none;
  cursor: pointer;
  text-decoration: none;
}
@media only screen and (max-width: 820px) {
  .main-nav{
    margin-bottom: 3.5rem;
  }
}
</style>