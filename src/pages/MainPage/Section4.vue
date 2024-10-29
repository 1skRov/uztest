<script>
import SideBar from "@/pages/MainPage/SideBar.vue";
import moreDetail from "@/components/buttons/moreDetail.vue";
import axios from "axios";
import {onBeforeMount} from "vue";
export default {
  name: "Section4",
  components: {moreDetail, SideBar},
  props: {
    hasSidebar:{
      default: true,
      type: Boolean,
    },
    data: {
      type: Object
    }
  },
  data() {
    return {
      page: "04",
      title:"узнать больше",
      items: [
        {
          name: "Пулатов Шерзод Аббозович",
          position: "Председатель, член АНК, член НЭС АНК"
        },
        {
          name: "Пулатов Шерзод Аббозович",
          position: "Председатель, член АНК, член НЭС АНК"
        },
        {
          name: "Пулатов Шерзод Аббозович",
          position: "Председатель, член АНК, член НЭС АНК"
        },
        {
          name: "Пулатов Шерзод Аббозович",
          position: "Председатель, член АНК, член НЭС АНК"
        }
      ]
    };
  },
}
</script>

<template>
<div class="w-full flex">
  <div v-if="hasSidebar" class="hide">
    <SideBar :page="page" :icon="false"/>
  </div>
  <div class="main">
    <div class="main-title">
      <h2 class="font-gilroy">{{ data.category_title }}</h2>
      <div class="mobile">
        <router-link to="/famous-persons">
          <moreDetail :title="data.buttons_title"/>
        </router-link>
      </div>
    </div>
    <div class="main-content gap-3">
      <div v-for="i in data" :key="i.id" class="carousel">
        <div class="image-wrapper">
          <img src="@/assets/images/img_1.png" alt="" class="w-full h-full rounded">
          <div class="gradient-overlay absolute bottom-0 left-0"></div>
          <div class="main-text">
            <p class="font-gilroy">{{ i.title }}</p>
            <span>{{ i.job }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile-has">
      <router-link to="/famous-persons">
        <moreDetail :title="title"/>
      </router-link>
    </div>
  </div>
</div>
</template>

<style scoped>
.main {
  padding: 64px 0;
  @apply w-full;
  .main-title {
    @apply flex justify-between mx-auto items-center;
    width: 75%;
    padding-bottom: 56px;
    h2 {
      font-size: 40px; line-height: 52px; font-weight: 500;
    }
  }
  .main-content {
    @apply flex justify-between relative mx-auto;
    width: 75%;
    .carousel {
      @aaply bg-gray-100 relative overflow-hidden;
      border-radius: 6px;
      max-width: 100%;
      max-height: 100%;
    }
    .image-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
    }
    .gradient-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0;
      background: linear-gradient(to top, rgba(0, 114, 171, 0.8), transparent);
      z-index: 1;
      transition: height 0.3s ease-in-out;
      pointer-events: none;
    }
    .carousel:hover .gradient-overlay {
      height: 100%;
    }
    .main-text {
      @apply absolute bottom-0 left-0 p-10;
      opacity: 0;
      transform: translateY(100%); /* Текст изначально снизу */
      transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
      p {
        @apply text-start;
        font-size: 24px; font-weight: 500; color: white;
      }
      span {
        @apply text-white mt-2 text-start;
        font-size: 14px;
      }
    }
    .carousel:hover .main-text {
      opacity: 1; /* Текст становится видимым */
      transform: translateY(0); /* Текст поднимается на исходную позицию */
      z-index: 20;
    }
  }
}
.mobile-has {
  display:none;
}
@media (max-width : 992px) {
  .hide {
    display: none;
  }

  .main {
    padding: 48px 0;
    .main-title {
      width: 90%;
      h2 {
        font-size: 28px;
      }
    }
    .main-content {
      width: 90%;
      @apply gap-5;
      .carousel {
        max-width: 100%;
        max-height: 100%;
      }
      .gradient-overlay {
        width: 100%;
        height: 100%;
        background: linear-gradient(to top, rgba(0, 114, 171, 1), transparent);
        z-index: 1;
        pointer-events: none;
      }
      .main-text {
        @apply p-3;
        opacity: 1;
        z-index: 20;
        transform: translateY(0);
        p {
          font-size: 18px;
        }
        span {
          font-size: 12px;
        }
      }
    }
  }
}
@media (max-width : 760px) {
  .mobile-has {
    display: block;
  }
  .mobile {
    display: none;
  }
  .main {
    padding: 32px 0;
  }
  .content {
    width: 90%;
    @apply mx-auto;
  }
  .content-f {
    width: 90%;
    @apply mx-auto;
    padding-bottom: 24px;
    h2 {
      font-size: 24px;
    }
  }
}

</style>