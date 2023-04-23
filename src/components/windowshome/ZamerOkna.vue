<template>

    <div class="zamer-okna">
      <div class="container zamer-okna">
        <div class="zamer-content">

            <img class="zamer-okna-image" src="../../assets/windows/zamer-okna-main.jpg" alt="">


            <h4>Замер окна у нас делает мастер, который, будет проводить, либо руководить установкой окон. Это гарантирует
              точногсть замера!</h4>


        </div>
      </div>
    </div>

</template>

<script>
export default {
  name: "ZamerOkna"
}
</script>

<style scoped>
.zamer-okna{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
}
.zamer-content{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

}
.zamer-okna-image{
  width: 200px;
  height: auto;
}

</style>