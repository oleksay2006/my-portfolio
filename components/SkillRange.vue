<template lang="pug">
.skill-range
  label.skill-range__title {{ title }}
    input.skill-range__input(type="range", disabled, min="0", max="100", :value="percentage")
</template>
<script lang="ts" setup>
interface Props {
  percentage: number;
  title: string;
}
withDefaults(defineProps<Props>(), {
  percentage: 0,
  title: ""
});
</script>
<style lang="scss" scoped>
.skill-range {
  margin-bottom: 25px;
  &:last-child {
    margin-bottom: 0;
  }
  &__title {
    @extend .app-h3;
    margin-bottom: 9px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__input {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    outline: none;
    overflow: hidden;
    border-radius: 16px;
    &::-webkit-slider-runnable-track {
      height: 15px;
      background: $gray;
      border-radius: 16px;
    }

    &::-moz-range-track {
      height: 15px;
      background: $gray;
      border-radius: 16px;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      height: 15px;
      width: 15px;
      background-color: $primary;
      border-radius: 50%;
      box-shadow: -407px 0 0 400px $primary;
    }

    &::-moz-range-thumb {
      height: 15px;
      width: 15px;
      background-color: #fff;
      border-radius: 50%;
      border: 1px solid #f50;
      box-shadow: -407px 0 0 400px #f50;
    }
  }
}
</style>
