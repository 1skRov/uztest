<script>
import SideBarText from "@/components/SideBarText.vue";
import NewsList from "@/pages/PressCenter/NewsList.vue";
import VideoList from "@/pages/AboutUs/VideoList.vue";
import Gallery from "@/pages/PressCenter/Gallery.vue";
import Interview from "@/pages/PressCenter/Interview.vue";
import Help from "@/pages/AboutUs/Help.vue";

export default {
  name: "PressCenter",
  components: {Help, Interview, Gallery, VideoList, NewsList, SideBarText},
  data(){
    return {
      title:"ПРЕСС ЦЕНТР",
    }
  }
}
</script>

<template>
  <div class="w-full relative">
    <div class="h-full absolute top-0 left-0 hide">
      <SideBarText :title="title"/>
    </div>

    <div class="w-full">
      <div class="section">
        <NewsList/>
      </div>
      <div class="section">
        <VideoList/>
      </div>
      <div class="section">
        <Gallery/>
      </div>
      <div class="section">
        <Interview/>
      </div>
      <div class="section">
        <Help/>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.section {
  @pply mx-auto;
  width:65%;
}
@media (max-width : 992px) {
  .hide {
    display: none;
  }
  .section {
    padding: 48px 0;
    width: 90%;
    @apply mx-auto;
  }
}
</style>