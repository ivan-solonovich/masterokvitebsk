<template>
  <div class="and-other">
    <h4 style="text-align: center; padding-top: 1rem;">Профессионалы на всех этапах</h4>
    <div class="container and-other-container">
      <div class="and-other-component">
        <img class="and-other-image" src="../../assets/logos/telephone-call.png" alt="">
        <h6 style="text-align: center">Профессионально проконсультируем</h6>
      </div>
      <div class="and-other-component">
        <img class="and-other-image" src="../../assets/logos/zamer.png" alt="">
        <h5>Точно замерим</h5>
      </div>
      <div class="and-other-component">
        <img class="and-other-image" src="../../assets/logos/transport.png" alt="">
        <h5>Бережно доставим</h5>
      </div>
      <div class="and-other-component">
        <img class="and-other-image" src="../../assets/logos/up.png" alt="">
        <h5>Аккуратно занесем</h5>
      </div>
      <div class="and-other-component">
        <img class="and-other-image" src="../../assets/logos/gosts.png" alt="">
        <h6 style="text-align: center">Смонтируем по ГОСТам и СНИПам</h6>
      </div>
      <div class="and-other-component">
        <img class="and-other-image" src="../../assets/logos/cleanning.png" alt="">
        <h5>Уберем мусор</h5>
      </div>
      <div class="and-other-component">
        <img class="and-other-image" src="../../assets/logos/varanty.jpg" alt="">
        <h5 style="text-align: center">Проведем обслуживание</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AndOther"
}
</script>

<style scoped>
.and-other{
  padding-top: 2rem;
  padding-bottom: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.and-other-container{
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.and-other-component{
  width: 220px;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.and-other-image{
  width: 100px;
  height: 100px;
  border: solid crimson 2px;
  margin: 1rem;
  padding: 1rem;
  border-radius: 50%;
}
</style>