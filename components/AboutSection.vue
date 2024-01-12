<template lang="pug">
.section__wrapper
  img.section__background(src="@/assets/icons/second-page-bg.svg")
  .section__image-wrapper
    img.section__image(src="@/assets/images/my-photo-2.jpg", alt="My photo")
  .section__text-block
    p.text-block__subtitle About Me
    p.text-block__blue-title 1 Year of Experience
    p.app-h2 In Front-End Development
    .text-block__regular-wrapper
      p.text-block__regular Hello there! I'm <span class="text-block__bold">Oleksii Yatsentiuk</span>, tech enthusiast, racing fanatic, and Vue.js developer
      p.text-block__regular My mission: pixel-perfect UIs powered by a contagious focus and a constant hunger to learn.
      p.text-block__regular Let's fuel the digital engine and build something extraordinary!
    .section__tabs
      common-app-button.section__tabs-button(:outline="activeIndex !== 0", @on-click="changeActiveTab(0)") Main Skills
      common-app-button.section__tabs-button(:outline="activeIndex !== 1", @on-click="changeActiveTab(1)") Awards
      common-app-button(:outline="activeIndex !== 2", @on-click="changeActiveTab(2)") Education
    .section__tabs-contents
      .first-tab(v-if="activeIndex === 0")
        skill-range(title="JavaScript", :percentage="65")
        skill-range(title="Vue.js", :percentage="65")
        skill-range(title="Nuxt.js", :percentage="55")
        skill-range(title="Node.js", :percentage="50")
      .tab(v-if="activeIndex === 1")
        .tab__period
          p.tab__text-title Google Cloud Skills Boost
          a.tab__text.tab__link(href="https://www.cloudskillsboost.google/public_profiles/b226223b-f83b-48e6-bc24-485050d3d706") My profile with 9 skill badges
          p.tab__date October 2023
        .tab__period
          p.tab__text-title Vue.js certification
          p.tab__text In proccess
          p.tab__date February 2024
      .tab(v-if="activeIndex === 2")
        .tab__period
          p.tab__text-title Shpp, School of programming
          p.tab__text Frontend course, 2021-2022
        .tab__period
          p.tab__text-title Vue.js internship in Onix-systems
          p.tab__text 2021-2022
        .tab__period
          p.tab__text-title Node.js internship in Onix-systems
          p.tab__text 2022
        .tab__period
          p.tab__text-title Volodymyr Vynnychenko Central Ukrainian State University
          p.tab__text Bachelor, Computer Science, 2023-2027
</template>
<script lang="ts" setup>
const activeIndex = ref<number>(0);
const changeActiveTab = (index: number) => {
  activeIndex.value = index;
};
</script>
<style scoped lang="scss">
.tab {
  padding-left: 50px;
  width: 100%;
  position: relative;
  &:before {
    position: absolute;
    content: ""; width: 5px;
    background: $gray;
    top: 0; bottom: 0; left: 15px;
  }
  @media (max-width: 440px) {
    padding-left: 10px;
  }
  &__date {
    position: absolute;
    top: 19px;
    left: -160px;
    @media (max-width: 1065px) {
      top: -5px;
      left: -20px;
    }
    @media (max-width: 600px) {
      top: -15px;
      left: -20px;
    }
    @media (max-width: 440px) {
      left: 33%;
    }
  }
  &__link {
    color: $primary;
    display: flex;
    width: 33%;
    &:after {
      content: "";
      @include icon-mask("external-link", 15px, 15px, $primary);
      margin-left: 5px;
    }
    @media (max-width: 1065px) {
      margin-left: auto;
      margin-right: auto;
    }
    @media (max-width: 900px) {
      width: 50%;
    }
  }
  &__period {
    position: relative;
    padding: 0 0 20px 15px;
    margin-bottom: 10px;
    border-radius: 5px;
    &:after {
      content: "";
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: $primary;
      top: 20%; left: -43.8px;
      position: absolute;
      @media (max-width: 440px) {
        left: -3.5px;
      }
    }
    &:before {
      position: absolute;
    }
    @media (max-width: 440px) {
      padding-left: 0;
      margin-bottom: 30px;
    }
  }
  &__text {
    @media (max-width: 440px) {
      width: 80%;
      margin-left: auto;
      margin-right: auto;
    }
    &-wrapper {
      margin-bottom: 15px;
    }
    &-title {
      @extend .app-h3;
      margin-bottom: 10px;
      @media (max-width: 440px) {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
}
.text-block {
  &__bold {
    font-weight: 700;
  }
  &__regular {
    @extend .app-body-1;
    margin-bottom: 5px;
    &-wrapper {
      margin-top: 25px;
      margin-bottom: 50px;
    }
  }
  &__blue-title {
    @extend .app-h2;
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
.section {
  &__text-block {
    @media (max-width: 1400px) {
      width: 50%;
    }
    @media (max-width: 1065px) {
      width: 70%;
    }
    @media (max-width: 700px) {
      width: 80%;
    }
    @media (max-width: 440px) {
      width: 85%;
    }
  }
  &__background {
    position: absolute;
    z-index: -1;
    left: 0;
    bottom: -10%;
    @media (max-width: 1550px) {
      width: 550px;
    }
    @media (max-width: 1065px) {
      bottom: 30%;
    }
  }
  &__tabs {
    display: flex;
    margin-bottom: 45px;
    @media (max-width: 1065px) {
      justify-content: center;
    }
    @media (max-width: 550px) {
      flex-direction: column;
    }
    &-button {
      margin-right: 25px;
      @media (max-width: 550px) {
        margin: 0 0 15px;
      }
    }
  }
  &__wrapper {
    padding: 70px 0;
    margin-top: auto;
    margin-bottom: auto;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    overflow: hidden;
    @media (max-width: 1065px) {
      flex-direction: column;
      text-align: center;
    }
    @media (max-width: 440px) {
      padding-bottom: 40px;
    }
  }
  &__image {
    height: 100%;
    width: 100%;
    object-fit: contain;
    &-wrapper {
      border-radius: 100%;
      border: 1px solid #F2F2F2;
      height: 623px;
      width: 620px;
      overflow: hidden;
      @media (max-width: 1550px) {
        height: 453px;
        width: 450px;
      }
      @media (max-width: 1065px) {
        margin-bottom: 30px;
      }
      @media (max-width: 500px) {
        height: 403px;
        width: 400px;
      }
      @media (max-width: 440px) {
        height: 353px;
        width: 350px;
      }
    }
  }
}
</style>
