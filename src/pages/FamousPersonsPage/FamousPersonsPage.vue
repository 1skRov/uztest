<script>
import EducationAndSport from "@/pages/AboutUs/EducationAndSport.vue";
import WhoWeAre from "@/pages/AboutUs/WhoWeAre.vue";
import FamousPersons from "@/pages/AboutUs/FamousPersons.vue";
import Help from "@/pages/AboutUs/Help.vue";
import OurStory from "@/pages/AboutUs/OurStory.vue";
import CultureAndTradition from "@/pages/AboutUs/CultureAndTradition.vue";
import YouthOrganizations from "@/pages/AboutUs/YouthOrganizations.vue";
import SideBarText from "@/components/SideBarText.vue";
import FamousPersonItem from "@/pages/FamousPersonsPage/FamousPersonItem.vue";
import PrevBtn from "@/components/buttons/prevBtn.vue";
import NextBtn from "@/components/buttons/nextBtn.vue";

export default {
  name: "FamousPersonsPage",
  components: {
    NextBtn,
    PrevBtn,
    FamousPersonItem,
    SideBarText,
    YouthOrganizations, CultureAndTradition, OurStory, Help, FamousPersons, WhoWeAre, EducationAndSport},
  data(){
    return {
      title: "известные личности",
    }
  }
}
</script>

<template>
  <div class="w-full relative">
    <div class="h-full absolute top-0 left-0 hide">
      <SideBarText :title="title"/>
    </div>

    <div class="content main">
      <div class="title">
        <p class="font-gilroy">Известные личности</p>
        <div class="flex gap-6 items-center">
          <prev-btn></prev-btn>
          <next-btn/>
        </div>
      </div>
      <div>
        <FamousPersonItem class="mp"/>
        <FamousPersonItem class="mp"/>
        <FamousPersonItem class="mp"/>
        <FamousPersonItem class="mp"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  width: 75%;
  @apply mx-auto;
}
.main {
  padding: 80px 0;
}
.title {
  @apply mx-auto flex justify-between;
  margin-bottom: 48px;
  p {
    font-weight: 500; font-size: 40px;
  }
}
.mp + .mp {
  @apply mt-6;
}
@media (max-width : 992px) {
  .hide {
    display: none;
  }
  .content {
    width: 90%;
  }
  .main {
    padding: 48px 0;
  }
  .title {
    margin-bottom: 28px;
    p {
      font-size: 28px;
    }
  }
}
@media (max-width : 760px) {

}
</style>