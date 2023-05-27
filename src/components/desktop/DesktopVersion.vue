<template>
<div class="desktop">
  <RedLinePromo/>
  <NavBar/>
  <ContactContainerMobile/>
  <transition name="fade" mode="out-in">
 <router-view></router-view>
  </transition>
</div>
</template>

<script>

import RedLinePromo from "@/components/others/RedLinePromo";
import NavBar from "@/components/navbar/NavBar";
import ContactContainerMobile from "@/components/mobile/mobileMenu/ContactContainerMobile";


export default {
  name: "DesktopVersion",
  components:{
    ContactContainerMobile,


    NavBar,
    RedLinePromo,


  }
}
</script>

<style scoped>

</style>