<script>
export default {
  name: "NewsItem"
}
</script>

<template>
<div class="main">
  <div>
    <img src="@/assets/images/img_3.png" alt="" class="rounded w-full h-full">
  </div>
  <div class="font-gilroy title">
    Шавкат Мирзиёев лично поздравил с победой таэквондиста Улугбека Рашитова и боксера Хасанбоя Дусматова — видео
  </div>
  <div class="time">
    Вчера 22:13
  </div>
</div>
</template>

<style scoped>
.main {
  @apply flex flex-col gap-6;
  .title {
    font-weight: 500; font-size: 24px; line-height: 28.8px;
  }
  .time {
    @apply text-base uppercase;
    letter-spacing: 3px; color:#CFD3DA; font-weight: 500;
  }
}
@media (max-width : 992px) {
  .main {
    @apply gap-4;
    .title {
      font-size: 16px;
      line-height: 20px;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .time {
      font-size: 12px;
    }
  }
}
</style>