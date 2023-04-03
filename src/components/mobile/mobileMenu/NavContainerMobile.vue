<template>
<div class="nav-container-mobile">
  <svg id="hamburger" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 17h18M3 12h18M3 7h18"/></svg>
</div>
</template>

<script>
export default {
  name: "NavContainerMobile"
}
</script>

<style scoped>
#hamburger{
  padding-left: 1rem;
  padding-right: 1rem;
}
.nav-container-mobile{
  width: 20%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

}
</style>