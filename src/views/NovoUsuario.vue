<template>
  <div class="container">
    <form class="form">
      <h1 class="form__title">Cadastre-se</h1>
      <div class="form__form-group">
        <label class="form__form-group__label" for="nome">Nome</label>
        <input
          class="form__form-group__input"
          type="text"
          id="nome"
          placeholder="Digite o seu nome"
        />
      </div>

      <div class="form__form-group">
        <label class="form__form-group__label" for="email">Email</label>
        <input
          class="form__form-group__input"
          type="email"
          id="email"
          placeholder="Digite o seu email"
        />
      </div>

      <div class="form__form-group">
        <label class="form__form-group__label" for="password">Senha</label>
        <input
          class="form__form-group__input"
          type="password"
          id="password"
          placeholder="Digite sua senha"
        />
      </div>

      <button class="form__register" type="submit">Cadastrar</button>
    </form>
  </div>
</template>

<script>
export default {};
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
    transition: all .3s;

    &:hover {
      background: #00b685;
    }
  }
}
</style>
