<script>
import FamousPersonItem from "@/pages/FamousPersonsPage/FamousPersonItem.vue";
import api from "@/assets/axios";
import Loading from "vue-loading-overlay";

export default {
  name: "guide",
  components: {Loading, FamousPersonItem},
  data() {
    return {
      persons: [],
      isLoading: false,
    };
  },
  mounted(){
    this.getList();
  },
  methods: {
    getList() {
      this.isLoading = true;
      api.get('/famous/', {
        params: { lang_code: 'ru' },
        headers: {
          'ngrok-skip-browser-warning': 'true'
        }
      })
          .then(response => {
            this.persons = response.data;
            console.log("persons", this.persons);
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
    },
  }
}
</script>

<template>
<div class="pb-20">
  <loading
      :active.sync="isLoading"
      :is-full-page="true"
      color="#0072AB"
      backgroundColor="rgba(255, 255, 255, 0.8)"
      loader="dots"
      width="64px"
      height="64px"
  ></loading>
  <div v-for="i in persons" :key="i.id" class="item">
    <FamousPersonItem :person="i"/>
  </div>
</div>
</template>

<style scoped>
.item + .item {
  @apply mt-2;
}
</style>