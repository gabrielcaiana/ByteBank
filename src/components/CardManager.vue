<template>
  <div class="cardManager">
    <p class="cardManager__name">{{ nome }}</p>
    <span class="cardManager__clients">{{ agency }}</span>
  </div>
</template>

<script>
export default {
  props: {
    nome: {
      type: String,
      required: true,
    },
    agency: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.cardManager {
  background: #fff;
  border-radius: 2px;
  height: 100px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 16px 32px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  transition: all 5ms;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  &__name {
    font-size: 20px;
    padding-bottom: 4px;
    color: #1d3557;
    font-weight: 400;
  }

  &__clients {
    font-size: 16px;
    color: #494f57;
  }
}
</style>
