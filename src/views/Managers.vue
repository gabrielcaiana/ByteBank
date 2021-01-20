<template>
  <div class="container">
    <h1 class="manager__title">Gerentes</h1>
    <div class="manager">
      <Manager
        v-for="(gerente, index) in gerentes"
        :key="index"
        :nome="gerente.nome"
        :agency="gerente.agencia"
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
      gerentes: [],
    };
  },
  mounted() {
    this.$http
      .get("gerentes")
      .then((response) => {
        this.gerentes = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
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
