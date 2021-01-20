<template>
  <div class="container">
    <form class="form" @submit.prevent="enviarFormulario">
      <h1 class="form__title">Cadastre-se</h1>
      <div class="form__form-group">
        <label class="form__form-group__label" for="nome">Nome</label>
        <input
          class="form__form-group__input"
          type="text"
          id="nome"
          placeholder="Digite o seu nome"
          v-model="usuario.nome"
        />
      </div>

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

      <button class="form__register" type="submit">Cadastrar</button>

      <router-link :to="{ name: 'login' }">
        <button class="form__back" type="submit">Voltar</button>
      </router-link>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      usuario: {
        nome: "",
        email: "",
        senha: "",
      },
    };
  },
  methods: {
    enviarFormulario() {
      axios
        .post("http://localhost:8000/auth/register", this.usuario)
        .then((response) => {
          console.log(response)
          this.$router.push({name: 'login'})
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  width: 100%;
  padding: 24px 0;

  &__title {
    color: #1d3557;
    margin-bottom: 20px;
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

  &__register {
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

  &__back {
    padding: 12px 16px;
    border: 1px solid #06d6a0;
    border-radius: 4px;
    color: #06d6a0;
    background: #fff;
    font-weight: bold;
    margin-top: 16px;
    margin-left: 16px;
    cursor: pointer;
    transition: all 0.3s;
  }
}
</style>
