<script>
import SideBarText from "@/components/SideBarText.vue";
import DocumentItem from "@/pages/Documents/DocumentItem.vue";
import PrevBtn from "@/components/buttons/prevBtn.vue";
import NextBtn from "@/components/buttons/nextBtn.vue";
import ProjectItem from "@/pages/Documents/ProjectItem.vue";

export default {
  name: "Projects",
  components: {ProjectItem, NextBtn, PrevBtn, DocumentItem, SideBarText},
  data(){
    return{
      title:"Проекты",
    }
  }
}
</script>

<template>
  <div class="w-full relative">
    <div class="h-full absolute top-0 left-0 hide">
      <SideBarText :title="title" :is-background="true"/>
    </div>

    <div class="w-full first">
      <div class="second">
        <div class="flex items-center justify-between mb-14">
          <p class="font-gilroy">Культура и традиция</p>
          <div class="flex items-center gap-6">
            <prev-btn/>
            <next-btn/>
          </div>
        </div>
        <div class="w-full grid grid-cols-2 gap-6">
          <ProjectItem/>
          <ProjectItem/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.first {
  padding: 64px 0;
}
.second {
  @apply mx-auto;
  width: 65%;
}
p {
  font-weight: 500;
  font-size: 40px;
}
@media (max-width : 992px) {
  .first {
    padding: 24px 0 48px 0;
  }
  .second {
    width: 90%;
  }
  .hide {
    display: none;
  }
  p {
    font-size: 28px;
  }
}
</style>