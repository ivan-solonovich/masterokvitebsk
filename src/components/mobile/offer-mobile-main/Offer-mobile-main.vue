<template>
<div class="offer-mobile-main">
  <div class="offer-mobile-main-okna-pvh">
    <img src="../../../assets/module-offer-main/m-window.png">
    <img src="../../../assets/module-offer-main/m-balcon.png">
    <img src="../../../assets/module-offer-main/m-cottage.png">
  </div>
</div>
</template>

<script>
export default {
  name: "Offer-mobile-main",
  created() {

    window.addEventListener('load',
        ()=>{
          let videoHeight = document.getElementById('main-video').height
          console.log(videoHeight)
        })
  }
}
</script>

<style scoped>
.offer-mobile-main{
  padding-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.offer-mobile-main-okna-pvh{
  display: flex;
  justify-content: center;

  align-items: center;
}
</style>