<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="system-header">
      <div class="box-header">
        <div class="line-header"></div>
      </div>
    </div>
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

.system-header {
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  border-radius: 0px;
}

.box-header {
  position: absolute;
  width: 81.54vw;
  height: 64px;
  left: 0px;
  top: 0px;
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
