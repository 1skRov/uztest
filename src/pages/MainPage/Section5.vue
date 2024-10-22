<script>
import SideBar from "@/pages/MainPage/SideBar.vue";
import moreDetail from "@/components/buttons/moreDetail.vue";
export default {
  name: "Section5",
  components: {moreDetail, SideBar},
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
      <div style="" class="content-title">
        <div>
          <h2 class="font-gilroy">Этнокультурный центр узбеков Казахстана</h2>
          <p>Sed ut perspiciatis unde omnis iste natus error sit <br> voluptatem accusantium doloremque laudantium,<br> totam rem aperiam.</p>
        </div>
        <router-link to="/regions/guide" class="btn">
          <moreDetail :title="title"/>
        </router-link>
      </div>
      <div class="content-body relative">
        <div class="absolute top-0 left-0">
          <p>Sed ut perspiciatis unde omnis iste natus error sit <br> voluptatem accusantium doloremque laudantium,<br> totam rem aperiam.</p>
        </div>
        <img src="@/assets/images/map-removebg.png" alt="" class="w-full h-full" style="fill: none">
      </div>
      <router-link to="/regions/guide" class="btn-has">
        <moreDetail :title="title"/>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.content {
  @apply mx-auto;
  padding: 80px 0;
  width: 75%;

  .content-title {
    @apply flex justify-between items-center w-full;
    padding-bottom: 40px;

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
    @apply w-full;
    p {
      @apply text-sm;
      color: #575F6C;
    }
  }
}
@media (max-width : 992px) {
  .hide {
    display: none;
  }
  .content {
    @apply mx-auto;
    padding: 48px 0;
    width: 90%;

    .content-title {
      padding-bottom: 32px;

      h2 {
        font-size: 24px;
      }
      p {
        display: none;
      }
    }
    .content-body {
      @apply w-full;
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