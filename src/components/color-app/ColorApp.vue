<template>
  <div class="c-app">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, watchEffect } from "vue";
import { setColorWithLuminance, useColorApp } from "../../hooks/color-app";
export default defineComponent({
  name: "ColorApp",
  props: {
    primaryColor: { type: String, default: "#2e94d8" },
    secondaryColor: { type: String, default: "#2eeaaf" },
    defaultFont: {
      type: String,
      default:
        "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
    },
    darkMode: { type: Boolean, default: false },
  },
  components: {},
  setup(props) {
    const colorApp = useColorApp();
    if (props.darkMode) {
      colorApp.darkMode = true;
    }
    onMounted(() => {
      const root = document.documentElement;
      root.style.setProperty("--default-font", props.defaultFont);
      if (!colorApp.darkMode) {
        root.style.setProperty("--background-color", "#ffffff");
        root.style.setProperty("--text-color", "#222222");
        root.style.setProperty("--text-color-transparent", "#222222a0");
      } else {
        root.style.setProperty("--background-color", "#222222");
        root.style.setProperty("--text-color", "#ffffff");
        root.style.setProperty("--text-color-transparent", "#ffffffa0");
      }
      watchEffect(() => {
        if (colorApp.darkMode) {
          root.style.setProperty("--background-color", "#222222");
          root.style.setProperty("--text-color", "#ffffff");
          root.style.setProperty("--text-color-transparent", "#ffffffa0");
        } else {
          root.style.setProperty("--background-color", "#ffffff");
          root.style.setProperty("--text-color", "#222222");
          root.style.setProperty("--text-color-transparent", "#222222a0");
        }
      });
      root.style.setProperty("--primary-color", props.primaryColor);
      setColorWithLuminance(
        "primary-color-light",
        root,
        props.primaryColor,
        0.1
      );
      setColorWithLuminance(
        "primary-color-lighter",
        root,
        props.primaryColor,
        0.2
      );
      setColorWithLuminance(
        "primary-color-dark",
        root,
        props.primaryColor,
        -0.1
      );
      setColorWithLuminance(
        "primary-color-darker",
        root,
        props.primaryColor,
        -0.2
      );
      setColorWithLuminance(
        "primary-color-darkest",
        root,
        props.primaryColor,
        -0.3
      );
      root.style.setProperty("--secondary-color", props.secondaryColor);

      setColorWithLuminance(
        "secondary-color-light",
        root,
        props.secondaryColor,
        0
      );
      setColorWithLuminance(
        "secondary-color-light",
        root,
        props.secondaryColor,
        0.1
      );
      setColorWithLuminance(
        "secondary-color-lighter",
        root,
        props.secondaryColor,
        0.3
      );
      setColorWithLuminance(
        "secondary-color-dark",
        root,
        props.secondaryColor,
        -0.1
      );
      setColorWithLuminance(
        "secondary-color-darker",
        root,
        props.secondaryColor,
        -0.2
      );
      setColorWithLuminance(
        "secondary-color-darkest",
        root,
        props.secondaryColor,
        -0.3
      );
    });

    return {};
  },
});
</script>
<style lang="scss">
.c-app {
  display: flex;
  flex-direction: column;
  -webkit-tap-highlight-color: transparent;
  color: var(--text-color);
  .d-flex {
    display: flex;
  }
  .flex-column {
    flex-direction: column;
  }
  .m-1 {
    margin: 0.5rem;
  }
  .m-2 {
    margin: 0.7rem;
  }
  .m-3 {
    margin: 1rem;
  }
  .m-4 {
    margin: 1.2rem;
  }
  .m-5 {
    margin: 1.5rem;
  }
  a {
    font-family: var(--default-font);
  }
  button {
    font-family: var(--default-font);
  }
  input {
    font-family: var(--default-font);
  }
  div {
    font-family: var(--default-font);
  }
  p {
    font-family: var(--default-font);
  }
}
body {
  padding: 0;
  margin: 0;
}
:root {
  --warning-color: #db5000;
  --info-color: #1a82e4;
  --error-color: #c53d3d;
  background-color: var(--background-color);
  transition: background-color 0.2s;
}
</style>
