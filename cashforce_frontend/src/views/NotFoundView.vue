<script>
import "../styles/NotFoundPage/NotFoundPage.css";
</script>

<template>
  <main class="container-not-found">
    <figure>
      <img
        alt="Not found image"
        src="@/assets/not-found.jpg"
        width="400"
        height="400"
      />
    </figure>
    <section class="box">
      <h1 class="text">Página não encontrada</h1>
      <button @click="$router.push({ name: 'home' })" class="goHome">
        Página Principal
      </button>
    </section>
  </main>
</template>
