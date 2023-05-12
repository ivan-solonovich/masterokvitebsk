<template>
<div class="home-main">
  <ContactContainerMobile/>
  <CaruselMain/>
  <CallbackMe/>
  <ContactContainerMobile/>
  <RedLineSecond/>
  <GoodsMenu/>
  <GalleryWrapper/>
  <SocialNetworks/>
  <ContactContainerMobile/>
  <BenefitsOf/>
  <ContactContainerMobile/>
  <AndOther/>

</div>
</template>

<script>

import BenefitsOf from "@/components/others/BenefitsOf";
import CallbackMe from "@/components/CallbackMe";
import RedLineSecond from "@/components/others/RedLineSecond";
import ContactContainerMobile from "@/components/mobile/mobileMenu/ContactContainerMobile";
import GoodsMenu from "@/components/goods-menu/GoodsMenu";
import SocialNetworks from "@/components/networks/SocialNetworks";
import AndOther from "@/components/and-other/AndOther";
import CaruselMain from "@/components/carusel/CaruselMain";
import GalleryWrapper from "@/components/gallery/GalleryWrapper";
export default {
  name: "HomeMain",
  components: {
    GalleryWrapper,
    CaruselMain,
    AndOther,
    SocialNetworks,
    GoodsMenu,
    ContactContainerMobile,
    RedLineSecond,
    CallbackMe,
    BenefitsOf,
  },


}
</script>

<style scoped>

</style>