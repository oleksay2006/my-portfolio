<template lang="pug">
section.section__wrapper
  .section__text-block
    p.text-block__subtitle Welcome to my Portfolio
    p.app-h1 Hi, I’m
    p.text-block__blue-title Oleksii Yatsentiuk
    p.app-h1 Full Stack Developer
    p.text-block__regular Full-stack solutions, pixel-perfect results
    p.text-block__regular Building beautiful websites, powered by invisible magic
    .section__buttons
      common-app-button.section__buttons-first(@on-click="redirectToTelegram") Get in touch
      common-app-button(:outline="true", :download="true", @on-click="downloadPdf('/mycv.pdf')") Download CV
  .section__image-wrapper
    nuxt-img.section__image(preload, format="webp", src="my-photo.jpg", alt="My photo")
</template>
<script lang="ts" setup>
import useDownloadPdf from "@/composables/useDownloadPdf";

const { downloadPdf } = useDownloadPdf();
const redirectToTelegram = () => {
  window.location.href = "https://t.me/blood1shot";
};
</script>
<style scoped lang="scss">
.app-h1 {
  @media (max-width: 650px) {
    font-size: 50px;
    line-height: 65px;
  }
  @media (max-width: 550px) {
    font-size: 45px;
    line-height: 50px;
  }
}
.text-block {
  &__regular {
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 35px;
    &:nth-child(5) {
      margin-top: 10px;
    }
    @media (max-width: 650px) {
      font-size: 20px;
      line-height: 30px;
    }
    @media (max-width: 550px) {
      font-size: 20px;
      line-height: 20px;
      &:nth-child(5) {
        margin-top: 25px;
      }
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
.section {
  &__text-block {
    @media (max-width: 1280px) {
      text-align: center;
    }
  }
  &__buttons {
    display: flex;
    margin-top: 50px;
    @media (max-width: 1280px) {
      justify-content: center;
      margin-bottom: 60px;
    }
    @media (max-width: 550px) {
      margin: 30px 0;
    }
    @media (max-width: 500px) {
      flex-direction: column;
    }
    &-first {
      margin-right: 45px;
      @media (max-width: 500px) {
        margin-right: 0;
        margin-bottom: 15px;
      }
    }
  }
  &__wrapper {
    width: 100%;
    min-height: calc(100vh - 84.55px);
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 1280px) {
      flex-direction: column-reverse;
    }
    @media (max-width: 500px) {
      padding: 0 30px;
    }
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
      @media (max-width: 1280px) {
        margin-top: 30px;
        margin-bottom: 15px;
      }
      @media (max-width: 750px) {
        height: 400px;
        width: 393px;
      }
      @media (max-width: 440px) {
        height: 350px;
        width: 343px;
      }
    }
  }
}
</style>
