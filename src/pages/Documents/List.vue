<script>
import NextBtn from "@/components/buttons/nextBtn.vue";
import PrevBtn from "@/components/buttons/prevBtn.vue";
import SideBarText from "@/components/SideBarText.vue";
import FamousPersonItem from "@/pages/FamousPersonsPage/FamousPersonItem.vue";
import DocumentItem from "@/pages/Documents/DocumentItem.vue";
import api from "@/assets/axios";

export default {
  name: "List",
  components: {DocumentItem, FamousPersonItem, SideBarText, PrevBtn, NextBtn},
  data(){
    return{
      title:"документы",
      s1:{},
      s2:{},
      s3:{},
    }
  },
  mounted(){
    this.getDocuments();
  },
  methods:{
    getDocuments() {
      api.get('/informations/', {
        params: { lang_code: 'ru' },
        headers: {
          'ngrok-skip-browser-warning': 'true'
        }
      })
          .then(response => {
            const groupedData = response.data.reduce((acc, item) => {
              if (!acc[item.category_id]) {
                acc[item.category_id] = [];
              }
              acc[item.category_id].push(item);
              return acc;
            }, {});

            this.s1 = groupedData[16] ? groupedData[16][0] : {};
            this.s2 = groupedData[17] ? groupedData[17] : [];
            // this.s3 = groupedData[4] && groupedData[4].length > 1 ? groupedData[4][1] : {};
            this.s3 = groupedData[19] ? groupedData[19][0] : {};
            this.s6 = groupedData[13] ? groupedData[13][0] : {};
            this.s7 = groupedData[14] ? groupedData[14][0] : {};
            this.s8 = groupedData[15] ? groupedData[15][0] : {};
            console.log("s1--->", this.s1);
          })
          .catch(error => {
            if (error.response) {
              console.error("Response error:", error.response.status, error.response.data);
            } else if (error.request) {
              console.error("No response received:", error.request);
            } else {
              console.error("Request setup error:", error.message);
            }
          });
    },
  }
}
</script>

<template>
  <div class="w-full relative">
    <div class="h-full absolute top-0 left-0 hide">
      <SideBarText :title="title"/>
    </div>

    <div class="w-full main">
      <div class="main-s">
        <p class="font-gilroy title" style="font-weight: 500">{{ s1.category_title }}</p>
        <div class="text">{{ s1.full_desc }}</div>
        <p class="leading-8 mb-8">{{ s2.category_title }}</p>
        <div class="flex flex-col gap-3" style="margin-bottom: 60px">
          <div v-for="doc in s2" :key="doc.id">
            <DocumentItem :title="doc.title" />
          </div>
        </div>
        <p class="leading-8 mb-8">{{ s3.category_title }}</p>
        <div class="flex flex-col gap-3">
          <div v-for="doc in s3" :key="doc.id">
            <DocumentItem :title="doc.title" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  padding: 64px 0;
}
.main-s {
  @apply mx-auto;
  width: 65%;
   p {
     font-size: 40px;
   }
  .title {
    @apply mb-20;
  }
  .text {
    @apply text-base leading-8;
    margin-bottom: 60px;
    color: #575F6C
  }
}
@media (max-width : 992px) {
  main {
    padding: 48px 0;
  }
  .main-s {
    width: 90%;

    p {
      font-size: 28px;
    }
    .title {
      @apply mb-10;
    }
    .text {
      font-size: 14px;
    }
  }
  .hide {
    display: none;
  }
}
</style>