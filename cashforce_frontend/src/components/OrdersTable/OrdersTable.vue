<script setup>
import GenericTable from "../Table/GenericTable.vue";
import { userId } from "../../stores/userId";
import { fetchOrders } from "../../helpers/fetchOrders";
import "../../styles/OrdersTable/OrdersTable.css";
</script>

<template>
  <GenericTable
    :heads="heads"
    :orders="orders"
    :error="error"
    :hasButton="hasButton"
    :textButton="textButton"
    :handleClick="handleClick"
  />
</template>

<script>
export default {
  name: "GenericTable",
  data() {
    return {
      heads: ["NOTA FISCAL", "SACADO", "CEDENTE", "EMISSÃO", "VALOR", "STATUS"],
      orders: [],
      error: "",
      hasButton: true,
      textButton: "Dados do cedente",
      handleClick: () => this.$router.push("/provider"),
      userId,
    };
  },
  methods: {
    async getOrders() {
      this.orders = await fetchOrders(userId);
    },
    setError(axiosError) {
      if (axiosError !== "") {
        this.error = "Usuário inválido";
        console.log(this.error);
      } else {
        this.error = "";
      }
    },
  },
  async mounted() {
    try {
      await this.getOrders();
      this.setError("");
    } catch (error) {
      this.setError(error.response.data.message);
    }
  },
  components: {
    GenericTable,
  },
};
</script>
