<template>
<div class="color-attension">
  <div class="container">
    <h4 class="color-attension-title" >
      Цвет изделий на сайте может отличатся от оригинала, свяжмтесь с нами, и наш сотрудник предоставит вам оригинальную палитру цветов.
    </h4>
  </div>
</div>
</template>

<script>
export default {
  name: "ColorAttension"
}
</script>

<style scoped>
.color-attension{
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.color-attension-title{
  text-align: center;
  background-color: crimson;
  color: aliceblue;

  padding-top: 1rem;
  padding-bottom: 1rem;
}
</style>