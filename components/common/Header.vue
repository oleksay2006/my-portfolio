<template lang="pug">
header.header
  img.header__logo(src="@/assets/icons/my-logo.svg", alt="Logo")
  .header__navigation
    .header__tabs
    common-button(@on-click="scrollToForm") Letʼs chat
</template>
<script lang="ts" setup>
const scrollToForm = () => {
  return;
};
</script>
<style scoped lang="scss">
.header {
  padding: 15px 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__logo {
    width: 175px;
  }
  &__navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>