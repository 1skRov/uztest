<script>
import moreDetail from "@/components/buttons/moreDetail.vue";

export default {
  name: "EducationAndSport",
  components: {moreDetail},
  props:{
    title:{
      type: String,
      default: '',
    },
    description:{
      type: String,
      default: '',
    },
    dataEd:{
      type: Object,
    },
    dataSp:{
      type: Object,
    }
  }
}
</script>

<template>
  <div class="main">
    <div class="w-full p-10" style="border: 1px solid #EBEEF0; border-radius: 8px">
      <p class="font-gilroy title">{{ dataEd.category_title }}</p>
      <span class="text">
        {{ dataEd.full_desc }}</span>
      <div class="mt-6">
        <router-link to="/education">
        <button class="uppercase font-medium text-base py-4 px-6 text-white" style="border-radius: 6px; border: 1px solid #CFD3DA; background-color: #0072AB">
          {{ dataEd.buttons_title }}</button>
        </router-link>
      </div>
    </div>
    <div class="w-full p-10" style="border: 1px solid #EBEEF0; border-radius: 8px">
      <p class="font-gilroy title">{{ dataSp.category_title }}</p>
      <span class="text">
        {{ dataSp.full_desc }}
      </span>
      <div class="mt-6">
        <router-link to="/sport">
          <button class="uppercase font-medium text-base py-4 px-6 text-white" style="border-radius: 6px; border: 1px solid #CFD3DA; background-color: #0072AB">
            {{ dataSp.buttons_title }}</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  padding: 0 0 80px;
  @apply w-full flex gap-6;
}
.title {
  font-weight: 500;
  font-size: 40px;
  line-height: 52px;
  @apply mb-6;
}
.text {
  @apply text-base leading-8 text-gray-600;
}

@media (max-width : 992px) {
  .main {
    padding: 0 0 48px;
  }
  .title {
    font-size: 28px;
  }
  .text {
    font-size: 14px;
    line-height: 28px;
  }
}
@media (max-width : 760px) {
  .main {
    padding: 0 0 32px;
    @apply flex flex-col;
  }
}
</style>