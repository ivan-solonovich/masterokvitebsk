<template>
<div class="windows-system">
  <div class="container">
    <div class="system-wrapper">
      <h2 class="steclo-paket">Одно, двух или трехкамерный стеклотакет с пожизненной гарантией</h2>
      <img class="windows-system-image" src="../../assets/windows/system/system.png" alt="">
      <h3 class="steclo-paket-two">Проконсультируйтесь у профессионала, что подходит лучше именно вам.</h3>
    </div>
    <ContactContainerMobile/>
  </div>
</div>
</template>

<script>
import ContactContainerMobile from "@/components/mobile/mobileMenu/ContactContainerMobile";
export default {
  name: "WindowsSystem",
  components: {ContactContainerMobile}
}
</script>

<style scoped>
.windows-system{
  width: 100%;
  display: flex;
  justify-content: center;
}
.system-wrapper{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.windows-system-image{
  max-width: 560px;
}
.steclo-paket{
  padding: .5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  background-color: #198754;
  color: aliceblue;
}
.steclo-paket-two{
  padding: .5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  background-color: #0b6efd;
  color: aliceblue;
}
</style>