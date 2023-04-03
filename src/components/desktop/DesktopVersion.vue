<template>
<div class="desktop">
  <RedLinePromo/>
  <NavBar/>
  <CaruselMain/>
  <BenefitsOf/>
</div>
</template>

<script>

import RedLinePromo from "@/components/others/RedLinePromo";
import NavBar from "@/components/navbar/NavBar";
import CaruselMain from "@/components/carusel/CaruselMain";
import BenefitsOf from "@/components/others/BenefitsOf";
export default {
  name: "DesktopVersion",
  components:{
    BenefitsOf,
    NavBar,
    RedLinePromo,
    CaruselMain

  }
}
</script>

<style scoped>

</style>