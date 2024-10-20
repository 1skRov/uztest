<script>
import SideBar from "@/pages/MainPage/SideBar.vue"
export default {
  name: "Section1",
  components: {SideBar},
  data() {
    return {
      page: "01",
    }
  },
  methods: {
    openModal() {
      this.$router.push('/member-association')
    },
  }
}
</script>

<template>
  <div class="w-full flex">
    <div class="hid">
      <SideBar :page="page"/>
    </div>
    <div class="tablet-space">
      <div class="tablet-space-img">
        <div class="img1">
          <img src="@/assets/images/1.png " alt="first">
        </div>
        <div class="ml-1">
          <div class="img-main">
            <img src="@/assets/images/2.png" alt="">
          </div>
          <div class="img-main">
            <img src="@/assets/images/3.png" alt="">
          </div>
          <div class="img-main">
            <img src="@/assets/images/4.png" alt="">
          </div>
        </div>
      </div>
      <div class="backdrop-blur-container">
        <div class="relative z-10">
          <h1 class="font-gilroy">
            «Ассоциация этнокультурных <br>
            объединений узбеков Республики <br>
            Казахстан «Дустлик»
          </h1>
          <p>
            Для узбекской общины в Казахстане единство <br>
            это основа нашего общего будущего и залог процветания и развития нашего народа.
          </p>
        </div>
        <div>
          <button @click="openModal">
            стать членом ассоциации
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.tablet-space {
  @apply relative w-full;

  .tablet-space-img {
    @apply w-full flex justify-end;
    padding: 69px 0;

    .img-main + .img-main {
      @apply mt-1;
    }
  }

  .backdrop-blur-container {
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    padding: 40px 80px;
    border-radius: 0 8px 8px 0;
    border-left: 1px solid #0072AB;
    overflow: hidden;
    @apply absolute top-1/2 transform -translate-y-1/2;

    h1 {
      font-size: 40px;
      line-height: 52px;
      font-weight: 500;
    }
    p {
      @apply text-sm mt-6 mb-10;
      color:#575F6C;
      line-height: 32px;
    }
    button {
      @apply uppercase text-base bg-white hover:bg-gray-50 py-4 px-6;
      border: 1px solid #CFD3DA;
      border-radius: 6px;
      font-weight: 500;
    }
  }

}

@media (max-width : 992px) {
  .hid{
    display: none;
  }
  .tablet-space {
    padding: 0 25px;

    .tablet-space-img {
      padding: 48px 0 48px 15px;
    }

    .backdrop-blur-container {
      padding: 34px 26px;
      h1 {
        font-size: 20px;
        line-height: 36px;
      }
      p {
        font-size: 10px;
        line-height: 28px;
        margin-top: 15px;
        margin-bottom: 15px;
      }
      button {
        @apply py-2 px-3;
        font-size: 12px;
      }
    }
  }
}

@media (max-width : 760px) {
  .tablet-space {
    padding: 0;
    margin-bottom: 40vh;

    .tablet-space-img {
      padding: 0;
      .img-main {
        display: none;
      }
    }
      .backdrop-blur-container {
        padding: 20px;
        border: none;
        border-radius: 8px;
        width: 85%;
        @apply absolute inset-x-0 top-1/2 transform translate-y-16 mx-auto;
        h1 {
          font-size: 24px;
          line-height: 31px;
        }
        p {
          font-size: 12px;
          line-height: 21px;
          margin-top: 15px;
          margin-bottom: 15px;
        }
        button {
          @apply py-2 px-3;
          font-size: 12px;
        }
    }
  }
}
</style>