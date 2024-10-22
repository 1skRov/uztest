<script>
import SideBar from "@/pages/MainPage/SideBar.vue";
import moreDetail from "@/components/buttons/moreDetail.vue";
export default {
  name: "Section4",
  components: {moreDetail, SideBar},
  props: {
    hasSidebar:{
      default: true,
      type: Boolean,
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
  }
}
</script>

<template>
<div class="w-full flex">
  <div v-if="hasSidebar" class="hide">
    <SideBar :page="page" :icon="false"/>
  </div>
  <div class="main" style="">
    <div class="content-f">
      <h2 class="font-gilroy">Известные личности</h2>
      <div class="mobile">
        <router-link to="/famous-persons">
          <moreDetail :title="title"/>
        </router-link>
      </div>
    </div>
    <div class="content">
        <div v-for="i in items" :key="i.id" class="izo relative overflow-hidden group">
          <div>
            <img src="@/assets/images/img_1.png" alt="" style="width: 100%; height: 100%">
          </div>
          <div class="izo-item absolute inset-0 opacity-0 group-hover:opacity-80 flex flex-col justify-end items-center text-center transition-opacity duration-300 p-6">
          </div>
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 flex flex-col justify-end items-center text-center transition-opacity duration-700 p-6">
            <p class="font-gilroy text-start" style="font-size: 24px; font-weight: 500; color: white">{{ i.name }}</p>
            <span class="text-white mt-2 text-start" style="font-size: 14px">{{ i.position }}</span>
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
  padding: 64px 0 64px 188px;
  @apply w-full;
}
.content {
  @apply flex justify-between relative;
  width: 65%;
}
.content-f {
  @apply flex justify-between;
  width: 65%;
  padding-bottom: 56px;
  h2 {
    font-size: 40px; line-height: 52px; font-weight: 500;
  }
}
.izo {
  border-radius: 6px;
  width: 288px;
  height: 384px;
  @apply bg-gray-100;

  .izo-item {
    background-color: #0072AB;
  }
}
.mobile-has {
  display:none;
}
@media (max-width : 992px) {
  .hide {
    display: none;
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