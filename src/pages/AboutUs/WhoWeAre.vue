<script>
import SideBar from "@/pages/MainPage/SideBar.vue";

export default {
  name: "WhoWeAre",
  components: {SideBar},
  data() {
    return {
      page: "01",
    };
  },
}
</script>

<template>
  <div class="padding">
    <h2 class="font-gilroy mb-10">
        Кто мы?
      </h2>
      <p style="color: #575F6C;" class="text-base leading-8 font-normal">
        Идея создания и разработка данного Портала принадлежит председателю узбекского этнокультурного центра города Астана Ш.Пулатову при непосредственной поддержки спонсоров и партнеров из числа ниже указанных компаний и организаций. Отельную благодарность выражаем этнокультурному центру города Алматы в лице председателя А.Исматуллаева за поддержку и выражение солидарности в воплощении данной инициативы.
      </p>
  </div>
</template>

<style scoped>
.padding {
  padding: 80px 0;
  font-weight: 500;
  font-size: 40px
}
@media (max-width : 992px) {
  .padding {
    padding: 48px 0;
    font-size: 28px;

    h2 {
      margin-bottom: 32px;
    }

    p {
      font-size: 14px;
      line-height: 28px;
    }
  }
}
@media (max-width : 760px) {
  .padding {
    padding: 32px 0;
    font-size: 24px;

    h2 {
      margin-bottom: 12px;
    }

    p {
      font-size: 12px;
    }
  }
}
</style>