<template>
  <div class="back-to-series">
    <router-link  :to="{name:'entrance-door'}" active-class="none">
      <button  type="button" class="btn btn-primary">Ко всем сериям входных дверей </button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "EntranceDoorBack"
}
</script>

<style scoped>
.back-to-series{
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>