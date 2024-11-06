<script>
import NextBtn from "@/components/buttons/nextBtn.vue";
import PrevBtn from "@/components/buttons/prevBtn.vue";
import {Swiper, SwiperSlide} from "swiper/vue";

export default {
  name: "OurStory",
  components: {Swiper, SwiperSlide, PrevBtn, NextBtn },
  props: {
    data: {
      type: Object,
      default: () => []
    }
  },
  data() {
    return {
      currentSlide: 0,
      slidesPerView: 3,
      fill:"#fff",
      isMobile: window.innerWidth < 768,
      slides: [
        {
          year: "1995 год",
          description:
              "Общественное объединение «Узбекский национальный культурный центр города Астана»...",
          image: require('@/assets/images/1.png'),
        },
        {
          year: "1996 год",
          description:
              "В этот год центр достиг новых успехов и провел множество мероприятий...",
          image: require('@/assets/images/1.png'),
        },
        {
          year: "1997 год",
          description: "С начала 1997 года началась активная работа с молодёжью...",
          image: require('@/assets/images/1.png'),
        },
        {
          year: "1997 год",
          description: "С начала 1997 года началась активная работа с молодёжью...",
          image: require('@/assets/images/1.png'),
        },
      ],
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.updateSlidesPerView();
      window.addEventListener("resize", this.handleResize);
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    goNext() {
      if (this.swiperInstance) {
        this.swiperInstance.slideNext();
      }
    },
    goPrev() {
      if (this.swiperInstance) {
        this.swiperInstance.slidePrev();
      }
    },
    setSwiperInstance(swiper) {
      this.swiperInstance = swiper;
    },
    handleResize() {
      this.isMobile = window.innerWidth < 768;
      this.updateSlidesPerView();
    },
    updateSlidesPerView() {
      if (this.isMobile) {
        this.slidesPerView = 1; // Show one slide per view on mobile
      } else if (window.innerWidth < 1200) {
        this.slidesPerView = 2;
      } else {
        this.slidesPerView = 3;
      }
      this.updateSliderPosition();
    },
    scrollLeft() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      } else {
        this.currentSlide = Math.ceil(this.slides.length / this.slidesPerView) - 1;
      }
      this.updateSliderPosition();
    },
    scrollRight() {
      if (this.currentSlide < Math.ceil(this.slides.length / this.slidesPerView) - 1) {
        this.currentSlide++;
      } else {
        this.currentSlide = 0;
      }
      this.updateSliderPosition();
    },
    goToSlide(index) {
      this.currentSlide = index;
      this.updateSliderPosition();
    },
    updateSliderPosition() {
      if (this.$refs.slider) {
        const sliderWidth = this.$refs.slider.offsetWidth / this.slidesPerView;
        this.$refs.slider.style.transform = `translateX(-${this.currentSlide * sliderWidth * this.slidesPerView}px)`;
      } else {
        console.warn("Slider ref is not available");
      }
    },
  },
};
</script>

<template>
  <div class="slider-container">
    <div class="w-full flex items-center justify-between hide-t" style="margin-bottom: 56px;">
      <h2 class="font-gilroy slider-title">{{ data.category_title }}</h2>
      <div class="flex gap-4 items-center">
        <prev-btn @click="scrollLeft"/>
        <next-btn @click="scrollRight"/>
      </div>
    </div>

    <!-- Desktop Slider -->
    <div v-if="!isMobile" class="relative overflow-hidden w-full">
      <div class="slider-content flex gap-6 overflow" ref="slider">
        <div class="slide group relative flex" v-for="(slide, index) in slides" :key="index" style="flex: 1;">
          <div>
            <img :src="slide.image" alt="Slide Image" class="w-full h-auto" />
          </div>
          <div style="background-color: #0072AB;" class="overflow-hidden absolute inset-0 opacity-0 group-hover:opacity-80 flex flex-col justify-end items-center text-center transition-opacity duration-500 p-6">
          </div>
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 flex flex-col justify-end items-center text-center transition-opacity duration-700 p-6">
            <p class="font-gilroy text-start" style="font-size: 24px; font-weight: 500; color: white">{{ slide.year }}</p>
            <span class="text-white mt-2 text-start" style="font-size: 14px">{{ slide.description }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Slider -->
    <div v-if="isMobile" class="relative overflow-hidden w-full">
      <div class="slider-content flex gap-6" ref="slider">
        <swiper
            :slides-per-view="1"
            class="mySwiper"
            @swiper="setSwiperInstance"
        >
          <swiper-slide class="slide group relative flex" v-for="(slide, index) in slides" :key="index" style="flex: 1;">
            <div>
              <div
                  style="background-color: rgba(0, 114, 171, 0.7);"
                  class="absolute inset-0 z-20"
              ></div>
              <div class="relative z-10">
                <img :src="slide.image" alt="Slide Image" class="w-full h-auto" />
              </div>
              <div
                  class="absolute inset-0 opacity-100 py-5 px-2 z-30"
              >
                <p class="font-gilroy text-start mb-2" style="font-size: 24px; font-weight: 500; color: white">
                  {{ slide.year }}
                </p>
                <span class="text-white mt-2 text-start opacity-80 overflow-hidden" style="font-size: 14px">{{ slide.description }}</span>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <div class="absolute top-0 right-0 flex gap-4 justify-center p-4">
        <prev-btn @click="goPrev" :fill="fill"/>
        <next-btn @click="goNext" :fill="fill"/>
      </div>
    </div>

    <div class="flex justify-center mt-8 dots">
      <span
          v-for="(slide, index) in Math.ceil(slides.length / slidesPerView)"
          :key="index"
          :class="['dot', { active: currentSlide === index }]"
          @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<style scoped>
.slider-container {
  padding: 0 0 80px 0;
  position: relative;
  max-width: 100%;
}

.slider-title {
  font-weight: 500;
  font-size: 40px;
}

.slider-content {
  transition: transform 0.5s ease-in-out;
}

.slide {
  min-width: 33.33%;
  justify-content: space-between;
  align-items: center;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.3);
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.dot.active {
  background-color: #0072ab;
}

@media (max-width : 992px) {
  .slider-container {
    padding: 0 0 48px 0;
  }
  .slider-title {
    font-size:28px;
  }
  .hide-t {
    margin-bottom: 48px;
  }
}

@media (max-width : 768px) {
  .slider-container {
    padding: 0;
  }
  .hide-t{
    display: none;
  }
  .dots{
    display: none;
  }
  .slider-content {
    display: flex;
  }
  .slide {
    min-width: 100%; /* Ensure one slide per view on mobile */
  }
}
</style>
