<script>
import SideBar from "@/pages/MainPage/SideBar.vue";
import moreDetail from "@/components/buttons/moreDetail.vue";
export default {
  name: "Section5",
  components: {moreDetail, SideBar},
  props:{
    data:{
      type: Object
    }
  },
  data() {
    return {
      page: "05",
      title:"узнать больше",
    }
  }
}
</script>

<template>
  <div class="w-full flex">
    <div class="hide">
      <SideBar :page="page"/>
    </div>
    <div class="content">
      <div class="content-title">
        <div>
          <h2 class="font-gilroy">{{ data.category_title }}</h2>
          <p>{{ data.full_desc }}</p>
        </div>
        <router-link to="/regions/guide" class="btn">
          <moreDetail :title="data.buttons_title"/>
        </router-link>
      </div>
      <div class="content-body relative">
        <div class="absolute top-0 left-0">
          <p>{{ data.full_desc }}</p>
        </div>
        <img src="@/assets/images/map-removebg.png" alt="" class="w-full h-full">
      </div>
      <router-link to="/regions/guide" class="btn-has">
        <moreDetail :title="data.buttons_title"/>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.content {
  padding: 80px 0;

  .content-title {
    @apply flex justify-between items-center mx-auto;
    padding-bottom: 40px;
    width: 75%;

    h2 {
      font-size: 40px;
      line-height: 52px;
      font-weight: 500;
    }
    p {
      display: none;
    }
  }
  .content-body {
    width: 75%;
    @apply  mx-auto;
    p {
      @apply text-sm;
      color: #575F6C;

    }
  }
  .btn-has {
    display: none;
  }
}
@media (max-width : 992px) {
  .hide {
    display: none;
  }
  .content {
    padding: 48px 0;

    .content-title {
      padding-bottom: 32px;
      @apply mx-auto;
      width: 90%;

      h2 {
        font-size: 24px;
      }
      p {
        display: none;
      }
    }
    .content-body {
      @apply w-full mx-auto;
      width: 90%;
      p {
        font-size: 12px;
      }
    }
  }
}
@media (max-width : 760px) {
  .content {
    @apply mx-auto;
    padding: 32px 0;
    width: 90%;

    .content-title {
      padding-bottom: 12px;

      h2 {
        font-size: 22px;
        line-height: 26px;
        padding-bottom: 12px;
      }
      p {
        display: block;
        font-size: 12px;
        color: #575F6C;
      }
      .btn {
        display: none;
      }
    }
    .content-body {
      @apply w-full;
      p {
        display: none;
      }
    }
    .btn-has {
      margin-top: 32px;
      display: block;
    }
  }
}
</style>