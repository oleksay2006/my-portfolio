<template lang="pug">
.skills-banner
  a(v-for="item in Banner.imagesList", :key="item.imageUrl", :href="item.redirectUrl", target="_blank")
    img.skills-banner__image(
      :src="item.imageUrl",
      :alt="item.altText"
    )
</template>
<script lang="ts" setup>
class Banner {
  static imagesList = [
    {
      imageUrl: "https://res.cloudinary.com/drlr8epdj/image/upload/f_auto,q_auto/v1/portfolio/hfbgw6hjbb2oze0mkg5c",
      redirectUrl: "https://nodejs.org/en",
      altText: "NodeJs logo"
    },
    {
      imageUrl: "https://res.cloudinary.com/drlr8epdj/image/upload/f_auto,q_auto/v1/portfolio/z6kqbmm5ipwkuvoagqvl",
      redirectUrl: "https://nuxt.com/",
      altText: "NuxtJs logo"
    },
    {
      imageUrl: "https://res.cloudinary.com/drlr8epdj/image/upload/f_auto,q_auto/v1/portfolio/amh7uoe4cs1abggwe8r7",
      redirectUrl: "https://nestjs.com/",
      altText: "NestJs logo"
    },
    {
      imageUrl: "https://res.cloudinary.com/drlr8epdj/image/upload/f_auto,q_auto/v1/portfolio/r1gjtgjf9nmw7cahyeoa",
      redirectUrl: "https://cloud.google.com/?hl=uk",
      altText: "GoogleCloud logo"
    },
    {
      imageUrl: "https://res.cloudinary.com/drlr8epdj/image/upload/f_auto,q_auto/v1/portfolio/tloiorh6jqsiafcdaipf",
      redirectUrl: "https://vuejs.org/",
      altText: "VueJs logo"
    },
    {
      imageUrl: "https://res.cloudinary.com/drlr8epdj/image/upload/f_auto,q_auto/v1/portfolio/klqrjd9mffhdaucy4zqp",
      redirectUrl: "https://astro.build/",
      altText: "AstroJs logo"
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
