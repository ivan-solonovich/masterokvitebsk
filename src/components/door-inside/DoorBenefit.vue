<template>
<div class="door-benefit">
  <div class="container door-benefit-block">
    <div class="card mb-3 " style="width: 100%; border: none; margin-top: 2rem">
      <div class="row g-0">
        <div class="col-md-4">
          <div class="img-container-benefit">
          <img src="../../assets/logos/bank-money-crimson-small.jpg" class="img-fluid rounded-start" style="background-color: aliceblue; border-radius: 50%" alt="...">
        </div>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title" style="color: crimson">Цены производителя. Лучшие цены в стране!</h5>
            <p class="card-text">Никаких посредников! Двери будут доставлены вам прямо с завода.</p>
            <p class="card-text">Никаких никаких скрытых платежей! Еще на этапеконсультации мы предоставим вам полную и точную информачию о формировании цены.</p>

          </div>
        </div>
      </div>
    </div>
    <div class="card mb-3 " style="width: 100%; border: none; margin-top: 2rem">
      <div class="row g-0">
        <div class="col-md-4 flex justify-center">
          <div class="img-container-benefit">
           <img src="../../assets/logos/gosts.jpg" class="img-fluid rounded-start" style="background-color: aliceblue; text-align: center; border-radius: 50%" alt="...">
          </div>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title" style="color: crimson">Гарантированное качество изделий и монтажа. </h5>
            <p class="card-text">Качество изделий гарантировано 20 годами производства, по европейским стандартам.</p>
            <p class="card-text">Качество монтажа опытом наших сотрудников.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: "DoorBenefit"
}
</script>

<style scoped>
.door-benefit-block {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
}
.img-container-benefit{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>