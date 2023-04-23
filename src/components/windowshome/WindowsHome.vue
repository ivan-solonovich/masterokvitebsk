<template>
<div class="windows-home">
  <ZamerOkna/>
  <RedLineSecond/>
  <WindowsContent/>
  <WindowsSystem/>
</div>
</template>

<script>
import RedLineSecond from "@/components/others/RedLineSecond";
import WindowsContent from "@/components/windowshome/WindowsContent";
import WindowsSystem from "@/components/windowshome/WindowsSystem";
import ZamerOkna from "@/assets/windows/ZamerOkna";
export default {
  name: "WindowsHome",
  components: {ZamerOkna, WindowsSystem, WindowsContent, RedLineSecond}
}
</script>

<style scoped>

</style>