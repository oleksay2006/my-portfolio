<template lang="pug">
.page__wrapper
  .page__image-wrapper
    img.page__image(src="@/assets/images/my-photo-2.jpeg", alt="My photo")
  .page__text-block
    p.text-block__subtitle About Me
    p.text-block__blue-title 1 Year of Experience
    p.app-h2 In Front-End Development
    .text-block__regular-wrapper
      p.text-block__regular Hello there! I'm <span class="text-block__bold">Oleksii Yatsentiuk</span>. I specialize in web design and
      p.text-block__regular development, and I'm deeply passionate and committed to my craft.
      p.text-block__regular With <span class="text-block__bold">1 years</span> of experience as a professional graphic designer
    .page__tabs
      common-button.page__tabs-button(@on-click="redirectToSmth") Main Skills
      common-button.page__tabs-button(:outline="true", @on-click="redirectToSmth") Awards
      common-button(:outline="true", @on-click="redirectToSmth") Education
</template>
<script lang="ts" setup>
const redirectToSmth = () => {

};
</script>
<style scoped lang="scss">
.text-block {
  &__bold {
    font-weight: 700;
  }
  &__regular {
    @extend .app-body-1;
    &-wrapper {
      margin-top: 25px;
      margin-bottom: 100px;
    }
  }
  &__blue-title {
    @include app-h2;
    color: $primary;
    margin-bottom: 7px;
  }
  &__subtitle {
    color: $primary;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 17px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
}
.page {
  &__tabs {
    display: flex;
    &-button {
      margin-right: 25px;
    }
  }
  &__wrapper {
    margin-top: auto;
    margin-bottom: auto;
    width: 100%;
    min-height: 100vh;
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
      height: 623px;
      width: 630px;
      overflow: hidden;
    }
  }
}
</style>
