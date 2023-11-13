<template lang="pug">
.page__wrapper
  .page__text-block
    p.text-block__subtitle Welcome to my Portfolio
    p.app-h1 Hi I’m
    p.text-block__blue-title Oleksii Yatsentiuk
    p.app-h1 Full Stack Developer
    p.text-block__regular Collaborating with highly skilled individuals,
    p.text-block__regular our agency delivers top-quality services.
    .page__buttons
      common-button.page__buttons-first(@on-click="redirectToSmth") Hire Me!
      common-button(:outline="true", @on-click="redirectToSmth") Download CV
  .page__image-wrapper
    img.page__image(src="@/assets/images/my-photo-2.jpeg", alt="My photo")
</template>
<script lang="ts" setup>
const redirectToSmth = () => {

};
</script>
<style scoped lang="scss">
.text-block {
  &__regular {
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 35px;
    &:nth-child(5) {
      margin-top: 10px;
    }
  }
  &__blue-title {
    @include app-h1;
    color: $primary;
  }
  &__subtitle {
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 10px;
  }
}
.page {
  &__buttons {
    display: flex;
    margin-top: 50px;
    &-first {
      margin-right: 45px;
    }
  }
  &__wrapper {
    width: 100%;
    min-height: calc(100vh - 84.55px);
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  &__image {
    height: 100%;
    width: 100%;
    object-fit: contain;
    &-wrapper {
      border-radius: 100%;
      border: 1px solid #F2F2F2;
      height: 560px;
      width: 553px;
      overflow: hidden;
    }
  }
}
</style>
