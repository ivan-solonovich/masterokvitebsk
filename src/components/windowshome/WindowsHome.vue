<template>
<div class="windows-home">
  <h2 style="text-align: center; color: crimson; padding: 2rem; font-weight: bolder;">Окна ПВХ для квартир, частных домов и нежилых помешений</h2>
  <ZamerOkna/>
  <RedLineSecond/>
  <UstanovkaOkna/>
  <WindowsContent/>
  <WindowsSystem/>
  <OtlivOtkos/>
  <WindowsGallery/>
  <SocialNetworks/>
  <ContactContainerMobile/>
</div>
</template>

<script>
import RedLineSecond from "@/components/others/RedLineSecond";
import WindowsContent from "@/components/windowshome/WindowsContent";
import WindowsSystem from "@/components/windowshome/WindowsSystem";
import ZamerOkna from "@/components/windowshome/ZamerOkna";
import UstanovkaOkna from "@/components/windowshome/UstanovkaOkna";
import OtlivOtkos from "@/components/windowshome/OtlivOtkos";
import SocialNetworks from "@/components/networks/SocialNetworks";
import WindowsGallery from "@/components/windowshome/WindowsGallery";
import ContactContainerMobile from "@/components/mobile/mobileMenu/ContactContainerMobile";

export default {
  name: "WindowsHome",
  components: {
    ContactContainerMobile,
    WindowsGallery,


    SocialNetworks, OtlivOtkos, UstanovkaOkna, ZamerOkna, WindowsSystem, WindowsContent, RedLineSecond}
}
</script>

<style scoped>
.windows-home{
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>