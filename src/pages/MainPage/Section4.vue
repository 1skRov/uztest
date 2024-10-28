<script>
import SideBar from "@/pages/MainPage/SideBar.vue";
import moreDetail from "@/components/buttons/moreDetail.vue";
import axios from "axios";
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
      baseURL: "https://53ea-91-185-26-183.ngrok-free.app/",
      // items: [
      //   {
      //     name: "Пулатов Шерзод Аббозович",
      //     position: "Председатель, член АНК, член НЭС АНК"
      //   },
      //   {
      //     name: "Пулатов Шерзод Аббозович",
      //     position: "Председатель, член АНК, член НЭС АНК"
      //   },
      //   {
      //     name: "Пулатов Шерзод Аббозович",
      //     position: "Председатель, член АНК, член НЭС АНК"
      //   },
      //   {
      //     name: "Пулатов Шерзод Аббозович",
      //     position: "Председатель, член АНК, член НЭС АНК"
      //   }
      // ]
      items:null,
      images:null,
    };
  },
  mounted() {
    this.famPeop();
  },
  methods: {
    famPeop() {
      axios.get('https://53ea-91-185-26-183.ngrok-free.app/informations/?lang_code=ru', {
        headers: {
          'ngrok-skip-browser-warning': 'true'
        }
      })
          .then(response => {
            const filteredData = response.data.filter(item => item.category_id === 5);
            this.items = filteredData;
            console.log("izv_lich",filteredData);
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
    }
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
          <div class="flex flex-shrink">
            <img src="@/assets/images/img_1.png" alt="" class="w-full h-full">
          </div>
          <div class="izo-item absolute inset-0 opacity-0 group-hover:opacity-80 flex flex-col justify-end items-center text-center transition-opacity duration-300 p-6">
          </div>
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 flex flex-col justify-end items-center text-center transition-opacity duration-700 p-6">
            <p class="font-gilroy text-start">{{ i.title }}</p>
            <span class="text-white mt-2 text-start">{{ i.job }}</span>
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
  padding: 64px 0;
  @apply w-full;
}
.content {
  @apply flex justify-between relative mx-auto;
  width: 75%;
}
.content-f {
  @apply flex justify-between mx-auto items-center;
  width: 75%;
  padding-bottom: 56px;
  h2 {
    font-size: 40px; line-height: 52px; font-weight: 500;
  }
}
.izo {
  border-radius: 6px;
  max-width: 288px;
  max-height: 384px;
  @apply bg-gray-100;

  .izo-item {
    background-color: #0072AB;
  }
}
p {
  font-size: 24px; font-weight: 500; color: white;
}
span {
  font-size: 14px;
}
.mobile-has {
  display:none;
}
@media (max-width : 992px) {
  .hide {
    display: none;
  }
  .main {
    padding: 48px 0;
    @apply w-full;
  }
  .content {
    width: 90%;
    @apply gap-5;
  }
  .content-f {
    width: 90%;
    h2 {
      font-size: 28px;
    }
  }
  p {
    font-size: 18px;
  }
  span {
    font-size: 12px;
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