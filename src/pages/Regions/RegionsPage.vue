<script>
import NextBtn from "@/components/buttons/nextBtn.vue";
import PrevBtn from "@/components/buttons/prevBtn.vue";
import FamousPersonItem from "@/pages/FamousPersonsPage/FamousPersonItem.vue";
import SideBarText from "@/components/SideBarText.vue";

export default {
  name: "RegionsPage",
  components: {SideBarText, FamousPersonItem, PrevBtn, NextBtn},
  data() {
    return{
      title:"Регионы"
    }
  }
}
</script>

<template>
<div>
  <div class="w-full relative">
    <div class="h-full absolute top-0 left-0 hide">
      <SideBarText :title="title"/>
    </div>

    <div class="map">
      <div class="map-title flex justify-between">
        <h2 class="font-gilroy">Этнокультурный центр узбеков Казахстана</h2>
      </div>
      <div class="relative bg-blue-50 map-title" style="height: 940px;">
        <div class="absolute top-0 left-0">
          <p class="text-sm" style="color: #575F6C">Sed ut perspiciatis unde omnis iste natus error sit <br> voluptatem accusantium doloremque laudantium,<br> totam rem aperiam.</p>
        </div>
      </div>
    </div>
    <div class="cursor-pointer map-title">
      <div class="w-full grid grid-cols-3" style="border-radius: 8px; border: 1px solid #EBEEF0;overflow: hidden">
        <router-link
            to="/regions/guide"
            class="item"
            :class="{ active: $route.path === '/regions/guide' }">Руководство</router-link>

        <router-link
            to="/regions/information"
            class="item"
            :class="{ active: $route.path === '/regions/information' }">Информация</router-link>

        <router-link
            to="/regions/contacts-info"
            class="item"
            :class="{ active: $route.path === '/regions/contacts-info' }">Контакты</router-link>
      </div>
    </div>
    <div class="map-title">
      <router-view></router-view>
    </div>
  </div>
</div>
</template>

<style scoped>
.map {
  @apply w-full;
  padding:80px 0;

  h2 {
    font-size: 40px;
    line-height: 52px;
    font-weight: 500;
  }
}
.map-title {
  @apply mx-auto;
  width:65%;
  margin-bottom: 40px;
}
.item {
  @apply py-2.5 px-6 text-base mx-auto w-full text-center;
  font-weight: 500;
}
.item + .item {
  border-left: 1px solid #EBEEF0;
}
.active {
  background-color: #0072AB;
  color: white;
}

@media (max-width : 992px) {
  .hide {
    display: none;
  }

  .map {
    padding:48px 0;


    h2 {
      font-size: 28px;
      line-height: 36px;
    }
    p{
      font-size: 14px;
    }
  }
  .map-title {
    width: 90%
  }
  .item {
    font-size: 14px;
  }
}
</style>