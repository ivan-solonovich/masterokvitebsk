<template>
  <div class="container-fluid gallery-wrapper">
    <div class="container">
      <h3 style="text-align: center; color: crimson">Галерея наших работ</h3>
    </div>
    <swiper
        :effect="'coverflow'"
        :grabCursor="true"
        :centeredSlides="true"
        :slidesPerView="'auto'"
        :loop="true"
        :lazy="true"
        :autoHeight="false"
        :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
        :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 5,
      slideShadows: true,
    }"
        :pagination="true"
        :modules="modules"
        class="mySwiper"
    >
      <swiper-slide
      ><img
          src="../../assets/ourWorks/balcon/photo_2023-03-20_08-13-18.jpg" loading="lazy" alt="Наши работы остекление балконов и лоджий"/></swiper-slide
      ><swiper-slide
    ><img
        src="../../assets/ourWorks/balcon/photo_2023-03-20_08-13-18(2).jpg" loading="lazy" alt="Наши работы остекление балконов и лоджий"/></swiper-slide
    >
      <swiper-slide>
        <img
            src="../../assets/ourWorks/balcon/photo_2023-03-20_08-13-18(3).jpg" loading="lazy" alt="Наши работы остекление балконов и лоджий"/>
      </swiper-slide>
      <swiper-slide>
        <img
            src="../../assets/ourWorks/balcon/photo_2023-03-20_08-20-43.jpg" loading="lazy" alt="Наши работы остекление балконов и лоджий"/>
      </swiper-slide>
      <swiper-slide>
        <img
            src="../../assets/ourWorks/balcon/photo_2023-03-20_08-20-44.jpg" loading="lazy" alt="Наши работы остекление балконов и лоджий"/>
      </swiper-slide>
      <swiper-slide
      ><img
          src="../../assets/ourWorks/balcon/photo_2023-03-20_08-34-11(2).jpg" loading="lazy" alt="Наши работы остекление балконов и лоджий"/>
      </swiper-slide
      ><swiper-slide
    ><img
        src="../../assets/ourWorks/balcon/photo_2023-03-20_08-34-11(3).jpg" loading="lazy" alt="Наши работы остекление балконов и лоджий"/>
    </swiper-slide
    ><swiper-slide
    ><img
        src="../../assets/ourWorks/balcon/photo_2023-03-20_08-34-11.jpg" loading="lazy" alt="Наши работы остекление балконов и лоджий"/>
    </swiper-slide
    ><swiper-slide
    ><img
        src="../../assets/ourWorks/balcon/photo_2023-03-20_08-34-12(2).jpg" loading="lazy" alt="Наши работы остекление балконов и лоджий"/>
    </swiper-slide
    ><swiper-slide
    ><img
        src="../../assets/ourWorks/balcon/photo_2023-03-20_08-34-12(3).jpg" loading="lazy" alt="Наши работы остекление балконов и лоджий"/>
    </swiper-slide
    ><swiper-slide
    ><img
        src="../../assets/ourWorks/balcon/photo_2023-03-20_08-34-12.jpg" loading="lazy" alt="Наши работы остекление балконов и лоджий"/>
    </swiper-slide
    ><swiper-slide
    ><img
        src="../../assets/ourWorks/balcon/photo_2023-03-20_08-36-22(2).jpg" loading="lazy" alt="Наши работы остекление балконов и лоджий"/>
    </swiper-slide
    ><swiper-slide
    ><img
        src="../../assets/ourWorks/balcon/photo_2023-03-20_08-36-22.jpg" loading="lazy" alt="Наши работы остекление балконов и лоджий"/>
    </swiper-slide
    ><swiper-slide
    ><img
        src="../../assets/ourWorks/balcon/photo_2023-05-09_20-04-03.jpg" loading="lazy" alt="Наши работы остекление балконов и лоджий"/>
    </swiper-slide
    >
    </swiper>

    <div class="container">
      <h4 style="text-align: center;  margin-top: 1rem;">Больше наших работ вы найдете в соцсетях</h4>
    </div>

  </div>
</template>

<script>
import {Autoplay, EffectCoverflow, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/vue";
export default {
  name: "BalconGallery",
  components: {
    Swiper,
    SwiperSlide,

  },
  setup() {
    return {
      modules: [Autoplay, EffectCoverflow, Pagination],
    }
  }
}
</script>

<style scoped>
.gallery-wrapper{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;
}
.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}
</style>