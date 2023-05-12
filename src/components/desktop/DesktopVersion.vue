<template>
<div class="desktop">
  <RedLinePromo/>
  <NavBar/>
  <ContactContainerMobile/>
 <router-view></router-view>
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