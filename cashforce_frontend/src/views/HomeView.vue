<script setup>
import HomeHeader from "../components/HomeHeader/HomeHeader.vue";
import AsidePage from "../components/AsidePage/AsidePage.vue";
import OrdersTable from "../components/OrdersTable/OrdersTable.vue";
</script>

<template>
  <AsidePage />
  <main>
    <HomeHeader />
    <OrdersTable />
  </main>
</template>
