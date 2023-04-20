<template>
<div class="windows-home">
  <RedLineSecond/>
  <WindowsContent/>
  <WindowsSystem/>
</div>
</template>

<script>
import RedLineSecond from "@/components/others/RedLineSecond";
import WindowsContent from "@/components/windowshome/WindowsContent";
import WindowsSystem from "@/components/windowshome/WindowsSystem";
export default {
  name: "WindowsHome",
  components: {WindowsSystem, WindowsContent, RedLineSecond}
}
</script>

<style scoped>

</style>