<template>
<div class="desktop">
  <RedLinePromo/>
  <NavBar/>
  <CaruselMain/>
  <CallbackMe/>
  <BenefitsOf/>
</div>
</template>

<script>

import RedLinePromo from "@/components/others/RedLinePromo";
import NavBar from "@/components/navbar/NavBar";
import CaruselMain from "@/components/carusel/CaruselMain";
import BenefitsOf from "@/components/others/BenefitsOf";
import CallbackMe from "@/components/CallbackMe";
export default {
  name: "DesktopVersion",
  components:{
    CallbackMe,
    BenefitsOf,
    NavBar,
    RedLinePromo,
    CaruselMain

  }
}
</script>

<style scoped>

</style>