<template lang="pug">
button.btn(
  :class="{ 'btn--outline': outline, 'btn--disabled': disabled, 'btn--download': download }",
  type="button",
  @click="clickHandler"
)
  slot
</template>
<script lang="ts" setup>
interface Props {
  outline?: boolean;
  download?: boolean;
  disabled?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  outline: false,
  download: false,
  disabled: false
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
  height: 50px;
  display: inline-flex;
  justify-content: center;
  padding: 17px 33px;
  border-radius: 50px;
  transition: all 0.2s ease-in-out;
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
    background-color: #005EE0;
    border-color: #005EE0;
    color: $white;
  }
  &:active {
    background-color: #0046C3;
    border-color: #0046C3;
  }

  &--download {
    &:after {
      content: "";
      @include icon-mask("download", 20px, 20px, $primary);
      margin-left: 15px;
    }
  }

  &--outline {
    background-color: transparent;
    color: $primary;
    border: 1px solid $primary;
    &:before {
      transition: all 0.2s ease-out;
    }

    &:hover {
      background-color: #005EE0;
      border-color: #005EE0;
      color: $white;
      &:before {
        background-color: $white;
      }
      &:after {
        background-color: $white;
      }
    }
    &:active {
      background-color: #0046C3;
      border-color: #0046C3;
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
    background-color: transparent;
    border-color: transparent;
    color: $primary;
    &:hover,
    &:active {
      color: $white;
      border-color: #AEBFC5;
      background-color: #AEBFC5;
    }
  }
}
</style>
