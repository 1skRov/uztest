<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation } from 'swiper';
import PrevBtn from "@/components/buttons/prevBtn.vue";
import NextBtn from "@/components/buttons/nextBtn.vue";

SwiperCore.use([Navigation]);

export default {
  name: "YouthOrganizations",
  components: {
    NextBtn,
    PrevBtn,
    Swiper,
    SwiperSlide,
  },
  props:{
    data:{
      type: Object,
    }
  },
  data() {
    return {
      images: [
        require('@/assets/images/img.png'),
        require('@/assets/images/img.png'),
        require('@/assets/images/img.png'),
        require('@/assets/images/img.png'),
        require('@/assets/images/img.png'),
      ],
      swiperInstance: null,
    }
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
  },
}
</script>

<template>
  <div class="main">
    <h2 class="font-gilroy">
      {{data.category_title}}
    </h2>
    <div class="gallery">
      <div class="row-1">
        <div
            class="gallery-item"
            v-for="(image, index) in images.slice(0, 2)"
            :key="index"
        >
          <div class="overlay-container">
            <img :src="image" alt="Изображение">
            <div class="overlay">
              <span class="font-gilroy title">{{ data.title }}</span>
              <span class="desc">
                {{ data.mini_desc }}
              </span>
              <div>
                <router-link to="/organization-details">
                  <button class="uppercase font-medium text-base py-4 px-6 bg-white" style="border-radius: 6px; border: 1px solid #CFD3DA">
                    {{ data.buttons_title }}</button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row-2">
        <div
            class="gallery-item"
            v-for="(image, index) in images.slice(2, 5)"
            :key="index"
        >
          <div class="overlay-container">
            <img :src="image" alt="Изображение">
            <div class="overlay">
              <span class="font-gilroy title">{{ data.title }}</span>
              <span class="desc">{{ data.mini_desc }}</span>
              <div>
                <router-link to="/organization-details">
                  <button class="uppercase font-medium text-base py-4 px-6 bg-white mt-1.5" style="border-radius: 6px; border: 1px solid #CFD3DA">
                    {{ data.buttons_title }}
                  </button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="gallery-mob">
      <div>
        <swiper
            :slides-per-view="1"
            class="mySwiper"
            @swiper="setSwiperInstance"
        >
          <swiper-slide v-for="(image, index) in images" :key="index">
            <div class="gallery-cont">
              <img :src="image" alt="Изображение" class="carousel-image" />
              <span class="font-gilroy title">{{ data.title }}</span>
              <span class="desc">{{ data.mini_desc }}</span>
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <div class="items-center flex justify-center mt-4 gap-10">
        <prev-btn @click="goPrev" class="z-10"/>
        <next-btn @click="goNext"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  padding: 0 0 80px;
  h2 {
    font-weight: 500;
    font-size: 40px;
    margin-bottom: 12px;
  }
  .gallery {
    @apply flex flex-col items-center;
    .row-1 {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin-bottom: 15px;

      .gallery-item {
        flex: 1;
        margin: 0 5px;

        img {
          width: 100%;
          height: auto;
        }
        .overlay-container {
          position: relative;
          overflow: hidden;
          img {
            display: block;
            width: 100%;
            height: auto;
          }
          .overlay {
            @apply flex flex-col absolute top-0 left-0 p-4;
            justify-content: flex-end;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 114, 171, 0.7);
            opacity: 0;
            transition: opacity 0.5s ease;
            .title {
              @apply text-start mb-1;
              font-size: 24px; font-weight: 500; color: white;
            }
            .desc {
              @apply text-white mt-2 text-start mb-6 font-normal;
              font-size: 14px;
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
        .overlay-container:hover .overlay {
          opacity: 1;
        }
      }
    }
    .row-2 {
      display: flex;
      width: 100%;
      justify-content: space-between;
      .gallery-item {
        flex: 1;
        margin: 0 5px;
        img {
          width: 100%;
          height: auto;
        }
        .overlay-container {
          position: relative;
          overflow: hidden;
          img {
            display: block;
            width: 100%;
            height: auto;
          }
          .overlay {
            @apply flex flex-col absolute top-0 left-0 p-4;
            justify-content: flex-end;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 114, 171, 0.7);
            opacity: 0;
            transition: opacity 0.5s ease;
            .title {
              @apply text-start mb-1;
              font-size: 24px; font-weight: 500; color: white;
            }
            .desc {
              @apply text-white text-start font-normal;
              font-size: 12px;
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
        .overlay-container:hover .overlay {
          opacity: 1;
        }
      }
    }
  }
  .gallery-mob {
    display: none;
  }
}
@media (max-width : 992px) {
  .main {
    padding: 0 0 48px;
    h2 {
      font-size: 24px;
      margin-bottom: 12px;
    }
    .gallery {
      @apply flex flex-col items-center;
      .row-1 {
        .gallery-item {
          .overlay-container {
            .overlay {
              background: linear-gradient(to top, rgba(0, 114, 171, 0.8), transparent);
              opacity: 1;
              .title {
                font-size: 24px;
              }
              .desc {
                font-size: 14px;
                -webkit-line-clamp: 3;
              }
            }
          }
          .overlay-container:hover .overlay {
            opacity: 1;
          }
        }
      }
      .row-2 {
        .gallery-item {
          .overlay-container {
            .overlay {
              background: linear-gradient(to top, rgba(0, 114, 171, 0.8), transparent);
              opacity: 1;
              .title {
                font-size: 20px;
              }
              .desc {
                font-size: 10px;
                -webkit-line-clamp: 2;
              }
            }
          }
        }
      }
    }
  }
}
@media (max-width : 760px) {
  .main {
    padding: 0 0 48px;
    h2 {
      font-size: 24px;
      margin-bottom: 12px;
    }
    .gallery {
      display: none;
    }
    .gallery-mob {
      @apply flex flex-col;
      .carousel-image {
        width: 100%;
        height: auto;
        border-radius: 10px;
        margin-bottom: 10px;
      }
      .gallery-cont {
        display: flex;
        flex-direction: column;
        .title {
          font-size: 24px;
          font-weight: 500;
          margin: 10px 0;
        }
        .desc {
          font-size: 14px;
          line-height: 20px;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>