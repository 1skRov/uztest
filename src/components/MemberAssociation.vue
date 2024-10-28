<script>
import MainHeader from "@/components/Header.vue";
import FooterPage from "@/components/Footer.vue";
import MainPage from "@/pages/MainPage/MainPage.vue";


// const authStore = useAuthStore();
export default {
  name: "MemberAssociation",
  components: {MainPage, FooterPage, MainHeader},
  data() {
    return {
      formData: {
        name: '',
        date_birth: '',
        iin: '',
        phone: '',
      },
    };
  },
  methods: {
    closeModal() {
      this.$router.push('/')
    },
    send(){
      this.closeModal();
    }
  },
}
</script>


<template>
  <div class="flex flex-col h-screen w-full">
    <header class="w-full">
      <main-header/>
    </header>
    <div class="w-full flex-grow overflow-auto">
      <div class="fixed top-0 left-0 bg-black w-full h-full opacity-70" style="z-index: 20" @click="closeModal"></div>
      <div class="modal">
        <div class="w-full flex justify-end">
          <button @click="closeModal" class="text-base uppercase" style="color:#0072AB">x</button>
        </div>
        <h2 class="font-gilroy">
          Хотите стать членом нашей Ассоциации?
        </h2>
        <p>
          Заполните все формы ниже, и отправьте заявку.
        </p>
        <div class="mt-8">
          <form class="form">
            <!-- ФИО -->
            <div>
              <label class="label" for="name">ВАШЕ ФИО:</label>
              <input type="text" id="name" v-model="formData.name" required>
            </div>

            <!-- Дата Рождения -->
            <div>
              <label class="label" for="date_birth">ДАТА РОЖДЕНИЯ:</label>
              <input type="date" id="date_birth" class="w-full border border-gray-300 rounded p-2 bg-white" v-model="formData.date_birth" required>
            </div>

            <!-- ИИН -->
            <div>
              <label class="label" for="iin">ВАШ ИИН:</label>
              <input type="text" id="iin" class="w-full border border-gray-300 rounded p-2 bg-white" v-model="formData.iin" required>
            </div>

            <!-- Телефон -->
            <div>
              <label class="label" for="phone">ВАШ ТЕЛЕФОН НОМЕР:</label>
              <input type="text" id="phone" class="w-full border border-gray-300 rounded p-2 bg-white" v-model="formData.phone" required>
            </div>

            <!-- Кнопка отправки -->
          </form>
          <div class="content-body relative">
            <div class="absolute top-0 left-0">
              <p>Sed ut perspiciatis unde omnis iste natus error sit <br> voluptatem accusantium doloremque laudantium,<br> totam rem aperiam.</p>
            </div>
            <img src="@/assets/images/map-removebg.png" alt="" class="w-full h-full">
          </div>
          <div class="col-span-2">
            <button class="btn" type="submit" @click="send">Отправить</button>
          </div>
        </div>
      </div>
    </div>
<!--    <footer class="w-full">-->
<!--      <FooterPage></FooterPage>-->
<!--    </footer>-->
  </div>
</template>

<style scoped>
.modal {
  @apply bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6;
  z-index: 30;
  border-radius: 8px;
  overflow-y: auto;
  max-height: 80%;
}
h2 {
  font-weight: 500; font-size: 40px; line-height: 52px;
}
p {
  color:#575F6C;
  @apply text-base leading-8;
}
.form {
  @apply grid grid-cols-1 md:grid-cols-2 gap-4;
  .label {
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: 2px;
  }
  input {
    @apply w-full border border-gray-300 rounded p-2 bg-white;
  }
}
.btn {
  @apply uppercase font-medium text-base py-4 px-6 text-white mt-4;
  border-radius: 6px;
  border: 1px solid #CFD3DA;
  background-color: #0072AB;
}
.content-body {
  @apply  mx-auto;
  p {
    @apply text-sm;
    color: #575F6C;

  }
}
@media (max-width : 992px) {

}
@media (max-width : 760px) {
  .modal {
    @apply p-4;
    max-height: 90%;
  }
  h2 {
    font-size: 20px;
    line-height: 24px
  }
  p {
    font-size: 12px;
    line-height: 14px
  }
  .form {
    @apply flex flex-col gap-4;
    .label {
      font-size: 12px;
      letter-spacing: 1px;
    }
    input {
      @apply px-2 py-0.5;
    }
  }
  .content-body {
    display: none;
  }
  .btn {
    @apply py-1 px-2;
    font-size: 12px;
  }
}
</style>