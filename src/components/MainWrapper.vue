<template>
<div class="main-wrapper ">
  <div class="desktop-wrapper" v-show="!isMobile">
    <DesktopVersion/>
  </div>
  <div class="mobile-wrapper" v-show="isMobile">
   <MobileVersion/>
  </div>
  <FooterMain/>
</div>
</template>

<script>
import MobileVersion from "@/components/mobile/MobileVersion";
import DesktopVersion from "@/components/desktop/DesktopVersion";
import FooterMain from "@/components/footer/FooterMain";
export default {
  name: "MainWrapper",
  data(){
    return{
      isMobile: false
    }
  },
  components: {
    FooterMain,
    DesktopVersion,
    MobileVersion
  },
  created() {
    window.addEventListener('load', ()=>{
      if (innerWidth<1280){
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    })
    window.addEventListener('resize', ()=>{
      if (innerWidth<1280){
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    })
  },
}
</script>

<style scoped>
.main-wrapper{
  width: 100%;
}
</style>