<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <header>
    <section class="line-header" />
  </header>

  <RouterView />
</template>

<style scoped>
header {
  position: absolute;
  width: 81.54vw;
  height: 64px;
  left: 18.46vw;
  top: 0px;
  background-color: #ffffff;
}

.line-header {
  position: absolute;
  left: 0%;
  right: 0%;
  top: 100%;
  bottom: 0%;
  border: 1px solid #dfe2eb;
}
</style>
