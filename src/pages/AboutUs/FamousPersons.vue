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
      <div v-for="i in items" :key="i.id" class="izo relative overflow-hidden group">
        <div>
          <img src="@/assets/images/img_1.png" alt="" style="width: 100%; height: 100%">
        </div>
        <div class="izo-item absolute inset-0 opacity-0 group-hover:opacity-80 flex flex-col justify-end items-center text-center transition-opacity duration-500 p-6">
        </div>
        <div class=" hover-text absolute inset-0 opacity-0 group-hover:opacity-100 flex flex-col justify-end items-center text-center transition-opacity duration-700 p-6">
          <p class="font-gilroy text-start">{{ i.name }}</p>
          <span class="text-white mt-2 text-start">{{ i.position }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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