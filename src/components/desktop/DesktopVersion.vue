<template>
<div class="desktop">
  <RedLinePromo/>
  <NavBar/>
 <router-view></router-view>
</div>
</template>

<script>

import RedLinePromo from "@/components/others/RedLinePromo";
import NavBar from "@/components/navbar/NavBar";


export default {
  name: "DesktopVersion",
  components:{


    NavBar,
    RedLinePromo,


  }
}
</script>

<style scoped>

</style>