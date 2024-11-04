<script>
export default {
  name: "YouthOrganizations",
  props:{
    data:{
      type: Object,
    }
  },
  data() {
    return {
      images: [
        require('@/assets/images/img.png'),
        require('@/assets/images/img.png'),
        require('@/assets/images/img.png'),
        require('@/assets/images/img.png'),
        require('@/assets/images/img.png'),
      ]
    }
  }
}
</script>

<template>
  <div class="w-full main">
    <h2 class="font-gilroy">
      {{data.category_title}}
    </h2>
    <div class="gallery">
      <div class="row">
        <div
            class="gallery-item"
            v-for="(image, index) in images.slice(0, 2)"
            :key="index"
        >
          <div class="overlay-container">
            <img :src="image" alt="Изображение">
            <div class="overlay">
              <span class="font-gilroy text-start mb-4" style="font-size: 24px; font-weight: 500; color: white">{{ data.title }}</span>
              <span class="text-white mt-2 text-start mb-6 font-normal" style="font-size: 14px">
              {{ data.mini_desc }}
            </span>
              <div>
                <router-link to="/organization-details">
                  <button class="uppercase font-medium text-base py-4 px-6 bg-white" style="border-radius: 6px; border: 1px solid #CFD3DA">
                    {{ data.buttons_title }}</button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div
            class="gallery-item"
            v-for="(image, index) in images.slice(2, 5)"
            :key="index"
        >
          <div class="overlay-container">
            <img :src="image" alt="Изображение">
            <div class="overlay">
              <span class="font-gilroy text-start mb-4" style="font-size: 24px; font-weight: 500; color: white">{{ data.title }}</span>
              <span class="text-white mt-2 text-start mb-6 font-normal" style="font-size: 14px">
              {{ data.mini_desc }}
            </span>
              <div>
                <router-link to="/organization-details">
                  <button class="uppercase font-medium text-base py-4 px-6 bg-white" style="border-radius: 6px; border: 1px solid #CFD3DA">
                    {{ data.buttons_title }}</button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.overlay-container {
  position: relative;
  overflow: hidden;
}

.overlay-container img {
  display: block;
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 114, 171, 0.7); /* Полупрозрачный синий цвет */
  opacity: 0;
  transition: opacity 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay-text {
  color: white;
  font-size: 18px; /* Измените размер шрифта по необходимости */
  font-weight: 500; /* Измените, чтобы подстроить под ваши требования */
  text-align: center;
}

.overlay-container:hover .overlay {
  opacity: 1;
}
.gallery {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.gallery .row {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 15px;
}

.gallery .gallery-item {
  flex: 1;
  margin: 0 5px;
}

.gallery .gallery-item img {
  width: 100%;
  height: auto;
}
.main {
  padding: 0 0 80px;

  h2 {
    font-weight: 500; font-size:40px;
  }
}
@media (max-width : 992px) {
  .main {
    padding: 0 0 48px;

    h2 {
      font-size:28px
    }

    button {
      display: none;
    }
  }
}
</style>