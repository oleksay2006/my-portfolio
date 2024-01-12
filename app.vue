<template lang="pug">
.main-layout
  common-app-header(@scroll-to="scrollTo")
  main.main-content
    .wrapper
      landing-section(ref="landing")
      skills-banner
      about-section(ref="about")
      services-section(ref="services")
      contact-section(ref="contactForm")
      common-app-footer
</template>
<script lang="ts" setup>
const landing = ref<HTMLElement | null>(null);
const about = ref<HTMLElement | null>(null);
const services = ref<HTMLElement | null>(null);
const contactForm = ref<HTMLElement | null>(null);

const scrollTo = (element: string) => {
  switch (element) {
  case "landing":
    landing.value?.$el.scrollIntoView({ behavior: "smooth" });
    break;
  case "about":
    about.value?.$el.scrollIntoView({ behavior: "smooth" });
    break;
  case "services":
    services.value?.$el.scrollIntoView({ behavior: "smooth" });
    break;
  case "contactForm":
    contactForm.value?.$el.scrollIntoView({ behavior: "smooth" });
    break;
  }
};
</script>
<style scoped lang="scss"></style>
