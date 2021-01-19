<template>
  <header class="header">
    <div class="container">
      <ul class="header__list">
        <li class="header__list__item">
          <router-link
            class="header__list__item__link"
            active-class="header__list__item__link--active"
            exact
            to="/"
          >
            Home
          </router-link>
        </li>
        <li>
          <router-link
            class="header__list__item__link"
            active-class="header__list__item__link--active"
            exact
            to="/about"
          >
            About
          </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  background-color: #1d3557;
  width: 100%;
  padding: 24px 0;

  &__list {
    display: flex;

    &__item {
      margin-right: 16px;

      &__link {
        color: #fff;

        &:hover {
          font-weight: bold;
        }

        &--active {
          color: #a8dadc;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
