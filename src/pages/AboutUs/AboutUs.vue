<script>
import WhoWeAre from "@/pages/AboutUs/WhoWeAre.vue";
import SideBar from "@/pages/MainPage/SideBar.vue";
import OurStory from "@/pages/AboutUs/OurStory.vue";
import CultureAndTradition from "@/pages/AboutUs/CultureAndTradition.vue";
import Section4 from "@/pages/MainPage/Section4.vue";
import FamousPersons from "@/pages/AboutUs/FamousPersons.vue";
import YouthOrganizations from "@/pages/AboutUs/YouthOrganizations.vue";
import EducationAndSport from "@/pages/AboutUs/EducationAndSport.vue";
import Help from "@/pages/AboutUs/Help.vue";
import api from "@/assets/axios.js";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

export default {
  name: "AboutUs",
  components: {
    Help,
    EducationAndSport,
    YouthOrganizations, FamousPersons, Section4, CultureAndTradition, OurStory, SideBar, WhoWeAre, Loading},
  data (){
    return {
      sections: ['кто мы','наша история','культура','личности','молодежные организации','образование и спорт','помощь',],
      currentSection: 0,
      s1: {},
      s2: {},
      s3: {},
      s4: {},
      s5: {},
      s6: {},
      s7: {},
      s8: {},
      isLoading: false
    }
  },
  mounted() {
    this.about();
    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: 0.3,
    });

    const sectionElements = document.querySelectorAll('.section');
    sectionElements.forEach((section) => observer.observe(section));
  },
  methods: {
    about() {
      this.isLoading = true;
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

            this.s1 = groupedData[10] ? groupedData[10][0] : {};
            this.s2 = groupedData[11] ? groupedData[11] : [];
            this.s3 = groupedData[4] && groupedData[4].length > 1 ? groupedData[4][1] : {};
            this.s4 = groupedData[5] ? groupedData[5] : [];
            this.s5 = groupedData[12] ? groupedData[12][0] : {};
            this.s6 = groupedData[13] ? groupedData[13][0] : {};
            this.s7 = groupedData[14] ? groupedData[14][0] : {};
            this.s8 = groupedData[15] ? groupedData[15][0] : {};
            console.log("title", response.data);
          })
          .catch(error => {
            if (error.response) {
              console.error("Response error:", error.response.status, error.response.data);
            } else if (error.request) {
              console.error("No response received:", error.request);
            } else {
              console.error("Request setup error:", error.message);
            }
          })
        .finally(() => {
            this.isLoading = false; // Завершение загрузки
          });
    },
    handleIntersection(entries) {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id.split('-')[1];
          this.currentSection = parseInt(sectionId);
        }
      }
    },
  },
}
</script>

<template>
  <div class="w-full flex relative">
    <loading
        :active.sync="isLoading"
        :is-full-page="true"
        color="#0072AB"
        backgroundColor="rgba(255, 255, 255, 0.8)"
        loader="dots"
        width="64px"
        height="64px"
    ></loading>
    <div style="width: 160px; height: 100%; border-right: 1px solid #EBEEF0; position: absolute; top:0; z-index:1000" class="hid">
      <div style="position: sticky; top:120px;">
        <ul>
          <li v-for="(section, index) in sections" :key="index" class="cursor-pointer">
            <div :class="['circle mb-8 mx-auto', { active: currentSection === index }]">
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="w-full">
      <div class="text-box flex-wrap hid" style="width:140px; position: fixed; top:140px; left: 120px; padding: 12px 24px; z-index:1000">
        {{ sections[currentSection] }}
      </div>
      <div id="section-0" class="section mx-auto">
        <WhoWeAre :data="s1"></WhoWeAre>
      </div>
      <div id="section-1" class="section mx-auto">
        <OurStory :data="s2"></OurStory>
      </div>
      <div class="w-full relative" style="background-color: #F7F8FA">
        <div class="absolute right-0 bottom-0">
          <img src="@/assets/images/cult-bottom.png" alt="">
        </div>
        <div class="absolute right-0 top-0">
          <img src="@/assets/images/cult-top.png" alt="">
        </div>
        <div class="section mx-auto" id="section-2">
          <CultureAndTradition :data="s3"></CultureAndTradition>
        </div>
      </div>
      <div id="section-3" class="section mx-auto">
        <FamousPersons :data="s4"/>
      </div>
      <div id="section-4" class="section mx-auto">
        <YouthOrganizations :data="s5"/>
      </div>
      <div id="section-5" class="section mx-auto">
        <EducationAndSport :data-ed="s6" :data-sp="s7"/>
      </div>
      <div id="section-6" class="section mx-auto hid hid-p mb-12">
        <Help :data="s8"/>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.section {
  width: 65%;
}
.circle {
  width: 25px;
  height: 25px;
  border: 1px solid #EBEEF0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
}
.sidebar-text {
  padding: 20px;
  font-size: 14px;
  color: #333;
}
.circle::before {
  content: '';
  width: 10px;
  height: 10px;
  background-color: #575F6C;
  border-radius: 50%;
}

.circle.active {
  border-color: rgba(0, 114, 171, 0.2);
  width: 30px;
  height: 30px;
}

.circle.active::before {
  border: 1px solid rgba(0, 114, 171, 0.25);
  background-color: #0072AB;
}
.text-box {
  background-color: #ffff;
  border: 1px solid #E0E3E8;
  border-radius: 8px;
  font-size: 16px;
  color: #575F6C;
  font-weight: 500;
  text-align: center;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

@media (max-width : 992px) {
  .hid {
    display: none;
  }

  .section {
    width: 90%;
  }
}
@media (max-width : 760px) {
  .hid-p {
    display: none;
  }

  .section {
    width: 90%;
  }
}
</style>