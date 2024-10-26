<script>
import VideoMaterial from "@/pages/PressCenter/VideoMaterial.vue";
import NextBtn from "@/components/buttons/nextBtn.vue";
import PrevBtn from "@/components/buttons/prevBtn.vue";
import GalleryItem from "@/pages/PressCenter/GalleryItem.vue";

export default {
  name: "Gallery",
  components: {GalleryItem, PrevBtn, NextBtn, VideoMaterial},
  data(){
    return{
      photo: [1,2,3,4,5,6]
    }
  }
}
</script>

<template>
  <div>
    <div class="title">
      <h2 class="font-gilroy">
        Фотогалерея
      </h2>
      <div class="flex gap-4 items-center">
        <prev-btn/>
        <next-btn/>
      </div>
    </div>
    <div class="grup">
      <div v-for="n in photo" :key="n.id">
        <GalleryItem />
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  margin-bottom: 56px;
  @apply w-full flex items-center justify-between;
  h2 {
    font-weight: 500;
    font-size: 40px;
  }
}
.grup {
  grid-template-columns: repeat(3, 1fr);
  display: grid;
  @apply gap-y-8 gap-x-6;
}
@media (max-width : 992px) {
  .title {
    margin-bottom: 48px;
    h2 {
      font-size: 28px;
    }
  }
  .grup {
    display: flex;
    overflow: hidden;
  }
}
</style>