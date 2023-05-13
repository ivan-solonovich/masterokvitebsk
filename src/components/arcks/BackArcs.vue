<template>
  <div class="back-to-series">
    <router-link  :to="{name:'arcks'}" active-class="none">
      <button  type="button" class="btn btn-primary">Ко всем моделям арок </button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "BackArcs"
}
</script>

<style scoped>
.back-to-series{
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>