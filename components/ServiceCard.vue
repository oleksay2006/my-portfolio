<template lang="pug">
.card__wrapper
  p.card__title {{ title }}
  p.card__description {{ description }}
</template>
<script lang="ts" setup>
interface Props {
  title: string;
  description: string;
  icon?: string;
}
withDefaults(defineProps<Props>(), {
  title: "",
  description: "",
  icon: ""
});
</script>
<style lang="scss" scoped>
.card {
  &__title {
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
    margin-bottom: 10px;
    transition: all .2s ease-in-out;
  }
  &__description {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    transition: all .2s ease-in-out;
    color: #333;
  }
  &__icon {
    transition: all .2s ease-in-out;
    &--frontend {
      @extend .card__icon;
      @include icon-mask("window", 100px, 100px, $primary);
    }
  }
  &__wrapper {
    width: 25%;
    padding: 30px;
    border-radius: 10px;
    border: 1px solid #DDD;
    background: $white;
    transition: all .2s ease-in-out;
    @media (max-width: 1350px) {
      width: 100%;
    }
    &:hover {
      background-color: $primary;
      border-color: $primary;
      color: $white;
      .card {
        &__icon {
          background-color: $white;
        }
        &__title {
          color: $white;
        }
        &__description {
          color: $white;
        }
      }
    }
  }
}
</style>
