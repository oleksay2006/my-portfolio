<template lang="pug">
.toaster
  .toaster__icon-wrapper
    .toaster__icon(
      :class="{ 'toaster__icon--success': toastProps?.type === 'success', 'toaster__icon--warning': toastProps?.type === 'warning', 'toaster__icon--error': toastProps?.type === 'error', 'toaster__icon--info': toastProps?.type === 'info' }"
    )
  .toaster__content
    p.toaster__title {{ toastProps?.data.title }}
    p.toaster__description {{ toastProps?.data.description }}
  .toaster__close-button(
    @click="($event) => { closeToast && closeToast($event); }"
  )
</template>
<script setup lang="ts">
import type { ToastOptions } from "vue3-toastify";
import type { PropType } from "vue";

interface Props {
  closeToast: PropType<(e?: MouseEvent) => void>;
  toastProps: PropType<ToastOptions>;
}
defineProps<Props>();
</script>
<style lang="scss">
@import "@/assets/scss/typography";

.toaster {
  display: flex;
  align-items: center;
  &__close-button {
    cursor: pointer;
    position: absolute;
    top: 26px;
    right: 28px;
    @include icon-mask("cross", 20px, 20px, $black);
  }
  &__icon {
    &-wrapper {
      margin-right: 16px;
      width: 44px;
      height: 44px;
      padding: 10px;
      border-radius: 12px;
      box-shadow: 0 2px 10px 0 rgba(124, 141, 181, 0.12);
    }
    &--success {
      @include icon-mask("toast-checkmark", 24px, 24px, $success);
    }
    &--warning {
      @include icon-mask("info", 24px, 24px, $warning);
      transform: rotate(180deg);
    }
    &--error {
      @include icon-mask("toast-cross", 24px, 24px, $error);
    }
    &--info {
      @include icon-mask("info", 24px, 24px, $primary);
    }
  }
  &__title {
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0;
    font-weight: 600;
    color: $black;
    margin-bottom: 5px;
  }
  &__description {
    font-size: 15px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0;
    color: $text-color;
  }
}

.Toastify {
  --toastify-toast-width: 460px;
  --toastify-color-success: #00cc99;
  --toastify-color-warning: #f2c94c;
  --toastify-color-error: #eb5757;
  --toastify-color-info: #02a0fc;
  &__toast {
    cursor: auto !important;
    border-radius: 6.306px 11.465px 11.465px 6.306px !important;
    border: 1px solid;
    border-left: 6px solid;
    min-height: 100px;
    padding: 21px 28px 23px 32px !important;
    &-container {
      width: var(--toastify-toast-width);
    }
    &-body {
      margin: 0 !important;
      padding: 0 !important;
    }
    &--success {
      border-color: var(--toastify-color-success);
    }
    &--warning {
      border-color: var(--toastify-color-warning);
    }
    &--error {
      border-color: var(--toastify-color-error);
    }
    &--info {
      border-color: var(--toastify-color-info);
    }
  }
}
</style>
