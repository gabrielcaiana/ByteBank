<template>
  <div class="container">
    <form class="form" @submit.prevent="efetuarLogin">
      <h1 class="form__title">Faça o login</h1>
      <p class="form__error">{{ usuario.message }}</p>

      <div class="form__form-group">
        <label class="form__form-group__label" for="email">Email</label>
        <input
          class="form__form-group__input"
          type="email"
          id="email"
          placeholder="Digite o seu email"
          v-model="usuario.email"
        />
      </div>

      <div class="form__form-group">
        <label class="form__form-group__label" for="password">Senha</label>
        <input
          class="form__form-group__input"
          type="password"
          id="password"
          placeholder="Digite sua senha"
          v-model="usuario.senha"
        />
      </div>

      <button class="form__login" type="submit">Entrar</button>

      <router-link :to="{ name: 'novo-usuario' }">
        <p class="form__register">
          Ainda não tem uma conta? <b>cadastre-se agora mesmo!</b>
        </p>
      </router-link>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: {
        email: "",
        senha: "",
        message: "",
      },
    };
  },
  methods: {
    efetuarLogin() {
      this.$http
        .post("auth/login", this.usuario)
        .then((response) => {
          this.$store.commit("defineUserLogin", {
            token: response.data.access_token,
            usuario: response.data.user,
          });
          this.$router.push({ name: "home" });
        })
        .catch((err) => {
          this.usuario.message = err.response.data.message;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  width: 100%;
  padding: 24px 0;
  margin-top: 25%;

  &__title {
    color: #1d3557;
    margin-bottom: 20px;
  }

  &__error {
    color: crimson;
    font-weight: bold;
  }

  &__form-group {
    display: flex;
    flex-direction: column;
    margin: 16px 0;

    &__label {
      color: #494f57;
      font-size: 16px;
      padding: 8px 0;
      font-weight: 400;
    }

    &__input {
      padding: 12px 16px;
      border: 1px solid #a3a3a3;
      border-radius: 4px;
    }
  }

  &__login {
    width: 100px;
    padding: 12px 16px;
    border: none;
    border-radius: 4px;
    background: #06d6a0;
    color: #fff;
    font-weight: bold;
    margin-top: 16px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background: #00b685;
    }
  }

  &__register {
    font-size: 16px;
    margin-top: 32px;
    color: #1d3557;
  }
}
</style>
