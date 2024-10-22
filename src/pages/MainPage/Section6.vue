<template>
  <div class="w-full flex">
    <div class="hide">
      <SideBar :page="page" :icon="false" />
    </div>
    <div class="cont">
      <h2 class="font-gilroy">Наши партнеры</h2>
      <div class="slider">
        <div class="slide-track" :style="slideTrackStyle">
          <div
              class="slide"
              v-for="(item, index) in duplicatedItems"
              :key="index"
          >
            <img :src="item.src" :alt="item.alt" />
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import SideBar from "@/pages/MainPage/SideBar.vue";
import moreDetail from "@/components/buttons/moreDetail.vue";
import NextBtn from "@/components/buttons/nextBtn.vue";
import PrevBtn from "@/components/buttons/prevBtn.vue";
import AutoCarousel from "@/pages/MainPage/AutoCarousel.vue";

export default {
  name: "Section6",
  components: {
    AutoCarousel,
    PrevBtn,
    NextBtn,
    SideBar,
    moreDetail,
  },
  data() {
    return {
      page: "06",
      title: "узнать больше",
      items: [
        { src: require("@/assets/icons/logo1.svg"), alt: "Logo 1" },
        { src: require("@/assets/icons/logo2.svg"), alt: "Logo 2" },
        { src: require("@/assets/icons/logo3.svg"), alt: "Logo 3" },
        { src: require("@/assets/icons/logo4.svg"), alt: "Logo 4" },
        { src: require("@/assets/icons/logo5.svg"), alt: "Logo 5" },
        { src: require("@/assets/icons/logo6.svg"), alt: "Logo 6" },
        { src: require("@/assets/icons/logo7.svg"), alt: "Logo 7" },
        { src: require("@/assets/icons/logo8.svg"), alt: "Logo 8" },
      ],
      slideWidth: 250,
      animationDuration: 40,
    };
  },
  computed: {
    duplicatedItems() {
      return [...this.items, ...this.items];
    },
    slideTrackStyle() {
      const totalSlides = this.duplicatedItems.length;
      const totalWidth = this.slideWidth * totalSlides;

      return {
        "--total-width": `${totalWidth}px`,
        "--animation-duration": `${this.animationDuration}s`,
        "--translate-distance": `-${this.slideWidth * this.items.length}px`,
      };
    },
  },
};
</script>
<style scoped lang="scss">
.cont {
  width: 75%;
  padding: 64px 0;
  @apply mx-auto;
  h2 {
    font-size: 40px; line-height: 52px; font-weight: 500;padding-bottom: 56px;
  }
}
.slider {
  background: white;
  height: 100px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.slider::before,
.slider::after {
  background: linear-gradient(
          to right,
          rgba(255, 255, 255, 1) 0%,
          rgba(255, 255, 255, 0) 100%
  );
  content: "";
  height: 100px;
  position: absolute;
  width: 200px;
  z-index: 2;
}

.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}

.slider::before {
  left: 0;
  top: 0;
}

.slide-track {
  display: flex;
  width: var(--total-width);
  animation: scroll var(--animation-duration) linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(var(--translate-distance));
  }
}

.slide {
  height: 100px;
  width: 250px;
  flex-shrink: 0;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
@media (max-width : 992px) {
  .hide {
    display: none;
  }
  .cont {
    width: 90%;
    padding: 48px 0;
    @apply mx-auto;
    h2 {
      font-size: 28px;
    }
  }
  .slide {
    height: 80px;
    width: 210px;
    flex-shrink: 0;
  }
}
@media (max-width : 760px) {
  .cont {
    width: 90%;
    padding: 32px 0;
    @apply mx-auto;
    h2 {
      font-size: 24px;
      padding-bottom: 24px;
    }
  }
  .slide {
    height: 50px;
    width: 180px;
    flex-shrink: 0;
  }
}
</style>

