<template>
  <div class="container home">
    <h1 class="home__title">Seja bem vindo ao ByteBank</h1>
    <a class="home__btn-logout" @click.prevent="efetuarLogout" href="#">Logout</a>
  </div>
</template>

<script>
import { logoutMixin } from "@/mixins";
export default {
  mixins: [logoutMixin],
};
</script>

<style lang="scss" scoped>
.home {
  &__title {
    margin-bottom: 32px;
  }
  &__btn-logout {
    width: 100px;
    padding: 12px 16px;
    border: 1px solid #e7563c;
    border-radius: 4px;
    background: #fff;
    color: #e7563c;
    font-weight: bold;
    margin-top: 16px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background: #e7563c;
      color: #fff;
    }
  }
}
</style>
