<template>
<div class="windows-home">
  <ZamerOkna/>
  <RedLineSecond/>
  <UstanovkaOkna/>
  <WindowsContent/>
  <WindowsSystem/>
  <OtlivOtkos/>
  <SocialNetworks/>
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
export default {
  name: "WindowsHome",
  components: {SocialNetworks, OtlivOtkos, UstanovkaOkna, ZamerOkna, WindowsSystem, WindowsContent, RedLineSecond}
}
</script>

<style scoped>

</style>