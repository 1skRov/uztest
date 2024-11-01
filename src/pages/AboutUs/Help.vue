<script>
import PrevBtn from "@/components/buttons/prevBtn.vue";
import NextBtn from "@/components/buttons/nextBtn.vue";

export default {
  name: "Help",
  components: {NextBtn, PrevBtn},
  props:{
    data:{
      type: Object,
    }
  }
}
</script>

<template>
  <div class="content">
    <div class="left">
      <p class="font-gilroy title">
        {{ data.category_title }}
      </p>
      <p class="description">
        {{ data.full_desc }}
      </p>
      <div class="btn">
        <button>{{ data.button_title }}</button>
        <div class="flex gap-6 items-center">
          <prev-btn/>
          <next-btn/>
        </div>
      </div>
    </div>
    <div class="w-full flex flex-shrink justify-center" style="">
      <img src="@/assets/images/img_2.png" class="w-auto h-auto">
<!--      <img :src="data.image" class="w-auto h-auto">-->
    </div>
  </div>
</template>

<style scoped>
.content {
  border: 1px solid #EBEEF0;
  border-radius:8px;
  background: #FAFCFD;
  @apply flex mx-auto;
}
.left {
  @apply w-full p-16;
  .title {
    @apply mb-6;
    font-weight: 500;
    font-size: 40px
  }
  .description {
    @apply leading-8 text-base;
    color: #575F6C;
  }
  .btn {
    @apply mt-10 flex justify-between;
    button {
      @apply uppercase font-medium text-base py-4 px-6 text-white;
      border-radius: 6px; border: 1px solid #CFD3DA; background-color: #0072AB;
    }
  }
}
@media (max-width : 992px) {
  .left {
    padding: 38px;
    .title {
      @apply mb-6;
      font-size: 28px
    }
    .description {
      font-size: 12px;
      line-height: 28px;
    }
    .btn {
      margin-top: 32px;
      button {
        font-size: 14px;
        @apply px-4 py-3;
      }
    }
  }
}
</style>