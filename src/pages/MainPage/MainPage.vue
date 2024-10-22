<script>
import Section1 from "@/pages/MainPage/Section1.vue";
import Section2 from "@/pages/MainPage/Section2.vue";
import Section3 from "@/pages/MainPage/Section3.vue";
import Section4 from "@/pages/MainPage/Section4.vue";
import Section5 from "@/pages/MainPage/Section5.vue";
import Section6 from "@/pages/MainPage/Section6.vue";
export default {
  name: "MainPage",
  components: {
    Section6,
    Section5,
    Section4,
    Section3,
    Section2,
    Section1
  }
}
</script>

<template>
  <div class="w-full">
    <Section1 />
    <div class="tablet">
      <Section3 />
    </div>
    <Section2 />
    <div class="mobile">
      <Section3 />
    </div>
    <Section4/>
    <Section5 />
    <Section6 />
  </div>
</template>

<style scoped>
.tablet {
  display: none;
}
@media (max-width : 760px) {
  .mobile {
    display: none;
  }
  .tablet {
    display: flex;
  }
}
</style>