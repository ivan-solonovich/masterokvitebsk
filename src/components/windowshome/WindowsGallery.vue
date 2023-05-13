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
          src="../../assets/ourWorks/windows/photo_2023-05-09_20-03-18.jpg" loading="lazy"/></swiper-slide
      ><swiper-slide
    ><img
        src="../../assets/ourWorks/windows/photo_2023-03-20_08-12-20.jpg" loading="lazy"/></swiper-slide
    >
      <swiper-slide>
        <img
            src="../../assets/ourWorks/windows/photo_2023-03-20_08-16-54.jpg" loading="lazy"/>
      </swiper-slide>
      <swiper-slide>
        <img
            src="../../assets/ourWorks/windows/photo_2023-03-20_08-17-59.jpg" loading="lazy"/>
      </swiper-slide>
      <swiper-slide>
        <img
            src="../../assets/ourWorks/windows/photo_2023-03-20_08-21-25.jpg" loading="lazy"/>
      </swiper-slide>
      <swiper-slide
      ><img
          src="../../assets/ourWorks/windows/photo_2023-03-20_08-22-15(2).jpg" loading="lazy"/></swiper-slide
      ><swiper-slide
    ><img
        src="../../assets/ourWorks/windows/photo_2023-03-20_08-22-15(3).jpg" loading="lazy"/></swiper-slide
    ><swiper-slide
    ><img
        src="../../assets/ourWorks/windows/photo_2023-03-20_08-22-15.jpg" loading="lazy"/></swiper-slide
    ><swiper-slide
    ><img
        src="../../assets/ourWorks/windows/photo_2023-03-20_08-22-33.jpg" loading="lazy"/></swiper-slide
    ><swiper-slide
    ><img
        src="../../assets/ourWorks/windows/photo_2023-03-20_08-22-57.jpg" loading="lazy"/></swiper-slide
    ><swiper-slide
    ><img
        src="../../assets/ourWorks/windows/photo_2023-03-20_08-25-52.jpg" loading="lazy"/></swiper-slide
    >
      <swiper-slide
      ><img src="../../assets/ourWorks/windows/photo_2023-03-20_08-27-28.jpg" loading="lazy"/></swiper-slide>
      <swiper-slide>
        <img
            src="../../assets/ourWorks/windows/photo_2023-03-20_08-29-10.jpg" loading="lazy"/>
      </swiper-slide>
      <swiper-slide>
        <img
            src="../../assets/ourWorks/windows/photo_2023-03-20_08-30-36.jpg" loading="lazy"/>
      </swiper-slide>
      <swiper-slide>
        <img
            src="../../assets/ourWorks/windows/photo_2023-03-20_08-31-34(2).jpg" loading="lazy"/>
      </swiper-slide>
      <swiper-slide>
        <img
            src="../../assets/ourWorks/windows/photo_2023-03-20_08-31-34.jpg" loading="lazy"/>
      </swiper-slide>
      <swiper-slide>
        <img
            src="../../assets/ourWorks/windows/photo_2023-03-20_08-32-09.jpg" loading="lazy"/>
      </swiper-slide>
      <swiper-slide>
        <img
            src="../../assets/ourWorks/windows/photo_2023-03-20_08-36-39.jpg" loading="lazy"/>
      </swiper-slide>
      <swiper-slide>
        <img
            src="../../assets/ourWorks/windows/photo_2023-03-20_08-37-08.jpg" loading="lazy"/>
      </swiper-slide>
      <swiper-slide>
        <img
            src="../../assets/ourWorks/windows/photo_2023-05-09_20-02-56.jpg" loading="lazy"/>
      </swiper-slide>
      <swiper-slide>
        <img
            src="../../assets/ourWorks/windows/photo_2023-05-09_20-03-10.jpg" loading="lazy"/>
      </swiper-slide>
      <swiper-slide>
        <img
            src="../../assets/ourWorks/windows/photo_2023-05-09_20-09-16.jpg" loading="lazy"/>
      </swiper-slide>
      <swiper-slide>
        <img
            src="../../assets/ourWorks/windows/photo_2023-05-09_20-09-21.jpg" loading="lazy"/>
      </swiper-slide>
      <swiper-slide>
        <img
            src="../../assets/ourWorks/windows/photo_2023-05-09_20-09-24.jpg" loading="lazy"/>
      </swiper-slide>
      <swiper-slide>
        <img
            src="../../assets/ourWorks/windows/photo_2023-05-09_20-09-28.jpg" loading="lazy"/>
      </swiper-slide>
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
  name: "WindowsGallery",
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