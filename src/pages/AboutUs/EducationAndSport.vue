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
    }
  }
}
</script>

<template>
  <div class="w-full flex gap-6" style="padding: 0 0 80px">
    <div class="w-full p-10" style="border: 1px solid #EBEEF0; border-radius: 8px">
      <p class="font-gilroy title">Образование</p>
      <span class="text">
        Идея создания и разработка данного Портала принадлежит председателю узбекского этнокультурного центра города Астана Ш.Пулатову при непосредственной поддержки спонсоров и партнеров из числа ниже указанных компаний и организаций. Отельную благодарность выражаем этнокультурному центру города Алматы в лице председателя А.Исматуллаева за поддержку и выражение солидарности в воплощении данной инициативы.
        <br><br>
        Идея создания и разработка данного Портала принадлежит председателю узбекского этнокультурного центра города Астана Ш.Пулатову при непосредственной поддержки спонсоров и партнеров из числа ниже указанных компаний и организаций. Отельную благодарность выражаем этнокультурному центру города Алматы в лице председателя А.Исматуллаева за поддержку и выражение солидарности в воплощении данной инициативы.
      </span>
      <div class="mt-6">
        <router-link to="/education">
        <button class="uppercase font-medium text-base py-4 px-6 text-white" style="border-radius: 6px; border: 1px solid #CFD3DA; background-color: #0072AB">подробнее</button>
        </router-link>
      </div>
    </div>
    <div class="w-full p-10" style="border: 1px solid #EBEEF0; border-radius: 8px">
      <p class="font-gilroy title">Спорт</p>
      <span class="text">
        Идея создания и разработка данного Портала принадлежит председателю узбекского этнокультурного центра города Астана Ш.Пулатову при непосредственной поддержки спонсоров и партнеров из числа ниже указанных компаний и организаций. Отельную благодарность выражаем этнокультурному центру города Алматы в лице председателя А.Исматуллаева за поддержку и выражение солидарности в воплощении данной инициативы.
        <br><br>
        Идея создания и разработка данного Портала принадлежит председателю узбекского этнокультурного центра города Астана Ш.Пулатову при непосредственной поддержки спонсоров и партнеров из числа ниже указанных компаний и организаций. Отельную благодарность выражаем этнокультурному центру города Алматы в лице председателя А.Исматуллаева за поддержку и выражение солидарности в воплощении данной инициативы.
      </span>
      <div class="mt-6">
        <router-link to="/sport">
          <button class="uppercase font-medium text-base py-4 px-6 text-white" style="border-radius: 6px; border: 1px solid #CFD3DA; background-color: #0072AB">подробнее</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  .title {
    font-size: 28px;
  }
  .text {
    font-size: 14px;
    line-height: 28px;
  }
}
</style>