<template lang="pug">
.section__wrapper
  p.section__subtitle Services
  p.section__title Exploring my Full-Stack <span class="section__title--blue">Skills</span>
  p.section__description I wear two hats, crafting beautiful front-ends with Vue.js and the logic to power them. Seamless experiences are my passion, from pixel-perfect design to flawless functionality
  .controls__wrapper(v-if="false")
    common-app-button.controls__button--left(:outline="true")
    common-app-button.controls__button--right(:outline="false")
  .carousel__wrapper
    service-card(
      v-for="service in servicesList",
      :key="service.title",
      :title="service.title",
      :description="service.description",
      :icon="service.icon"
    )
</template>
<script lang="ts" setup>
const servicesList = ref([
  {
    title: "Pixel-Perfect UIs, Powered by Logic",
    description: "Breathe life into your vision with stunning user interfaces. Whether it's a modern single-section application or a user-friendly dashboard, I'll translate your ideas into interfaces that wow",
    icon: "window"
  },
  {
    title: "Bridging the Gap Between Front and Back",
    description: "As a full-stack developer, I bridge the gap between front-end aesthetics and back-end functionality. I orchestrate the entire digital orchestra, ensuring every component harmonizes to create a flawless user experience",
    icon: "window"
  },
  {
    title: "From Idea to Execution, I'm Your Partner",
    description: "I don't just code, I collaborate. Whether you have a rough sketch or a detailed blueprint, I'm here to work alongside you, transforming your ideas into tangible digital experiences. Let's brainstorm, strategize, and build something amazing together",
    icon: "window"
  },
  {
    title: "From Request to Response: I Design the Data Dance",
    description: "I design and build robust APIs that seamlessly connect your front-end to the muscle of your application. Data flows effortlessly, thanks to my expertise in RESTful APIs, and secure authentication. We'll craft the perfect communication backbone for your project",
    icon: "window"
  }
]);
</script>
<style scoped lang="scss">
.carousel {
  &__wrapper {
    width: 90%;
    display: flex;
    justify-content: space-between;
    gap: 30px;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 1350px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 750px) {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
}

.controls {
  &__button {
    height: auto;
    border-radius: 50%;
    padding: 17px 16px;
    &--left {
      @extend .controls__button;
      margin-right: 15px;
      &:before {
        content: "";
        @include icon-mask("arrow", 25px, 20px, $primary);
        transform: rotate(180deg);
      }
    }
    &--right {
      @extend .controls__button;
      &:before {
        content: "";
        @include icon-mask("arrow", 25px, 20px, $white);
      }
    }
  }
  &__wrapper {
    width: 90%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 30px;
  }
}
.section {
  &__description {
    width: 35%;
    text-align: center;
    line-height: 25px;
    margin-bottom: 50px;
    @media (max-width: 1350px) {
      width: 50%;
    }
    @media (max-width: 900px) {
      width: 80%;
    }
  }
  &__title {
    @extend .app-h2;
    margin-bottom: 15px;
    &--blue {
      color: $primary;
    }
  }
  &__subtitle {
    @extend .app-h3;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: $primary;
    margin-bottom: 15px;
  }
  &__wrapper {
    width: 100%;
    min-height: 100vh;
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;
    @media (max-width: 800px) {
      text-align: center;
      padding: 50px 30px 70px;
    }
    @media (max-width: 440px) {
      padding-right: 15px;
      padding-left: 15px;
    }
  }
}
</style>
