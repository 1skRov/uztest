<script>
export default {
  name: "404",
}
</script>


<template>
  <div class="not-found">
    <h1>404 - Страница не найдена</h1>
    <p>Извините, страница, которую вы ищете, не существует.</p>
    <router-link to="/" style="text-decoration: underline">Вернуться на главную</router-link>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 50px;
}

.not-found h1 {
  font-size: 3rem;
  color: #0072AB;
}

.not-found p {
  font-size: 1.2rem;
}
</style>