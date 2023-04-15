<template>
<div class="mobile">
  <RedLinePromo/>
  <NavBar/>
  <CaruselMain/>
  <CallbackMe/>
  <ContactContainerMobile/>
  <RedLineSecond/>
  <GoodsMenu/>
  <SocialNetworks/>
  <ContactContainerMobile/>
  <BenefitsOf/>
  <ContactContainerMobile/>
  <AndOther/>
</div>
</template>

<script>

import RedLinePromo from "@/components/others/RedLinePromo";
import NavBar from "@/components/navbar/NavBar";
import CaruselMain from "@/components/carusel/CaruselMain";
import BenefitsOf from "@/components/others/BenefitsOf";
import CallbackMe from "@/components/CallbackMe";
import RedLineSecond from "@/components/others/RedLineSecond";
import ContactContainerMobile from "@/components/mobile/mobileMenu/ContactContainerMobile";
import GoodsMenu from "@/components/goods-menu/GoodsMenu";
import SocialNetworks from "@/components/networks/SocialNetworks";
import AndOther from "@/components/and-other/AndOther";



export default {
  name: "MobileVersion",
  components: {
    AndOther,
    SocialNetworks,
    GoodsMenu,
    ContactContainerMobile, RedLineSecond, CallbackMe, BenefitsOf, CaruselMain, NavBar, RedLinePromo}
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