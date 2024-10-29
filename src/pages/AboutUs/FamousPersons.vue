<script>
import moreDetail from "@/components/buttons/moreDetail.vue";
export default {
  name: "FamousPersons",
  components: {moreDetail},
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
  }
}
</script>

<template>
  <div class="w-full main">
    <div style="padding-bottom: 56px" class="flex justify-between">
      <h2 class="font-gilroy title">Известные личности</h2>
      <div class="flex items-center">
        <router-link to="/famous-persons">
          <moreDetail :title="title"/>
        </router-link>
      </div>
    </div>
    <div class="flex justify-between relative gap-3">
      <div v-for="i in items" :key="i.id" class="carousel">
        <div class="image-wrapper">
          <img src="@/assets/images/img_1.png" alt="" class="w-full h-full rounded">
          <div class="gradient-overlay absolute bottom-0 left-0"></div>
          <div class="main-text">
            <p class="font-gilroy">{{ i.name }}</p>
            <span>{{ i.position }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
.main {
  padding: 80px 0;
}
.izo {
  border-radius: 6px;

  .izo-item {
    background-color: #0072AB;
  }
}
.title {
  font-size: 40px;
  line-height: 52px;
  font-weight: 500;
}
.hover-text {
  p {
    font-size: 24px; font-weight: 500; color: white;
  }
  span {
    font-size: 14px;
  }
}
@media (max-width : 992px) {
  .main {
    padding: 48px 0;
  }
  .title {
    font-size: 28px;
  }

  .hover-text {
    p {
      font-size: 16px;
      line-height: 26px;
    }
    span {
      font-size: 10px;
      line-height: 19px;
    }
  }
}
</style>