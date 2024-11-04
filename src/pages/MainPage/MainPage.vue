<script>
import Section1 from "@/pages/MainPage/Section1.vue";
import Section2 from "@/pages/MainPage/Section2.vue";
import Section3 from "@/pages/MainPage/Section3.vue";
import Section4 from "@/pages/MainPage/Section4.vue";
import Section5 from "@/pages/MainPage/Section5.vue";
import Section6 from "@/pages/MainPage/Section6.vue";
import api from "@/assets/axios";
import { mapGetters } from 'vuex';
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
      isLoading: false,
      s1: {},
      s2: {},
      s3: {},
      s4: {},
      s5: {},
      s6: {},
    }
  },
  computed: {
    ...mapGetters(['currentLanguage'])
  },
  watch: {
    currentLanguage(newLang) {
      this.main(newLang);
    }
  },
  mounted() {
    this.main(this.currentLanguage);
  },
  methods: {
    main(langCode) {
      this.isLoading = true;
      api.get('/informations/', {
        params: { lang_code: langCode },
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

            this.s1 = groupedData[2] ? groupedData[2][0] : {};
            this.s2 = groupedData[3] ? groupedData[3][0] : {};
            this.s3 = groupedData[4] ? groupedData[4][0] : {};
            this.s4 = groupedData[5] ? groupedData[5] : [];
            this.s5 = groupedData[6] ? groupedData[6][0] : {};
            this.s6 = groupedData[9] ? groupedData[9][0] : {};
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
          })
          .finally(() => {
              this.isLoading = false;
            });
    }
  }
}
</script>

<template>
  <div class="w-full">
    <loading
        :active.sync="isLoading"
        :is-full-page="true"
        color="#0072AB"
        backgroundColor="rgba(255, 255, 255, 0.8)"
        loader="dots"
        width="64px"
        height="64px"
    ></loading>
      <Section1 :data="s1"/>
      <div class="tablet">
        <Section3 :data="s3"/>
      </div>
      <Section2 :data="s2"/>
      <div class="mobile">
        <Section3 :data="s3"/>
      </div>
      <Section4 :data="s4"/>
      <Section5 :data="s5"/>
      <Section6 :data="s6"/>
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