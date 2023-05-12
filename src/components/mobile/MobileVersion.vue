<template>
<div class="mobile ">
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
  name: "MobileVersion",
  components: {
    ContactContainerMobile,

    NavBar,
    RedLinePromo}
}
</script>

<style scoped>
.mobile{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}


</style>