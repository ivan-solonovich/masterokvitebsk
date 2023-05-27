<template>
  <div class="back-to-series">
    <router-link  :to="{name:'balcon-home'}" active-class="none">
      <button  type="button" class="btn btn-primary">Ко всем видам остекления балконов </button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "BackToBalcon"
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