<script setup>
import { defineComponent } from "vue";
</script>

<template>
  <p class="error" v-if="error">{{ error }}</p>
  <table>
    <thead>
      <tr class="tr-head">
        <th v-for="(head, index) in heads" :key="index">{{ head }}</th>
      </tr>
    </thead>
    <tbody>
      <tr class="tr-body" v-for="(order, index) in orders" :key="index">
        <td v-for="(item, index) in order" :key="index">{{ item }}</td>
        <button v-if="hasButton" @click="handleClick">
          {{ textButton }}
        </button>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default defineComponent({
  name: "GenericTable",
  props: {
    heads: { type: Array, required: true },
    orders: { type: Array, required: true },
    error: { type: String, required: false },
    hasButton: { type: Boolean, required: true },
    textButton: { type: String, required: false },
    handleClick: { required: false },
  },
});
</script>
