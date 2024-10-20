<script>
import more from "@/components/buttons/moreDetail.vue"

export default {
  name: "CultureAndTradition",
  components: {more},
  data(){
    return {
      currentSlide: 0,
      images: [
        require('@/assets/images/img.png'),
        require('@/assets/images/img.png'),
        require('@/assets/images/img.png')
      ],
    };
  },
  methods: {
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      } else {
        this.currentSlide = this.images.length - 1;
      }
    },
    nextSlide() {
      if (this.currentSlide < this.images.length - 1) {
        this.currentSlide++;
      } else {
        this.currentSlide = 0;
      }
    },
  },
}
</script>

<template>
  <div class="main">
    <div class="main-title">
      <h2 class="font-gilroy title">
        Культура и традиция
      </h2>
      <div class="flex gap-4 items-center btn-1">
        <more  title="Узнать больше"/>
      </div>
    </div>
    <div class="slider-container mb-14">
      <img
          class="w-full h-full rounded"
          src="@/assets/images/img.png"
          alt="Культура и традиция"
      />
    </div>
    <div>
      <h3 class="font-gilroy mb-10 title">
        Филиалы “ЕПУК”
      </h3>
      <span style="color: #575F6C" class="text">
        Идея создания и разработка данного Портала принадлежит председателю узбекского этнокультурного центра города Астана Ш.Пулатову при непосредственной поддержки спонсоров и партнеров из числа ниже указанных компаний и организаций. Отельную благодарность выражаем этнокультурному центру города Алматы в лице председателя А.Исматуллаева за поддержку и выражение солидарности в воплощении данной инициативы. <br><br>
        Идея создания и разработка данного Портала принадлежит председателю узбекского этнокультурного центра города Астана Ш.Пулатову при непосредственной поддержки спонсоров и партнеров из числа ниже указанных компаний и организаций. Отельную благодарность выражаем этнокультурному центру города Алматы в лице председателя А.Исматуллаева за поддержку и выражение солидарности в воплощении данной инициативы. <br><br>
        Идея создания и разработка данного Портала принадлежит председателю узбекского этнокультурного центра города Астана Ш.Пулатову при непосредственной поддержки спонсоров и партнеров из числа ниже указанных компаний и организаций. Отельную благодарность выражаем этнокультурному центру города Алматы в лице председателя А.Исматуллаева за поддержку и выражение солидарности в воплощении данной инициативы.
      </span>
    </div>
    <div class="flex gap-4 items-center btn-2">
      <more title="Узнать больше" style="font-size: 12px"></more>
    </div>
  </div>
</template>

<style scoped>
.main-title {
  @apply w-full flex items-center justify-between;
  margin-bottom: 56px;
}
.slider-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter, .fade-leave-to  {
  opacity: 0;
}
.main {
  padding: 80px 0;
}
h2 {
  font-weight: 500;
  font-size: 40px
}
.text {
  @apply text-base leading-8;
}
.btn-2 {
  display: none;
}
@media (max-width : 992px) {
  .main {
    padding: 64px 0;
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
  .main-title {
    margin-bottom: 24px
  }
  .main{
    padding: 32px 0;
  }
  h2 {
    font-size: 24px;
  }
  .btn-1 {
    display: none;
  }
  h3 {
    font-size: 18px;
    font-weight: 400;
  }
  .text {
    font-weight: 400;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 24px;
  }
  .btn-2 {
    display: flex;
  }
}
</style>