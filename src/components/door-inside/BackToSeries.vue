<template>
<div class="back-to-series">
  <router-link  :to="{name:'doorsInside'}" active-class="none">
    <button  type="button" class="btn btn-primary">Ко всем сериям межкомнотных дверей </button>
  </router-link>
</div>

</template>

<script>
export default {
  name: "BackToSeries"
}
</script>

<style scoped>
.back-to-series{
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>