<template lang="pug">
section.section__wrapper
  nuxt-img.section__bg-icon--small(src="small-circle.svg", alt="Small circle")
  nuxt-img.section__bg-icon--large(src="large-circle.svg", alt="Large circle")
  p.section__subtitle Contact me
  p.section__title Request Free Consultancy
  .contacts__wrapper
    .contacts
      .contacts__first-block
        .contacts__subtitle My phone number
        .contacts__title (+38) 066 501 0699
      .contacts__second-block
        p.contacts__text <span class="contacts__text--bold">Email:</span> oleksii.yatsentiuk@proton.me
        p.contacts__text <span class="contacts__text--bold">Work Hour:</span> Mon - Sat: 10:00 - 19:00
    .contacts__form
      .form__first-row
        common-app-input(v-model="form.name", placeholder="Name*")
        common-app-input(
          v-model="form.email",
          placeholder="Email Address*",
          :error-message="v$.email.$errors[0]?.$message"
        )
      common-app-input.full-width(v-model="form.messageTitle", placeholder="Request title*")
      common-app-input.full-width.contacts__textarea(
        v-model="form.messageDescription",
        :textarea="true",
        placeholder="Request message*"
      )
  .contacts__wrapper
    .contacts__form
    .contacts__form
      common-app-button.contacts__button(
        :class="{ 'contacts__button--disabled': buttonDisabled || loading }",
        :disabled="buttonDisabled || loading",
        @on-click="sendEmail"
      ) Request Now
</template>
<script lang="ts" setup>
import { type Content, toast, type ToastOptions } from "vue3-toastify";
import { send } from "@emailjs/browser";
import { useVuelidate } from "@vuelidate/core";
import { email, helpers } from "@vuelidate/validators";
import AppToaster from "@/components/common/AppToaster.vue";

const form = reactive({
  name: "",
  email: "",
  messageTitle: "",
  messageDescription: ""
});
const loading = ref<boolean>(false);

const rules = computed(() => ({
  email: {
    email: helpers.withMessage("This field should be an email", email)
  }
}));

const v$ = useVuelidate(rules, form);

const sendEmail = async () => {
  await v$.value.$validate();
  if (!v$.value.$invalid) {
    loading.value = true;
    try {
      await send("service_01k7nq8", "template_rfyzc6i", form, import.meta.env.VITE_EMAILJS_KEY);

      toast(AppToaster as Content, {
        type: toast.TYPE.INFO,
        data: {
          title: "Email has been sent 🙂",
          description: "Thanks for reaching out!"
        }
      } as ToastOptions);
    } catch (error) {
      toast(AppToaster as Content, {
        type: toast.TYPE.ERROR,
        data: {
          title: "Something went wrong 😢",
          description: error
        }
      } as ToastOptions);
    }
    loading.value = false;
  }
};
const buttonDisabled = computed<boolean>(() => {
  return Object.values(form).includes("");
});
</script>
<style lang="scss" scoped>
.full-width {
  width: 100%;
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
}

.form {
  &__first-row {
    display: flex;
    justify-content: space-between;
    gap: 15px;
    margin-bottom: 15px;
    .input__wrapper {
      width: 50%;
    }
  }
}

.contacts {
  background-color: $white;
  padding: 30px;
  border-radius: 15px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 900px) {
    width: 100%;
  }
  &__first-block {
    @media (max-width: 900px) {
      margin-bottom: 30px;
    }
  }
  &__textarea {
    height: 142px;
  }
  &__button {
    margin-top: 15px;
    color: $white;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    background: #00489A;
    float: left;
    &:hover {
      background-color: #003C82;
    }
    &:active {
      background-color: #002F68;
    }
    @media (max-width: 440px) {
      margin-top: 0;
    }
    &--disabled {
      cursor: not-allowed;
      background-color: #AEBFC5;
      border-color: #AEBFC5;
      color: $white;
      &:hover,
      &:active {
        color: $white;
        border-color: #AEBFC5;
        background-color: #AEBFC5;
      }
    }
  }
  &__form {
    width: 50%;
    @media (max-width: 900px) {
      width: 100%;
    }
  }
  &__text {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    &--bold {
      font-weight: 600;
    }
  }
  &__title {
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
  }
  &__subtitle {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
  }
  &__wrapper {
    width: 70%;
    display: flex;
    justify-content: space-between;
    gap: 30px;
    @media (max-width: 900px) {
      flex-direction: column;
    }
    @media (max-width: 1000px) {
      width: 80%;
    }
    @media (max-width: 550px) {
      width: 85%;
    }
  }
}

.section {
  &__bg-icon {
    &--large {
      width: 530px;
      z-index: -1;
      position: absolute;
      right: 0;
      top: 10%;
      @media (max-width: 800px) {
        width: 400px;
        top: 20%;
      }
      @media (max-width: 550px) {
        width: 350px;
        top: 30%;
      }
      @media (max-width: 440px) {
        width: 280px;
      }
    }
    &--small {
      width: 250px;
      position: absolute;
      left: 0;
      top: 50%;
      z-index: -1;
    }
  }
  &__subtitle {
    @extend .app-h3;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: $white;
    margin-bottom: 24px;
  }
  &__title {
    @extend .app-h2;
    margin-bottom: 70px;
    color: $white;
    text-align: center;
  }
  &__wrapper {
    z-index: 0;
    width: 100%;
    min-height: calc(100vh - 150px);
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: $primary;
  }
}
</style>
