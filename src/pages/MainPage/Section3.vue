<script>
import SideBar from "@/pages/MainPage/SideBar.vue";
import moreDetail from "@/components/buttons/moreDetail.vue";
export default {
  name: "Section3",
  components: {moreDetail, SideBar},
  data() {
    return {
      page: "03",
      title:"узнать больше"
    };
  }
}
</script>

<template>
<div class="w-full flex">
  <div class="hide">
    <SideBar :page="page" :is-background="true"/>
  </div>
  <div class="w-full content">
    <div class="content-title">
      <h2 class="font-gilroy">Культура и традиция</h2>
      <router-link :to="{ name: 'AboutUs', hash: '#section-2' }" class="btn">
        <moreDetail :title="title"/>
      </router-link>
    </div>
    <div class="content-body">
      <img src="@/assets/images/img.png" alt="" class="w-full h-full">
      <div class="absolute bottom-0 left-0 p-10">
        <div class="image-title">Культура и традиция</div>
        <div class="image-desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptate</div>
      </div>
    </div>
    <div class="for-mob">
      <div class="image-title font-gilroy">Культура и традиция</div>
      <div class="image-desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptate</div>
    </div>
    <router-link :to="{ name: 'AboutUs', hash: '#section-2' }" class="btn-hide">
      <moreDetail :title="title"/>
    </router-link>
  </div>
</div>
</template>

<style scoped>
.content {
  background: #F7F8FA;
  padding: 64px 0;
  .content-title {
    width: 75%;
    @apply mx-auto;
    padding-bottom: 56px;
    @apply flex items-center justify-between;
    h2 {
      font-size: 40px; line-height: 52px; font-weight: 500
    }
  }
  .content-body {
    @apply content-end relative mx-auto;
    width: 75%; border-radius: 6px;
    .image-title {
      @apply text-white font-medium text-2xl mb-4;
    }
    .image-desc {
      @apply font-normal text-base leading-8;
      color: rgba(255, 255, 255, 0.7);
    }
  }
  .btn-hide {
    display: none;
  }
}
.for-mob {
  display: none;
}
@media (max-width : 992px) {
  .hide {
    display: none;
  }
  .content {
   padding: 48px 0;
    .content-title {
      width: 90%;
      padding-bottom: 56px;
      @apply mx-auto;
      h2 {
        font-size: 24px;
      }
    }
    .content-body {
      @apply mx-auto;
      width: 90%;
      .image-title {
        @apply text-white font-medium text-2xl mb-4;
      }
      .image-desc {
        @apply font-normal leading-8;
        font-size: 14px;
      }
    }
    .btn-hide {
      display: none;
    }
  }
}
@media (max-width : 760px) {
  .hide {
    display: none;
  }
  .content {
    padding: 32px 0;
    .content-title {
      width: 90%;
      padding-bottom: 24px;
      @apply mx-auto;
      h2 {
        font-size: 24px;
      }
      .btn {
        display: none;
      }
    }

    .content-body {
      @apply mx-auto;
      width: 90%;

      .image-title {
        display: none;
      }

      .image-desc {
        display: none;
      }
    }
    .for-mob {
      width: 90%;
      display: block;
      @apply mx-auto mt-6;
      .image-title {
        @apply text-black font-medium mb-3;
        font-size: 18px;
      }

      .image-desc {
        @apply font-normal leading-5 text-gray-500;
        font-size: 12px;
      }
    }
    .btn-hide {
      display: block;
      width: 90%;
      @apply mx-auto mt-6;
    }
  }
}
</style>