<template>
<div class="desktop">
  <MobileMenu/>
  <PromoWrapperDesktop/>
</div>
</template>

<script>
import MobileMenu from "@/components/mobile/mobileMenu/MobileMenu";
import PromoWrapperDesktop from "@/components/desktop/promo-desktop/PromoWrapperDesktop";
export default {
  name: "DesktopVersion",
  components:{
    PromoWrapperDesktop,
    MobileMenu,

  }
}
</script>

<style scoped>

</style>