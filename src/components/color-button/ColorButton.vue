<template>
  <div class="color-button-wrapper">
    <button
      ref="colorButton"
      @mousedown="onMouseDown"
      @mouseup="onMouseUp"
      @mouseleave="onMouseLeave"
      :disabled="disabled"
      class="color-button"
      :class="[
        `color-button-${computedColorClass}`,
        pressedClass,
        small ? 'color-button-sm' : '',
        large ? 'color-button-lg' : '',
        disabled ? 'color-button-disabled' : '',
      ]"
    >
      <span
        v-if="iconLeft"
        class="mdi"
        :class="[`mdi-${iconLeft}`]"
        :style="{
          fontSize: small ? '16px' : large ? '22px' : '18px',
          marginRight: '0.2rem',
        }"
      >
      </span>

      <slot></slot>
      <span
        v-if="iconRight"
        class="mdi"
        :class="[`mdi-${iconRight}`]"
        :style="{
          fontSize: small ? '16px' : large ? '22px' : '18px',
          marginLeft: '0.2rem',
        }"
      >
      </span>
    </button>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, Ref, ref, computed } from "vue";
import { useRouter, Router } from "vue-router";
import { setColorWithLuminance } from "../../hooks/color-app";
export default defineComponent({
  name: "ColorButton",
  props: {
    color: { type: String, default: "primary" },
    small: { type: Boolean, default: false },
    large: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    iconLeft: { type: String, default: null },
    iconRight: { type: String, default: null },
    to: { type: String, default: null },
  },
  components: {},
  setup(props, context) {
    // The class that is beeing applied to the button on press
    const pressedClass: Ref<string> = ref("");
    // The button element
    const colorButton: Ref<HTMLElement | null> = ref(null);
    let router: Router | null = null;
    if (props.to) {
      router = useRouter();
    }
    // The color class that is beeing applied to the button
    const computedColorClass = computed(() => {
      if (props.color[0] == "#") {
        return "custom";
      } else {
        return props.color;
      }
    });
    function onMouseDown() {
      // Apply the correct pressed class
      pressedClass.value = `color-button-active active-${computedColorClass.value}`;
    }
    function onMouseUp() {
      // If the button is not disabled
      if (!props.disabled) {
        // Set a timeout of 0.1s so the animation can play
        setTimeout(() => {
          // Remove the active class
          pressedClass.value = "";
          // Emit the clicked event
          if (!props.to) {
            context.emit("clicked");
          } else {
            if (router) {
              router.push(props.to);
            }
          }
        }, 200);
      }
    }
    function onMouseLeave() {
      // Remove the active class
      pressedClass.value = "";
    }
    onMounted(() => {
      // If we have a button
      if (colorButton.value) {
        // If we have a custom color, create it's variants
        if (props.color[0] == "#") {
          setColorWithLuminance(
            "custom-color",
            colorButton.value,
            props.color,
            0
          );
          setColorWithLuminance(
            "custom-color-dark",
            colorButton.value,
            props.color,
            -0.1
          );
          setColorWithLuminance(
            "custom-color-darker",
            colorButton.value,
            props.color,
            -0.2
          );
          setColorWithLuminance(
            "custom-color-darkest",
            colorButton.value,
            props.color,
            -0.3
          );
        }
      }
    });
    return {
      onMouseDown,
      onMouseUp,
      onMouseLeave,
      pressedClass,
      computedColorClass,
      colorButton,
    };
  },
});
</script>
<style lang="scss">
.color-button-wrapper {
  display: flex;
}
.color-button {
  padding: 0.9rem;
  font-size: 0.9rem;
  margin: 0.4rem;
  height: 2.8rem;
  text-transform: uppercase;
  font-weight: 400;
  text-shadow: 0 2px #00000018;
  user-select: none;
  display: flex;
  flex-wrap: nowrap;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 6px;
  border: 0;
  color: #ffffff;
  transition: all 0.1s;
  &:focus {
    outline: none;
  }
}
.button-icon-left {
  margin-right: 0.3rem;
}
.button-icon-right {
  margin-left: 0.3rem;
}
.color-button-sm {
  padding: 0.7rem;
  font-size: 0.7rem !important;
  height: 2.3rem;
}
.color-button-lg {
  padding: 1.1rem;
  font-size: 1.1rem !important;
  height: 3.3rem;
}
.color-button-primary {
  background-color: var(--primary-color);
  box-shadow: 0 6px 0 0 var(--primary-color-darkest);
  &:hover {
    background-color: var(--primary-color-dark);
  }
}
.color-button-secondary {
  background-color: var(--secondary-color);
  box-shadow: 0 6px 0 0 var(--secondary-color-darkest);
  &:hover {
    background-color: var(--secondary-color-dark);
  }
}
.color-button-disabled {
  cursor: not-allowed;
  background-color: #c2c2c2 !important;
  box-shadow: 0 6px 0 0 #7c7c7c !important;
  &:hover {
    background-color: #c2c2c2 !important;
  }
}
.color-button-custom {
  background-color: var(--custom-color);
  box-shadow: 0 6px 0 0 var(--custom-color-darkest);
  &:hover {
    background-color: var(--custom-color-dark);
  }
}
.color-button-active {
  margin-top: calc(0.4rem + 4px);
  margin-bottom: calc(0.4rem - 4px);
}
.active-primary {
  background-color: var(--primary-color-darker);
  box-shadow: 0 2px 0 0 var(--primary-color-darkest);
}
.active-secondary {
  background-color: var(--secondary-color-darker);
  box-shadow: 0 2px 0 0 var(--secondary-color-darkest);
}
.active-custom {
  background-color: var(--custom-color-darker);
  box-shadow: 0 2px 0 0 var(--custom-color-darkest);
}
</style>
