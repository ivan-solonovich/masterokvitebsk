<template>
<div class="mobile">
  <MobileMenu/>
 <PromoWrapper/>
</div>
</template>

<script>
import MobileMenu from "@/components/mobile/mobileMenu/MobileMenu";
import PromoWrapper from "@/components/mobile/mainContentMobile/promo/PromoWrapper";
export default {
  name: "MobileVersion",
  components: {PromoWrapper, MobileMenu}
}
</script>

<style scoped>

</style>