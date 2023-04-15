<template>
<div class="logo-container-mobile">
  <div class="logo-placement">
    <img class="logo-placement-image" src="../../../assets/logos/main-logo.jpg" alt="">
  </div>
  <div class="name-place">
    <span class="name-place-first">Мастер<span class="name-place-second">Ок</span></span>
    <span class="name-city">Витебск</span>
  </div>
</div>
</template>

<script>
export default {
  name: "LogoContainerMobile"
}
</script>

<style scoped>
.logo-container-mobile{
  max-width: 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo-placement{
  
}
.logo-placement-image{
  width: 60px;
  height: auto;
  padding-right: 1rem;
  border-radius: 50%;
  background-color: crimson;
}
.name-place{
  display: flex;
  flex-direction: column;
}
.name-place-first{
  color: slateblue;
}
.name-place-second{
  color: crimson;
}
.name-city{
  color: darkblue;
}
</style>