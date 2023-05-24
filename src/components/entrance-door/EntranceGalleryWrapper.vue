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
          src="../../assets/ourWorks/entranseDoor/photo_2023-03-20_08-18-36.jpg" loading="lazy" alt="Нашиработы входные двери"/></swiper-slide
      ><swiper-slide
    ><img
        src="../../assets/ourWorks/entranseDoor/photo_2023-03-20_08-18-36(2).jpg" loading="lazy" alt="Нашиработы входные двери"/></swiper-slide
    >
      <swiper-slide>
        <img
            src="../../assets/ourWorks/entranseDoor/photo_2023-03-20_08-28-21.jpg" loading="lazy" alt="Нашиработы входные двери"/>
      </swiper-slide>
      <swiper-slide>
        <img
            src="../../assets/ourWorks/entranseDoor/photo_2023-03-20_08-28-21(2).jpg" loading="lazy" alt="Нашиработы входные двери"/>
      </swiper-slide>
      <swiper-slide>
        <img
            src="../../assets/ourWorks/entranseDoor/photo_2023-03-20_08-38-54.jpg" loading="lazy" alt="Нашиработы входные двери"/>
      </swiper-slide>
      <swiper-slide
      ><img
          src="../../assets/ourWorks/entranseDoor/photo_2023-03-20_08-39-51.jpg" loading="lazy" alt="Нашиработы входные двери"/>
      </swiper-slide
      ><swiper-slide
    ><img
        src="../../assets/ourWorks/entranseDoor/photo_2023-05-09_20-01-49.jpg" loading="lazy" alt="Нашиработы входные двери"/>
    </swiper-slide
    ><swiper-slide
    ><img
        src="../../assets/ourWorks/entranseDoor/photo_2023-05-09_20-02-47.jpg" loading="lazy" alt="Нашиработы входные двери"/>
    </swiper-slide
    ><swiper-slide
    ><img
        src="../../assets/ourWorks/entranseDoor/photo_2023-05-24_20-14-31.jpg" loading="lazy" alt="Нашиработы входные двери"/>
    </swiper-slide
    ><swiper-slide
    ><img
        src="../../assets/ourWorks/entranseDoor/photo_2023-05-24_20-14-42.jpg" loading="lazy" alt="Нашиработы входные двери"/>
    </swiper-slide
    ><swiper-slide
    ><img
        src="../../assets/ourWorks/entranseDoor/photo_2023-05-24_20-14-46.jpg" loading="lazy" alt="Нашиработы входные двери"/>
    </swiper-slide
    ><swiper-slide
    ><img
        src="../../assets/ourWorks/entranseDoor/photo_2023-05-24_20-14-51.jpg" loading="lazy" alt="Нашиработы входные двери"/>
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
  name: "EntranceGalleryWrapper",
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