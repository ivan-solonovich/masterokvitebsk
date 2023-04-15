<template>
<div class="desktop">
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
  name: "DesktopVersion",
  components:{
    AndOther,
    SocialNetworks,
    GoodsMenu,
    ContactContainerMobile,
    RedLineSecond,
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