<script>
import NextBtn from "@/components/buttons/nextBtn.vue";
import PrevBtn from "@/components/buttons/prevBtn.vue";
import GalleryItem from "@/pages/PressCenter/GalleryItem.vue";

export default {
  name: "Interview",
  components: {GalleryItem, PrevBtn, NextBtn},
  methods: {
    goToYoutube() {
      window.open('https://www.youtube.com/watch?v=qGSx8ZsGYGI&ab_channel=%D0%9A%D0%B8%D0%BD%D0%BE%D0%BF%D0%BE%D0%B8%D1%81%D0%BA', '_blank');
    }
  }
}
</script>

<template>
  <div class="content">
    <div class="w-full">
      <h2 class="font-gilroy title">
        Интервью
      </h2>
      <p class="descriptions">
        Благотворительные инициативы общества собирают с каждым разом всё больше участников, которые приносят лекарства, одежду, продукты, игрушки. Эти простые вещи обладают добавочной ценностью — они несут в себе тепло, заботу и стремление облегчить и украсить жизнь людей, находящихся в трудной жизненной ситуации.
      </p>
      <span class="author">
        Пулатов Шерзод Аббозович
      </span>
      <div class="flex gap-4 items-center justify-between mt-10">
        <button class="px-6 py-2.5 rounded text-white font-medium" style="background-color: #0072AB" @click="goToYoutube">Посмотреть</button>
        <div class="flex items-center gap-6">
          <prev-btn/>
          <next-btn/>
        </div>
      </div>
    </div>
    <div class="w-full flex flex-shrink" style="border-radius: 8px">
      <img src="@/assets/images/img_4.png" alt="" class="w-full">
    </div>
  </div>
</template>

<style scoped>
.content {
  width: 65%;
  @apply flex justify-between gap-6 mx-auto;
}
.title {
  @apply mb-6;
  font-weight: 500;
  font-size: 40px
}
.descriptions {
  @aply mb-6 leading-8;
  color:#575F6C;
}
.author {
  color:#575F6C;
  font-style: italic;
}
@media (max-width : 992px) {
  .content {
    width: 90%;
  }
  .title {
    font-size: 28px
  }
  .descriptions {
    font-size: 14px;
    line-height: 28px;
  }
  .author {
    font-size: 14px;
  }
}
</style>