<template>
<div class="door-inside-wrapper">
  <div class="container">
      <h1 class="door-inside-title">Межкомнатные двери </h1>

  </div>
  <div class="container">

   <DoorInsideSeries/>
    <SocialNetworks/>
  </div>

  <ContactContainerMobile/>
</div>
</template>

<script>

import DoorInsideSeries from "@/components/door-inside/DoorInsideSeries";
import ContactContainerMobile from "@/components/mobile/mobileMenu/ContactContainerMobile";
import SocialNetworks from "@/components/networks/SocialNetworks";
export default {
  name: "DoorInsideWrapper",
  components: {SocialNetworks, ContactContainerMobile, DoorInsideSeries},
}
</script>

<style scoped>
.door-inside-wrapper{
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

}
.door-inside-title{
  color: crimson;
  text-align: center;
}
</style>