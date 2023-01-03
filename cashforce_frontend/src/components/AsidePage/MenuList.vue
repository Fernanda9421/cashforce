<script setup>
import "../../styles/AsidePage/MenuList.css";
import { selected } from "../../stores/asideItemSelected";
</script>

<template>
  <nav class="container-menu-nav">
    <ul class="list">
      <li class="list-item">
        <div v-if="selected.isSelected" class="box-selected line-selected" />
        <div v-else />
        <a class="box-item" href="/">
          <section class="icon-item">
            <img
              alt="Cashforce logo"
              src="@/assets/vector-aside.png"
              width="24"
              height="14"
            />
          </section>
          <section class="box-text-item">
            <p class="text-item">Notas fiscais</p>
          </section>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      selected,
    };
  },
};
</script>
