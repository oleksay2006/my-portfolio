<template lang="pug">
header.header
  img.header__logo(src="@/assets/icons/my-logo.svg", alt="Logo")
  .header__navigation
    .header__tabs
      p.header__tabs-item Home
      p.header__tabs-item About Me
      p.header__tabs-item Services
      p.header__tabs-item Blog
      p.header__tabs-item Contact Me
    common-button(@on-click="scrollToForm") Letʼs chat
</template>
<script lang="ts" setup>
const scrollToForm = () => {

};
</script>
<style scoped lang="scss">
.header {
  position: sticky;
  padding: 15px 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__tabs {
    display: flex;
    align-items: center;
    &-item {
      font-size: 18px;
      font-weight: 600;
      color: $text-color-2;
      margin-right: 40px;
      cursor: pointer;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  &__logo {
    width: 175px;
  }
  &__navigation {
    width: 55%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
