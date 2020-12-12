<template>
  <span
    class="mdi"
    :class="[`mdi-${icon}`]"
    :style="{
      fontSize: small ? '16px' : large ? '22px' : '18px',
      margin: '0.2rem',
    }"
  ></span>
</template>
<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
export default defineComponent({
  name: "ColorIcon",
  props: {
    small: { type: Boolean, default: false },
    large: { type: Boolean, default: false },
    icon: { type: String, default: null },
  },
  components: {},
  setup() {
    return {};
  },
});
</script>
<style lang="scss"></style>
