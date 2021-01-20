<template>
  <header v-if="usuarioLogado" class="header">
    <div class="container content">
      <ul class="header__list">
        <li class="header__list__logo">
          <router-link
            class="header__list__item__link"
            active-class="header__list__item__link--active"
            exact
            :to="{ name: 'home' }"
          >
            <h1 class="header__list__logo--h1">ByteBank</h1>
          </router-link>
        </li>
        <li class="header__list__item">
          <router-link
            class="header__list__item__link"
            active-class="header__list__item__link--active"
            exact
            :to="{ name: 'home' }"
          >
            Home
          </router-link>
        </li>
        <li>
          <router-link
            class="header__list__item__link"
            active-class="header__list__item__link--active"
            exact
            :to="{ name: 'managers' }"
          >
            Gerentes
          </router-link>
        </li>
      </ul>

      <a class="content__logout" href="#" @click.prevent="efetuarLogout"
        >Logout</a
      >
    </div>
  </header>
  <p v-else></p>
</template>

<script>
export default {
  methods: {
    efetuarLogout() {
      localStorage.removeItem("token");
      this.$router.push({ name: "login" });
    },
  },
  computed: {
    usuarioLogado() {
      const show = Boolean(localStorage.getItem("token"));
      return show;
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;

  &__logout {
    color: #fff;
    position: absolute;
    right: 0;

    &:hover {
      font-weight: bold;
    }
  }
}
.header {
  background-color: #1d3557;
  width: 100%;
  padding: 24px 0;
  margin-bottom: 32px;

  &__list {
    display: flex;
    align-items: center;

    &__logo {
      &--h1 {
        font-size: 24px;
        color: #fff;
        font-weight: bold;
        margin-right: 32px;
      }
    }

    &__item {
      margin-right: 16px;

      &__link {
        color: #fff;

        &:hover {
          font-weight: bold;
        }

        &--active {
          color: #06d6a0;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
