<script setup>
import { defineComponent } from "vue";
import axios from "axios";
import { userId } from "../../stores/userId";
import { convertDate } from "../../helpers/convertDate";
import { convertStatus } from "../../helpers/convertStatus";
import { convertCurrency } from "../../helpers/convertCurrency";
import "../../styles/MainTable/MainTable.css";
</script>

<template>
  <p class="error" v-if="error === 'User not found!'">Usuário não encontrado</p>
  <table v-else>
    <thead>
      <tr class="tr-head">
        <th>NOTA FISCAL</th>
        <th>SACADO</th>
        <th>CEDENTE</th>
        <th>EMISSÃO</th>
        <th>VALOR</th>
        <th>STATUS</th>
      </tr>
    </thead>
    <tbody>
      <tr class="tr-body" v-for="(order, index) in orders" :key="index">
        <td>{{ order.nNf }}</td>
        <td v-if="order.buyers && order.buyers.name">
          {{ order.buyers.name }}
        </td>
        <td v-else></td>
        <td v-if="order.providers && order.providers.name">
          {{ order.providers.name }}
        </td>
        <td v-else></td>
        <td>{{ this.convertDate(order.emissionDate) }}</td>
        <td class="color">{{ this.convertCurrency(order.value) }}</td>
        <td class="color td-status">
          {{ this.convertStatus(order.orderStatusBuyer) }}
        </td>
        <button @click="$router.push('/provider')" class="button">
          Dados do cedente
        </button>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default defineComponent({
  name: "MainTable",
  data() {
    return {
      orders: [],
      error: "",
      userId,
      convertDate,
      convertStatus,
      convertCurrency,
    };
  },
  methods: {
    async fetchOrders() {
      const ordersResponse = await axios.get(
        `http://localhost:3001/user/${userId.userId}`
      );
      this.orders = ordersResponse.data.orders;
    },
    setError(axiosError) {
      if (axiosError !== "") {
        this.error = axiosError;
      } else {
        this.error = "";
      }
    },
  },
  async mounted() {
    try {
      await this.fetchOrders();
      this.setError("");
    } catch (error) {
      this.setError(error.response.data.message);
    }
  },
});
</script>
