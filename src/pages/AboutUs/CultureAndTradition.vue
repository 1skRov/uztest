<script>
import more from "@/components/buttons/moreDetail.vue"

export default {
  name: "CultureAndTradition",
  components: {more},
  props:{
    data:{
      type: Object,
    }
  },
  data(){
    return {
      currentSlide: 0,
      images: [
        require('@/assets/images/img.png'),
        require('@/assets/images/img.png'),
        require('@/assets/images/famous-pers.jpg')
      ],
    };
  },
}
</script>

<template>
  <div class="main">
    <div class="main-title">
      <h2 class="font-gilroy title">
        {{ data.category_title }}
      </h2>
      <div class="btn-1">
        <more  :title="data.buttons_title"/>
      </div>
    </div>
    <div class="slider-container mb-14">
      <img class="w-full h-full rounded" :src="data.image" alt="Культура и традиция"/>
    </div>
    <div>
      <h3 class="font-gilroy mb-10 title">
        {{ data.title }}
      </h3>
      <span style="color: #575F6C" class="text">
        {{data.full_desc}}
      </span>
    </div>
    <div class="btn-2">
      <more :title="data.buttons_title" style="font-size: 12px"></more>
    </div>
  </div>
</template>

<style scoped>
.main {
  padding: 80px 0;
  .main-title {
    @apply w-full flex items-center justify-between;
    margin-bottom: 56px;
    h2 {
      font-weight: 500;
      font-size: 40px
    }
    .btn-1 {
      @apply flex gap-4 items-center;
    }
  }
  .slider-container {
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  .text {
    @apply text-base leading-8;
  }
  .btn-2 {
    display: none;
    @apply flex gap-4 items-center;
  }
}
@media (max-width : 992px) {
  .main {
    padding: 64px 0;
    .main-title {
      .title {
        font-size: 28px;
      }
    }
    .text {
      font-size: 14px;
      line-height: 28px;
    }
  }
}
@media (max-width : 760px) {
  .main {
    padding: 32px 0;
    .main-title {
      margin-bottom: 24px;
      h2 {
        font-size: 24px;
      }
      .btn-1 {
        display: none;
      }
    }
    h3 {
      font-size: 18px;
      font-weight: 400;
    }
    .text {
      font-weight: 400;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 24px;
    }
    .btn-2 {
      display: flex;
    }
  }
}
</style>