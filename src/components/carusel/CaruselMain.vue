<template>
  <div id="v" class="video-wrapper">
    <video id="main-video" class="promo-video" poster="../../assets/videos/poster_masterok.jpg"  :width="videoOfWidth" playsinline autoplay="autoplay" muted loop="loop">
      <source src="../../assets/videos/line-production.webm" type="video/webm">
      <source src="../../assets/videos/line-production.mp4" type="video/mp4">
      Error Message
    </video>
  </div>
</template>

<script>
export default {
  name: "CaruselMain",
  data() {
    return{

      videoOfWidth: window.innerWidth,

    }},
  created(){


    window.addEventListener('load', ()=>{
      this.videoOfWidth = window.innerWidth ;


      this.videoOfHeight = (this.videoOfWidth*16)/9
      console.log(this.videoOfHeight)
    })
    window.addEventListener('resize', ()=>{
      this.videoOfWidth = window.innerWidth;


      this.videoOfHeight =  (this.videoOfWidth*16)/9
      console.log(this.videoOfHeight)
    })

  },
}
</script>

<style scoped>
.video-wrapper{
  padding-top: 1rem;
}
</style>