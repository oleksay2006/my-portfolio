<template lang="pug">
.input__wrapper
  input.input(
    v-if="!textarea",
    :class="{ 'input--error': errorMessage }",
    :value="modelValue",
    :placeholder="placeholder",
    @input="(e) => changeHandler(e)"
  )
  textarea.input--textarea(
    v-else,
    :value="modelValue",
    :placeholder="placeholder",
    @input="(e) => changeHandler(e)"
  )
</template>
<script lang="ts" setup>
import { type Ref } from "vue";

interface Props {
  textarea?: boolean;
  modelValue?: string;
  placeholder?: string;
  errorMessage?: string | Ref<string>;
}
interface Emits {
  (e: "update:modelValue", value: string): void;
}
withDefaults(defineProps<Props>(), {
  textarea: false,
  modelValue: "",
  placeholder: "",
  errorMessage: ""
});
const emits = defineEmits<Emits>();

const changeHandler = (e: Event): void => {
  const target = e.target as HTMLInputElement;
  emits("update:modelValue", target.value);
};
</script>
<style lang="scss" scoped>
.input {
  width: 100%;
  padding: 15px;
  border-radius: 5px;
  border: none;
  color: $input-gray;
  background-color: $white;
  &--error {
    border: 2px solid $error;
  }
  &--textarea {
    @extend .input;
    resize: none;
    height: 100%;
  }
}
</style>
