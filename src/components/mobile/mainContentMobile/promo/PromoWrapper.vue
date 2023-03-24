<template>
<div class="promo-wrapper">
  <video id="main-video" class="promo-video"  :width="videoOfWidth" playsinline autoplay="autoplay" muted loop="loop">
    <source src="../../../../assets/videos/background-promo.mp4" type="video/mp4">
    Error Message
  </video>
  <div class="main-title">
    <h1 id="main-title">На протяжении двух десятилетий :  <VueWriter class="typing" id="typing-text" :array="slogans"
                                                                     :eraseSpeed="10" :typeSpeed="70"  :intervals="200"/></h1>
    <div class="main-button-group">
<!--      <img src="../../../../assets/icons/phone.gif" alt="">-->
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "PromoWrapper",
  data() {
    return{
      slogans:
          [ "мы заботимся о вашем комфорте и уюте",
            "качество проверенное временем",
            "быстрый и надежный сервис"],
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
  justify-content: center;
  align-items: center;
  padding-top: 180px;
  padding-left: 1rem;
  color:aliceblue;
  text-shadow: 1px 1px 0px black ;
  font-size: 1.2rem;
}
.typing{
  color: aliceblue;
  text-shadow: 3px 3px 0px black ;
}
@media only screen and (max-width: 770px){
 .main-title{
   padding-top: 100px;
   font-size: .8rem;
 }
  .typing{
    font-size: .8rem;
  }
}
@media only screen and (min-width: 770px){
  .main-title{
    padding-top: 170px;
    font-size: 1.4rem;
  }
  .typing{
    font-size: 1.2rem;
  }
}
.main-button-group{
  width: 150px;
  height: 40px;
  display: flex;
  justify-content: space-between;
}
</style>