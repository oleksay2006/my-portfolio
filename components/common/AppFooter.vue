<template lang="pug">
footer.footer__wrapper
  .footer__copyright-wrapper
    img.footer__logo(src="@/assets/icons/my-logo-white.svg")
    p.footer__copyright © Copyright 2024. All Rights Reserved.
  .follow-section
    p.follow-section__text FOLLOW ME:
    a.follow-section__icon-link(href="https://t.me/blood1shot" target="_blank")
      img.follow-section__icon(src="@/assets/icons/telegram.svg")
    a.follow-section__icon-link(href="mailto:oleksii.yatsentiuk@proton.me" target="_blank")
      img.follow-section__icon(src="@/assets/icons/email.svg")
    a.follow-section__icon-link(href="https://github.com/oleksay2006" target="_blank")
      img.follow-section__icon(src="@/assets/icons/github.svg")
    a.follow-section__icon-link(href="https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B9-%D1%8F%D1%86%D0%B5%D0%BD%D1%82%D1%8E%D0%BA-a5253b292/" target="_blank")
      img.follow-section__icon(src="@/assets/icons/linkedin.svg")
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.follow-section {
  display: flex;
  align-items: center;
  @media (max-width: 930px) {
    margin-bottom: 20px;
  }
  &__text {
    color: $light-blue;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    margin-right: 30px;
  }
  &__icon {
    width: 30px;
    height: 30px;
    &-link {
      height: 30px;
      margin-right: 8px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}

.footer {
  &__wrapper {
    width: 100%;
    height: 150px;
    background-color: $primary;
    padding: 50px 81px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1000px) {
      padding: 40px 50px;
    }
    @media (max-width: 930px) {
      flex-direction: column-reverse;
      height: auto;
    }
    @media (max-width: 440px) {
      padding-right: 20px;
      padding-left: 20px;
    }
  }
  &__logo {
    margin-right: 30px;
  }
  &__copyright {
    color: $light-blue;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    &-wrapper {
      display: flex;
      align-items: center;
    }
  }
}
</style>
