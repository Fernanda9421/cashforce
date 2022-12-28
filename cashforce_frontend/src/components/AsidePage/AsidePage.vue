<script setup>
import MenuHeroVue from "./MenuHero.vue";
import MenuItemVue from "./MenuItem.vue";
</script>

<template>
  <aside>
    <div class="container">
      <MenuHeroVue />
      <MenuItemVue />
    </div>
  </aside>
</template>

<style scoped>
aside {
  position: absolute;
  width: 18.46vw;
  height: 100vh;
  left: 0px;
  top: 0px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  position: absolute;
  width: 18.46vw;
  height: 144px;
  left: 0px;
  top: 0px;
}
</style>
