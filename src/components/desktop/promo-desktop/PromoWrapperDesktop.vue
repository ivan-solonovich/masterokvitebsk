<template>
  <div class="promo-wrapper">
    <video id="main-video" class="promo-video"  :width="videoOfWidth" playsinline autoplay="autoplay" muted loop="loop">
      <source src="../../../assets/videos/background-promo.mp4" type="video/mp4">
      Error Message
    </video>
    <div class="main-title">
      <h1 id="main-title">   <VueWriter class="typing" id="typing-text" :array="slogans"
                                                                       :eraseSpeed="10" :typeSpeed="70"  :intervals="200"/></h1>
      <div class="main-button-group">
              <img src="../../../assets/icons/phone.gif" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PromoWrapperDesktop",
  data() {
    return{
      slogans:
          [ "Мы заботимся о вашем комфорте и уюте",
            "Гарантируем качество проверенное временем",
            "Быстрый и надежный сервис"],
      videoOfWidth: window.innerWidth,

    }},
  created(){

    window.addEventListener('load', ()=>{
      this.videoOfWidth = window.innerWidth ;

    })
    window.addEventListener('resize', ()=>{
      this.videoOfWidth = window.innerWidth;

    })

  },

}
</script>

<style scoped>
#main-video{
  position: fixed;
  object-fit: cover;
  position: fixed;
  left: 0;
  right: 0;
  top: 50px;
  bottom: 0;
  z-index: -1;
}
.main-title{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 180px;
  padding-left: 2rem;
  color:aliceblue;
  text-shadow: 1px 1px 0px black ;
  font-size: 2rem;
}
</style>