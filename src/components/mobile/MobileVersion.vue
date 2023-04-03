<template>
<div class="mobile">
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
  name: "MobileVersion",
  components: {BenefitsOf, CaruselMain, NavBar, RedLinePromo}
}
</script>

<style scoped>
.mobile{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.mobile-container{
  max-width: 1279px;
}
.mobile-menu{
  position: fixed;
}

</style>