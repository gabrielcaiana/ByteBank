<template>
  <div class="container">
    <h1 class="manager__title">Gerentes</h1>
    <div class="manager">
      <Manager
        v-for="(manager, index) in managers"
        :key="index"
        :nome="manager.name"
        :clientesQtd="manager.clientesQtd"
      />
    </div>
  </div>
</template>

<script>
import Manager from "../components/CardManager";
export default {
  components: {
    Manager,
  },

  data: function() {
    return {
      managers: [
        { name: "Gabriel Caiana", clientesQtd: "1500" },
        { name: "Gisely Almeida", clientesQtd: "1000" },
        { name: "Polly Caiana", clientesQtd: "600" },
        { name: "Sara Caiana", clientesQtd: "2500" },
        { name: "Lupe Caiana", clientesQtd: "200" }
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.manager {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  &__title {
    margin-bottom: 32px;
  }
}
</style>
