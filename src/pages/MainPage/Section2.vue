<script>
import SideBar from "@/pages/MainPage/SideBar.vue";
import moreDetail from "@/components/buttons/moreDetail.vue"

export default {
  name: "Section2",
  components: {SideBar, moreDetail},
  data () {
    return {
      page: "02",
      title:"подробнее"
    }
  },
  methods: {
    GotoAboutUs(){
      this.$router.push({ name: 'AboutUs' });
    },
  }
}
</script>

<template>
  <div class="w-full flex">
    <div class="hide">
      <SideBar :page="page" :icon="false"/>
    </div>
    <div class="content">
      <div class="content-in">
        <div>
          <h2 class="font-gilroy">О нас</h2>
          <div class="content-text">
            <p>
              Идея создания и разработка данного Портала принадлежит председателю узбекского этнокультурного центра города Астана Ш.Пулатову при непосредственной поддержки спонсоров и партнеров из числа ниже указанных компаний и организаций. Отельную благодарность выражаем этнокультурному центру города Алматы в лице председателя А.Исматуллаева за поддержку и выражение солидарности в воплощении данной инициативы.
            </p>
            <p>Единый Портал Узбеков Казахстана создан под эгидой Ассамблеи народа Казахстана с целью продвижения деятельности узбекских этнокультурных объединений всех уровней, в том числе Ассоциации этнокультурных общественных объединений узбеков РК "Дустлик".</p>
          </div>
        </div>
        <div class="btn">
          <moreDetail :title="title" @click="GotoAboutUs"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn {
  margin-top: 72px
}
.content {
  @apply w-full;
  padding-left: 188px;
}
.content-in {
  @apply py-16 border-0 border-t border-solid border-gray-200;
  width: 75%;
  h2 {
    font-size: 40px;
    font-weight: 500;
    padding-bottom: 56px;
  }
  .content-text {
    @apply flex gap-10;
    p {
      @apply w-1/2;
      color: #575F6C;
    }
  }
}
@media (max-width : 992px) {
  .hide {
    display: none;
  }
  .content {
    padding-left: 0;
  }
  .content-in {
    width: 90%;
    padding: 48px 0;
    @apply mx-auto;
    h2 {
      font-size: 28px;
      padding-bottom :48px;
    }
    .content-text {
      @apply flex gap-10;
      p {
        font-size: 14px;
      }
    }
  }
  .btn {
    margin-top: 64px;
  }
}
@media (max-width : 760px) {
  .content-in {
    width: 90%;
    padding: 32px 0;
    @apply mx-auto;
    h2 {
      font-size: 24px;
      padding-bottom :24px;
    }
    .content-text {
      @apply gap-5 flex flex-col;
      p {
        @apply w-full;
        font-size: 12px;
        line-height: 21px;
      }
    }
    .btn {
      margin-top: 24px;
    }
  }
}
</style>