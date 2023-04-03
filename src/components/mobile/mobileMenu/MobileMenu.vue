<template>
<div class="mobile-menu">
  <NavContainerMobile/>
  <LogoContainerMobile/>
  <ContactContainerMobile/>
</div>
</template>

<script>
import LogoContainerMobile from "@/components/mobile/mobileMenu/LogoContainerMobile";
import NavContainerMobile from "@/components/mobile/mobileMenu/NavContainerMobile";
import ContactContainerMobile from "@/components/mobile/mobileMenu/ContactContainerMobile";
export default {
  name: "MobileMenu",
  components: {
    LogoContainerMobile,
    NavContainerMobile,
    ContactContainerMobile
  }
}
</script>

<style scoped>
  .mobile-menu{
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: .5rem;
    padding-right: .5rem;
  }

</style>