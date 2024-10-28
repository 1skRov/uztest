<script>
import Section1 from "@/pages/MainPage/Section1.vue";
import Section2 from "@/pages/MainPage/Section2.vue";
import Section3 from "@/pages/MainPage/Section3.vue";
import Section4 from "@/pages/MainPage/Section4.vue";
import Section5 from "@/pages/MainPage/Section5.vue";
import Section6 from "@/pages/MainPage/Section6.vue";
import api from "@/assets/axios";
export default {
  name: "MainPage",
  components: {
    Section6,
    Section5,
    Section4,
    Section3,
    Section2,
    Section1
  },
  data() {
    return {
      s1: {},
      s2: {},
      s3: {},
      s4: {},
      s5: {},
      s6: {},
    }
  },
  mounted() {
    this.main();
  },
  methods: {
    main() {
      api.get('/informations/', {
        params: { lang_code: 'ru' },
        headers: {
          'ngrok-skip-browser-warning': 'true'
        }
      })
          .then(response => {
            const groupedData = response.data.reduce((acc, item) => {
              acc[item.category_id] = item;
              return acc;
            }, {});

            this.s1 = groupedData[2];
            this.s2 = groupedData[3];
            this.s3 = groupedData[5];
            this.s4 = groupedData[6];
            this.s5 = groupedData[7];
            this.s6 = groupedData[8];
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
    }
    // main() {
    //   api.get('/informations/', {
    //     params: { lang_code: 'ru' },
    //     headers: {
    //       'ngrok-skip-browser-warning': 'true'
    //     }
    //   })
    //       .then(response => {
    //         const page_one = response.data.filter(item => item.category_id === 2);
    //         this.s1.title = page_one.title;
    //         this.s1.desc = page_one.mini_desc;
    //         const page_two = response.data.filter(item => item.category_id === 3);
    //         const page_three = response.data.filter(item => item.category_id === 5);
    //         const page_four = response.data.filter(item => item.category_id === 6);
    //         const page_five = response.data.filter(item => item.category_id === 7);
    //         const page_six = response.data.filter(item => item.category_id === 8);
    //         // this.data_title = filteredData[0].title;
    //         console.log("test", page_one);
    //       })
    //       .catch(error => {
    //         if (error.response) {
    //           console.error("Response error:", error.response.status, error.response.data);
    //         } else if (error.request) {
    //           console.error("No response received:", error.request);
    //         } else {
    //           console.error("Request setup error:", error.message);
    //         }
    //       });
    // }
  }
}
</script>

<template>
  <div class="w-full">
    <Section1 :data="s1"/>
    <div class="tablet">
      <Section3 />
    </div>
    <Section2 />
    <div class="mobile">
      <Section3 />
    </div>
    <Section4/>
    <Section5 />
    <Section6 />
  </div>
</template>

<style scoped>
.tablet {
  display: none;
}
@media (max-width : 760px) {
  .mobile {
    display: none;
  }
  .tablet {
    display: flex;
  }
}
</style>