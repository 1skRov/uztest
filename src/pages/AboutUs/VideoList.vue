<script>
import NewsItem from "@/pages/PressCenter/NewsItem.vue";
import NextBtn from "@/components/buttons/nextBtn.vue";
import PrevBtn from "@/components/buttons/prevBtn.vue";
import VideoMaterial from "@/pages/PressCenter/VideoMaterial.vue";

export default {
  name: "VideoList",
  components: {VideoMaterial, PrevBtn, NextBtn, NewsItem},
  data(){
    return{
      video:[1,2,3]
    }
  }
}
</script>

<template>
  <div class="content">
    <div class="title">
      <h2 class="font-gilroy">
        Видео материалы
      </h2>
      <div class="flex gap-4 items-center">
        <prev-btn/>
        <next-btn/>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-6">
      <div v-for="n in video" :key="n.id">
        <VideoMaterial />
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  width: 65%;
  @apply mx-auto;
}
.title {
  @apply w-full flex items-center justify-between;
  margin-bottom: 56px;
  h2 {
    font-weight: 500;
    font-size: 40px
  }
}
@media (max-width : 992px) {
  .content {
    width: 90%;
  }
  .title {
    margin-bottom: 48px;
    h2 {
      font-size: 28px;
    }
  }
}
</style>