<template>
 <div>
   <MainWrapper/>
 </div>
</template>

<script>
import MainWrapper from "@/components/MainWrapper";

export default {
  name: 'App',
  components: {
    MainWrapper
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

#app {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
}
</style>
