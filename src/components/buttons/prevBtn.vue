<script>
export default {
  name: "prevBtn",
  props:{
    fill:{
      type:String,
      default: '#0072AB',
    }
  }
}
</script>

<template>
<div class="cursor-pointer">
  <svg :fill="fill" width="50px" height="50px" viewBox="-2.4 -2.4 28.80 28.80" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00024000000000000003" transform="rotate(0)">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.048"></g>
    <g id="SVGRepo_iconCarrier">
      <path d="M1.293,12.707a1,1,0,0,1,0-1.414l5-5A1,1,0,0,1,7.707,7.707L4.414,11H22a1,1,0,0,1,0,2H4.414l3.293,3.293a1,1,0,1,1-1.414,1.414Z"></path>
    </g>
  </svg>
</div>
</template>

<style scoped>

</style>