<template lang="pug">
header.header
  img.header__logo(src="@/assets/icons/my-logo.svg", alt="Logo")
  .header__navigation(v-if="!smallScreen")
    .header__tabs
      p.header__tabs-item(@click="scrollTo('landing')") Home
      p.header__tabs-item(@click="scrollTo('about')") About Me
      p.header__tabs-item(@click="scrollTo('services')") Services
    common-app-button(@on-click="scrollTo('contactForm')") Send me an email
  .header__dropdown(v-else, :class="{ opened: isDropdownOpened }")
    img.header__dropdown-icon(
      ref="dropdownIcon",
      src="@/assets/icons/menu.svg",
      @click="toggleDropdown"
    )
    .header__dropdown-menu(ref="dropdownMenu")
      p.header__dropdown-menu_item(@click="scrollTo('landing')") Home
      p.header__dropdown-menu_item(@click="scrollTo('about')") About Me
      p.header__dropdown-menu_item(@click="scrollTo('services')") Services
      common-app-button(@on-click="scrollTo('contactForm')") Send me an email
</template>
<script lang="ts" setup>
interface Emits {
  (e: "scroll-to", element: string): void;
}
const emits = defineEmits<Emits>();
const smallScreen = ref();
const dropdownIcon = ref(null);
const dropdownMenu = ref(null);
const isDropdownOpened = ref(false);

const scrollTo = (element: string) => {
  emits("scroll-to", element);
  closeMenu();
};
const closeMenu = () => {
  isDropdownOpened.value = false;
};
const toggleDropdown = () => {
  isDropdownOpened.value = !isDropdownOpened.value;
};
onClickOutside(dropdownIcon, closeMenu, {
  ignore: [dropdownMenu]
});

onMounted(() => {
  smallScreen.value = window.matchMedia("(max-width: 980px)").matches;
});
</script>
<style scoped lang="scss">
.header {
  position: sticky;
  padding: 15px 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 550px) {
    padding-left: 35px;
    padding-right: 35px;
  }
  @media (max-width: 440px) {
    padding-left: 25px;
    padding-right: 25px;
  }
  &__dropdown {
    position: relative;
    height: 45px;
    &-menu {
      display: none;
      &_item {
        font-size: 18px;
        font-weight: 600;
        color: $text-color-2;
        text-align: center;
        border-radius: 12px;
        padding: 18px;
        cursor: pointer;
        border: none;
        background: transparent;
        width: 100%;
      }
    }
    &.opened {
      .header__dropdown-menu {
        display: block;
        position: absolute;
        padding: 10px;
        right: -12px;
        background: $white;
        top: calc(100% + 15px);
        box-shadow: 0 4px 12px 7px rgba(78, 87, 102, 0.12);
        border-radius: 12px;
        cursor: default;
        z-index: 1;
        width: 265px;
      }
    }
    &-icon {
      height: 100%;
    }
  }
  &__tabs {
    display: flex;
    align-items: center;
    &-item {
      font-size: 18px;
      font-weight: 600;
      color: $text-color-2;
      margin-right: 40px;
      cursor: pointer;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  &__logo {
    width: 175px;
  }
  &__navigation {
    width: 35%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1690px) {
      width: 45%;
    }
    @media (max-width: 1350px) {
      width: 55%;
    }
    @media (max-width: 1120px) {
      width: 65%;
    }
  }
}
</style>
