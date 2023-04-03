<template>
<div class="desktop">
  <RedLinePromo/>
  <NavBar/>
  <CaruselMain/>
</div>
</template>

<script>

import RedLinePromo from "@/components/others/RedLinePromo";
import NavBar from "@/components/navbar/NavBar";
import CaruselMain from "@/components/carusel/CaruselMain";
export default {
  name: "DesktopVersion",
  components:{
    NavBar,
    RedLinePromo,
    CaruselMain

  }
}
</script>

<style scoped>

</style>