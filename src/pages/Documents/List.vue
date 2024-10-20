<script>
import NextBtn from "@/components/buttons/nextBtn.vue";
import PrevBtn from "@/components/buttons/prevBtn.vue";
import SideBarText from "@/components/SideBarText.vue";
import FamousPersonItem from "@/pages/FamousPersonsPage/FamousPersonItem.vue";
import DocumentItem from "@/pages/Documents/DocumentItem.vue";

export default {
  name: "List",
  components: {DocumentItem, FamousPersonItem, SideBarText, PrevBtn, NextBtn},
  data(){
    return{
      title:"документы",
      docs:[
        {title: "План ассоциации узбеков РК Дустлик на 2018 год"},
        {title: "План ассоциации узбеков РК Дустлик на 2018 год"},
        {title: "План ассоциации узбеков РК Дустлик на 2018 год"},
        {title: "План ассоциации узбеков РК Дустлик на 2018 год"},
        {title: "План ассоциации узбеков РК Дустлик на 2018 год"},
      ]
    }
  }
}
</script>

<template>
  <div class="w-full relative">
    <div class="h-full absolute top-0 left-0 hide">
      <SideBarText :title="title"/>
    </div>

    <div class="w-full main">
      <div class="main-s">
        <p class="font-gilroy title" style="font-weight: 500">Важные документы</p>
        <div class="text">Идея создания и разработка данного Портала принадлежит председателю узбекского этнокультурного центра города Астана Ш.Пулатову при непосредственной поддержки спонсоров и партнеров из числа ниже указанных компаний и организаций. Отельную благодарность выражаем этнокультурному центру города Алматы в лице председателя А.Исматуллаева за поддержку и выражение солидарности в воплощении данной инициативы.</div>
        <p class="leading-8 mb-8">Уставы</p>
        <div class="flex flex-col gap-3" style="margin-bottom: 60px">
          <div v-for="doc in docs" :key="doc.id">
            <DocumentItem :title="doc.title" />
          </div>
        </div>
        <p class="leading-8 mb-8">Планы на 2025 год</p>
        <div class="flex flex-col gap-3">
          <div v-for="doc in docs" :key="doc.id">
            <DocumentItem :title="doc.title" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  padding: 64px 0;
}
.main-s {
  @apply mx-auto;
  width: 65%;
   p {
     font-size: 40px;
   }
  .title {
    @apply mb-20;
  }
  .text {
    @apply text-base leading-8;
    margin-bottom: 60px;
    color: #575F6C
  }
}
@media (max-width : 992px) {
  main {
    padding: 48px 0;
  }
  .main-s {
    width: 90%;

    p {
      font-size: 28px;
    }
    .title {
      @apply mb-10;
    }
    .text {
      font-size: 14px;
    }
  }
  .hide {
    display: none;
  }
}
</style>