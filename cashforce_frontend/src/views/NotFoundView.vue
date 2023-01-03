<script>
import "../styles/NotFoundPage/NotFoundPage.css";
</script>

<template>
  <div class="container-not-found">
    <img
      alt="Not found image"
      src="@/assets/not-found.jpg"
      width="400"
      height="400"
    />
    <div class="box">
      <p class="text">Página não encontrada</p>
      <button @click="$router.push({ name: 'home' })" class="goHome">
        Página Principal
      </button>
    </div>
  </div>
</template>
