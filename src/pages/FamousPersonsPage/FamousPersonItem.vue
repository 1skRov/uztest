<script>
export default {
  name: "FamousPersonItem",
  props: {
    person: {
      type: Array,
      default: () => []
    }
  },
  methods:{
    PersonDetail() {
      this.$router.push({ name: 'person-detail', params: { person : this.person } });
    },
  }
}
</script>

<template>
<div style="border: 1px solid #EBEEF0; border-radius: 8px; overflow: hidden;" class="flex">
  <div style="width: 15%" class="flex-shrink">
    <img src="@/assets/images/img_1.png" alt="" class="w-full h-full">
  </div>
  <div class="flex items-center w-full">
    <div class="px-4 py-1.5">
      <p class="font-gilroy">{{ person.information_title }}</p>
      <span class="text-lg job" style="color:#575F6C">{{ person.desc }}</span>
      <div class="mt-3">
        <button @click="PersonDetail">{{ person.buttons_title }}</button>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
p {
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
}
button {
  @apply uppercase font-medium text-base py-2.5 px-4 text-white;
  border-radius: 6px;
  border: 1px solid #CFD3DA;
  background-color: #0072AB;
}
.job {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
@media (max-width : 992px) {
  p {
    font-size: 24px;
  }
  span {
    font-size: 14px;
  }
  button {
    @apply py-1.5 px-2;
    font-size: 14px;
  }
}
</style>