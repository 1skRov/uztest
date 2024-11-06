<script>
import NextBtn from "@/components/buttons/nextBtn.vue";
import PrevBtn from "@/components/buttons/prevBtn.vue";
import FamousPersonItem from "@/pages/FamousPersonsPage/FamousPersonItem.vue";
import SideBarText from "@/components/SideBarText.vue";
import MapList from "@/components/map.vue";

export default {
  name: "RegionsPage",
  components: {MapList, SideBarText, FamousPersonItem, PrevBtn, NextBtn},
  data() {
    return{
      title:"Регионы",
      isOpen: false,
      selectedOption: "РУКОВОДСТВО"
    }
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.isOpen = false;
    }
  }
}
</script>

<template>
<div>
  <div class="w-full relative">
    <div class="h-full absolute top-0 left-0 hide">
      <SideBarText :title="title"/>
    </div>

    <div class="map">
      <div class="map-title flex justify-between">
        <h2 class="font-gilroy">Этнокультурный центр узбеков Казахстана</h2>
      </div>
      <div class="map-img">
        <MapList></MapList>
      </div>
    </div>
    <div class="cursor-pointer map-title select">
      <div class="w-full grid grid-cols-3" style="border-radius: 8px; border: 1px solid #EBEEF0;overflow: hidden">
        <router-link
            to="/regions/guide"
            class="item"
            :class="{ active: $route.path === '/regions/guide' }">Руководство</router-link>

        <router-link
            to="/regions/information"
            class="item"
            :class="{ active: $route.path === '/regions/information' }">Информация</router-link>

        <router-link
            to="/regions/contacts-region"
            class="item"
            :class="{ active: $route.path === '/regions/contacts-region' }">Контакты</router-link>
      </div>
    </div>
    <div class="dropdown-container">
      <!-- Main Button with Selected Option -->
      <div class="dropdown-button cursor-pointer" @click="toggleDropdown">
        {{ selectedOption }}
        <span :class="{ rotated: isOpen }">▲</span>
      </div>

      <!-- Dropdown Menu -->
      <div v-if="isOpen" class="dropdown-menu">
        <router-link
            to="/regions/guide"
            class="dropdown-item"
            :class="{ active: selectedOption === 'Руководство' }"
            @click.native="selectOption('Руководство')">
          > Руководство
        </router-link>

        <router-link
            to="/regions/information"
            class="dropdown-item"
            :class="{ active: selectedOption === 'Информация' }"
            @click.native="selectOption('Информация')">
          > Информация
        </router-link>

        <router-link
            to="/regions/contacts-region"
            class="dropdown-item"
            :class="{ active: selectedOption === 'Контакты' }"
            @click.native="selectOption('Контакты')">
          > Контакты
        </router-link>
      </div>
    </div>
    <div class="map-title">
      <router-view></router-view>
    </div>
  </div>
</div>
</template>

<style scoped>
.map {
  @apply w-full;
  padding:80px 0;

  h2 {
    font-size: 40px;
    line-height: 52px;
    font-weight: 500;
  }
}
.map-title {
  @apply mx-auto;
  width:65%;
  margin-bottom: 40px;
}
.map-img {
  @apply mx-auto relative;
  width:65%;
}
.item {
  @apply py-2.5 px-6 text-base mx-auto w-full text-center;
  font-weight: 500;
}
.item + .item {
  border-left: 1px solid #EBEEF0;
}
.active {
  background-color: #0072AB;
  color: white;
}

@media (max-width : 992px) {
  .hide {
    display: none;
  }
  .map {
    padding:48px 0;
    h2 {
      font-size: 28px;
      line-height: 36px;
    }
    p{
      font-size: 12px;
    }
  }
  .map-title {
    width: 90%
  }
  .item {
    font-size: 14px;
  }
}
.dropdown-container{
  display: none;
}
@media (max-width : 760px) {
  .select {
    display: none;
  }
  .dropdown-container {
    display: block;
    position: relative;
    width: 90%;
    @apply mx-auto mb-5;
  }

  .dropdown-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    background-color: #0072AB;
    color: white;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
  }

  .dropdown-button span {
    transition: transform 0.3s;
  }

  .dropdown-button span.rotated {
    transform: rotate(180deg); /* Rotate arrow when open */
  }

  /* Dropdown menu styling */
  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #FFFFFF;
    border: 1px solid #EBEEF0;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }

  .dropdown-item {
    display: block;
    padding: 12px;
    color: #333;
    text-align: left;
    text-decoration: none;
    border-bottom: 1px solid #EBEEF0;
    transition: background-color 0.3s ease;
  }

  .dropdown-item:last-child {
    border-bottom: none;
  }

  .dropdown-item:hover {
    background-color: #f1f5f9;
  }

  .dropdown-item.active {
    background-color: #E0E3E8;
    font-weight: bold;
    color: #333;
  }
}
</style>