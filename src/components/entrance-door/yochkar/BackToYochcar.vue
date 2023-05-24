<template>
  <div class="back-to-series">
    <router-link  :to="{name:'entrance-door-yochcar'}" active-class="none">
      <button  type="button" class="btn btn-primary">Ко всем дверям серии ЙОШКАР</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "BackToYochcar"
}
</script>

<style scoped>
.back-to-series{
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem;
  margin: 1rem;
}
</style>