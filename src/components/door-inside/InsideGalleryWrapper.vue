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
          src="../../assets/ourWorks/doorInside/photo_2023-03-20_08-11-41(2).jpg" loading="lazy"/></swiper-slide
      ><swiper-slide
    ><img
        src="../../assets/ourWorks/doorInside/photo_2023-03-20_08-11-41(3).jpg" loading="lazy"/></swiper-slide
    >
      <swiper-slide>
        <img
            src="../../assets/ourWorks/doorInside/photo_2023-03-20_08-11-41.jpg" loading="lazy"/>
      </swiper-slide>
      <swiper-slide>
        <img
            src="../../assets/ourWorks/doorInside/photo_2023-03-20_08-13-52.jpg" loading="lazy"/>
      </swiper-slide>
      <swiper-slide>
        <img
            src="../../assets/ourWorks/doorInside/photo_2023-03-20_08-14-37.jpg" loading="lazy"/>
      </swiper-slide>
      <swiper-slide
      ><img
          src="../../assets/ourWorks/doorInside/photo_2023-03-20_08-15-00.jpg" loading="lazy"/>
      </swiper-slide
      ><swiper-slide
    ><img
        src="../../assets/ourWorks/doorInside/photo_2023-03-20_08-15-00(2).jpg" loading="lazy"/>
    </swiper-slide
    ><swiper-slide
    ><img
        src="../../assets/ourWorks/doorInside/photo_2023-03-20_08-15-48.jpg" loading="lazy"/>
    </swiper-slide
    ><swiper-slide
    ><img
        src="../../assets/ourWorks/doorInside/photo_2023-03-20_08-16-03.jpg" loading="lazy"/>
    </swiper-slide
    ><swiper-slide
    ><img
        src="../../assets/ourWorks/doorInside/photo_2023-03-20_08-16-21.jpg" loading="lazy"/>
    </swiper-slide
    ><swiper-slide
    ><img
        src="../../assets/ourWorks/doorInside/photo_2023-03-20_08-16-41.jpg" loading="lazy"/>
    </swiper-slide
    ><swiper-slide
    ><img
        src="../../assets/ourWorks/doorInside/photo_2023-03-20_08-17-21.jpg" loading="lazy"/>
    </swiper-slide
    ><swiper-slide
    ><img
        src="../../assets/ourWorks/doorInside/photo_2023-03-20_08-17-40.jpg" loading="lazy"/>
    </swiper-slide
    ><swiper-slide
    ><img
        src="../../assets/ourWorks/doorInside/photo_2023-03-20_08-20-07.jpg" loading="lazy"/>
    </swiper-slide
    ><swiper-slide
    ><img
        src="../../assets/ourWorks/doorInside/photo_2023-03-20_08-24-44.jpg" loading="lazy"/>
    </swiper-slide
    ><swiper-slide
    ><img
        src="../../assets/ourWorks/doorInside/photo_2023-03-20_08-30-23(2).jpg" loading="lazy"/>
    </swiper-slide
    ><swiper-slide
    ><img
        src="../../assets/ourWorks/doorInside/photo_2023-03-20_08-30-23.jpg" loading="lazy"/>
    </swiper-slide
    ><swiper-slide
    ><img
        src="../../assets/ourWorks/doorInside/photo_2023-03-20_08-35-02.jpg" loading="lazy"/>
    </swiper-slide
    ><swiper-slide
    ><img
        src="../../assets/ourWorks/doorInside/photo_2023-03-20_08-37-24.jpg" loading="lazy"/>
    </swiper-slide
    ><swiper-slide
    ><img
        src="../../assets/ourWorks/doorInside/photo_2023-03-20_08-37-57.jpg" loading="lazy"/>
    </swiper-slide
    ><swiper-slide
    ><img
        src="../../assets/ourWorks/doorInside/photo_2023-03-20_08-40-04.jpg" loading="lazy"/>
    </swiper-slide
    ><swiper-slide
    ><img
        src="../../assets/ourWorks/doorInside/photo_2023-05-09_20-00-18.jpg" loading="lazy"/>
    </swiper-slide
    ><swiper-slide
    ><img
        src="../../assets/ourWorks/doorInside/photo_2023-05-09_20-03-22.jpg" loading="lazy"/>
    </swiper-slide
    ><swiper-slide
    ><img
        src="../../assets/ourWorks/doorInside/photo_2023-05-09_20-03-32.jpg" loading="lazy"/>
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
  name: "InsideGalleryWrapper",
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