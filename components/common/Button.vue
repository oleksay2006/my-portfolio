<template lang="pug">
button.btn(
  :class="{ 'btn--outline': outline, 'btn--disabled': disabled }",
  type="button",
  @click="clickHandler"
)
  slot
</template>
<script lang="ts" setup>
interface Props {
  outline?: boolean;
  disabled?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  outline: false,
  disabled: false,
});
interface Emits {
  (e: "on-click"): void;
}
const emits = defineEmits<Emits>();

const clickHandler = (): void => {
  if (!props.disabled) {
    emits("on-click");
  }
};
</script>
<style scoped lang="scss">
.btn {
  width: 100%;
  height: 50px;
  display: inline-flex;
  justify-content: center;
  padding: 10px 24px;
  border-radius: 50px;
  transition: all 0.3s ease-out;
  cursor: pointer;
  background-color: $primary;
  border: 1px solid $primary;
  color: $white;
  font-family: "Work Sans", sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0;
  align-items: center;

  &:hover {
    background-color: #4d48e9;
    border-color: #4d48e9;
    color: $white;
  }
  &:active {
    background-color: #3d39c9;
    border-color: #3d39c9;
  }

  &--outline {
    background-color: transparent;
    color: $primary;
    border: 1px solid $primary;
    &:before {
      transition: all 0.3s ease-out;
    }

    &:hover {
      background-color: #4d48e9;
      border-color: #4d48e9;
      color: $white;
      &:before {
        background-color: $white;
      }
    }
    &:active {
      background-color: #002cbb;
      border-color: #002cbb;
    }
    &.btn--disabled {
      color: #c2c0f8;
      border: 1px solid #c2c0f8;
      &:hover,
      &:active {
        color: #c2c0f8;
        border-color: #c2c0f8;
      }
    }
  }

  &--disabled {
    cursor: not-allowed;
    background-color: #8580ff;
    border-color: #8580ff;
    color: #d8d6fd;
    &:hover,
    &:active {
      color: #d8d6fd;
      border-color: #8580ff;
      background-color: #8580ff;
    }
  }
}
</style>
