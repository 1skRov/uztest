<script>
import MainHeader from "@/components/Header.vue";
import FooterPage from "@/components/Footer.vue";
import MainPage from "@/pages/MainPage/MainPage.vue";
import axiosInstance from "@/assets/axiosConfig";
import { useAuthStore } from '@/store/auth.js'

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
    async login(){
      try {
        await this.useAuthStore.login(this.formData.name, this.formData.iin, this.formData.date_birth, this.formData.phone)
        if (!this.useAuthStore.isAuthenticated) {
          this.error = 'Login failed. Please check your credentials.'
        }
      } catch (error) {
        console.error('Login error:', error)
        this.error = 'An error occurred during login.'
      }
    },
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
      <div class="bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6" style="z-index: 30; border-radius: 8px; overflow: hidden">
        <div class="w-full flex justify-end">
          <button @click="closeModal" class="text-base uppercase" style="color:#0072AB">x</button>
        </div>
        <h2 class="font-gilroy" style="font-weight: 500; font-size: 40px; line-height: 52px">
          Хотите стать членом нашей Ассоциации?
        </h2>
        <p style="color:#575F6C" class="text-base leading-8">
          Заполните все формы ниже, и отправьте заявку.
        </p>
        <div class="mt-8">
          <form class="grid grid-cols-1 md:grid-cols-2 gap-4" @submit.prevent="login">
            <!-- ФИО -->
            <div>
              <label class="label" for="name">ВАШЕ ФИО:</label>
              <input type="text" id="name" class="w-full border border-gray-300 rounded p-2 bg-white" v-model="formData.name" required>
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
            <div class="col-span-2">
              <button type="submit" class="btn btn-primary" @click="login">Отправить</button>
            </div>
          </form>

        </div>
      </div>
    </div>
    <footer class="w-full">
      <FooterPage></FooterPage>
    </footer>
  </div>
</template>

<style scoped>
.label {
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 2px;
}
</style>