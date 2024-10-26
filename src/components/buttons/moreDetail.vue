<script>
export default {
  props:{
    title:{
      type: String,
      required: true
    }
  },
  name: "mareDetail",
}
</script>

<template>
  <div>
    <button class="uppercase text-base flex items-center gap-6" style="color: #0072AB">
      <div class="title">{{ title }}</div>
      <div class="flex items-center">
        <svg fill="#0072AB" height="50px" width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 470 470" xml:space="preserve">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <path fill="#CFD3DA" d="M297.5,62.5c-32.723,0-64.571,9.208-92.103,26.628c-26.773,16.94-48.366,40.868-62.445,69.196l26.865,13.352 C194.089,122.838,243.015,92.5,297.5,92.5C376.075,92.5,440,156.425,440,235s-63.925,142.5-142.5,142.5 c-54.485,0-103.411-30.338-127.683-79.176l-26.865,13.352c14.079,28.329,35.672,52.256,62.445,69.196 c27.532,17.42,59.38,26.628,92.103,26.628c95.117,0,172.5-77.383,172.5-172.5S392.617,62.5,297.5,62.5z"></path>
              <polygon points="226.894,284.394 248.106,305.606 318.713,235 248.106,164.394 226.894,185.606 261.287,220 0,220 0,250 261.287,250 "></polygon>
            </g>
          </g>
        </svg>
      </div>
    </button>
  </div>
</template>

<style scoped>
.title {
  font-weight: 500; letter-spacing: 1.5px
}
@media (max-width : 760px) {
  .title {
    font-size: 12px;
  }
  svg {
    width: 32px;
    height: 32px;
  }
}
@media (max-width : 992px) {
  .title {
    font-size: 14px;
  }
  svg {
    width: 38px;
    height: 38px;
  }
}
</style>