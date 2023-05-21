<template>
  <div class="back-to-series">
    <router-link  :to="{name:'entrance-door-staller'}" active-class="none">
      <button  type="button" class="btn btn-primary">Ко всем дверям серии Сталлер </button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "BackToStaller"
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