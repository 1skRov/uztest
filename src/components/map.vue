<script>
import api from "@/assets/axios";
import {mapGetters} from "vuex";
import Loading from "vue-loading-overlay";

export default {
  name: "map",
  components: {Loading},
  data() {
    return {
      isLoading: false,
      currentImage: require('@/assets/images/Алматы.png'),
      regions:[],
      points: [
        {
          top: '83%',
          left: '77%',
          image: require('@/assets/images/Алматы.png'),
          title: '',
          code: '02',
        },
        {
          top: '50%',
          left: '44%',
          image: require('@/assets/images/Абай.png'),
          title: '',
          code: '18',
        },
        {
          top: '31%',
          left: '57%',
          image: require('@/assets/images/Астана.png'),
          title: '',
          code: '01',
        },
        {
          top: '57%',
          left: '15%',
          image: require('@/assets/images/Атырау.png'),
          title: '',
          code: '06',
        },
        {
          top: '22%',
          left: '58%',
          image: require('@/assets/images/Ақмола.png'),
          title: '',
          code: '03',
        },
        {
          top: '46%',
          left: '32%',
          image: require('@/assets/images/Ақтөбе.png'),
          title: '',
          code: '04',
        },
        {
          top: '38%',
          left: '12%',
          image: require('@/assets/images/Батыс Қазақстан.png'),
          title: '',
          code: '07',
        },
        {
          top: '78%',
          left: '63%',
          image: require('@/assets/images/Жамбыл.png'),
          title: '',
          code: '08',
        },
        {
          top: '67%',
          left: '69%',
          image: require('@/assets/images/Жетісу.png'),
          title: '',
          code: '19',
        },
        {
          top: '76%',
          left: '23%',
          image: require('@/assets/images/Маңғыстау.png'),
          title: '',
          code: 12,
        },
        {
          top: '22%',
          left: '73%',
          image: require('@/assets/images/Павлодар.png'),
          title: '',
          code: '14',
        },
        {
          top: '6%',
          left: '57%',
          image: require('@/assets/images/Солтүстік қазақстан.png'),
          title: '',
          code: '15',
        },
        {
          top: '73%',
          left: '54%',
          image: require('@/assets/images/Түркістан.png'),
          title: '',
          code: '13',
        },
        {
          top: '90%',
          left: '49%',
          image: require('@/assets/images/Шымкент.png'),
          title: '',
          code: '17',
        },
        {
          top: '45%',
          left: '94%',
          image: require('@/assets/images/Шығыс қазақстан.png'),
          title: '',
          code: '16',
        },
        {
          top: '51%',
          left: '69%',
          image: require('@/assets/images/Қарағанды.png'),
          title: '',
          code: '09',
        },
        {
          top: '21%',
          left: '40%',
          image: require('@/assets/images/Қостанай.png'),
          title: '',
          code: '10',
        },
        {
          top: '68%',
          left: '41%',
          image: require('@/assets/images/Қызылорда.png'),
          title: '',
          code: '11',
        },
        {
          top: '54%',
          left: '49%',
          image: require('@/assets/images/Ұлытау.png'),
          title: '',
          code: '20',
        },
      ]
    };
  },
  mounted() {
    this.getRegions(this.currentLanguage);
  },
  computed: {
    ...mapGetters(['currentLanguage'])
  },
  watch: {
    currentLanguage(newLang) {
      this.getRegions(newLang);
    }
  },
  methods: {
    assignTitlesToPoints() {
      this.points.forEach(point => {
        const matchingRegion = this.regions.find(region => region.kod === point.code);
        if (matchingRegion) {
          point.title = matchingRegion.title;
        }
      });
    },
    changeImage(image) {
      this.currentImage = image;
    },
    getRegions(langCode) {
      this.isLoading = true;
      api.get('/regions/', {
        params: { lang_code: langCode },
        headers: {
          'ngrok-skip-browser-warning': 'true'
        }
      })
          .then(response => {
            this.regions = response.data.map(region => {
              return {
                kod: region.kod,
                title: region.title
              };
            });
            this.assignTitlesToPoints();
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
  <div>
    <loading
        :active.sync="isLoading"
        :is-full-page="true"
        color="#0072AB"
        backgroundColor="rgba(255, 255, 255, 0.8)"
        loader="dots"
        width="64px"
        height="64px"
    ></loading>
    <div class="relative">
      <img :src="currentImage" alt="Kazakhstan Map" class="map-image" />
      <div
          v-for="(point, index) in points"
          :key="index"
          class="point-container"
          :style="{ top: point.top, left: point.left }"
          @click="changeImage(point.image)"
      >
        <span class="point-label">{{ point.title }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.point-container {
  position: absolute;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.point-label {
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 2px 4px;
  border-radius: 4px;
  white-space: nowrap;
}

.map-image {
  width: 100%;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>