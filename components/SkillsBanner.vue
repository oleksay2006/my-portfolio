<template lang="pug">
.skills-banner
  a(v-for="item in Banner.imagesList", :key="item.imageName", :href="item.redirectUrl")
    img.skills-banner__image(
      :src="getImageSrc(item.imageName)",
      alt="Nodejs logo"
    )
</template>
<script lang="ts" setup>
import { useImages } from "@/composables/useImages";

const { getImageSrc } = useImages();

class Banner {
  static imagesList = [
    {
      imageName: "nodejs-logo",
      redirectUrl: "https://nodejs.org/en"
    },
    {
      imageName: "nuxtjs-logo",
      redirectUrl: "https://nuxt.com/"
    },
    {
      imageName: "nestjs-logo",
      redirectUrl: "https://nestjs.com/"
    },
    {
      imageName: "google-logo",
      redirectUrl: "https://cloud.google.com/?hl=uk"
    },
    {
      imageName: "vuejs-logo",
      redirectUrl: "https://vuejs.org/"
    },
    {
      imageName: "astrojs-logo",
      redirectUrl: "https://astro.build/"
    }
  ];
}
</script>
<style scoped lang="scss">
.skills-banner {
  width: 100%;
  height: 180px;
  padding: 50px 70px;
  background-color: #F8F8F8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1150px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    gap: 40px;
    height: auto;
  }
  @media (max-width: 880px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 470px) {
    padding: 50px 30px;
  }
  @media (max-width: 440px) {
    gap: 50px;
  }
  &__image {
    height: 50px;
  }
}
</style>
