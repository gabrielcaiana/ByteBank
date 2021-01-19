<template>
  <header class="header">
    <div class="container">
      <ul class="header__list">
       <li class="header__list__logo">
        ByteBank
       </li>
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
  margin-bottom: 32px;

  &__list {
    display: flex;
    align-items: center;

    &__logo {
     font-size: 24px;
     color: #fff;
     font-weight: bold;
     margin-right: 32px;
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
