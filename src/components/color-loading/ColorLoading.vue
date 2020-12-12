<template>
  <div class="color-loading-wrapper">
    <div
      ref="colorLoading"
      class="color-loading"
      :style="{ width: `${dotNumber * 2 - 0.5}rem` }"
    >
      <div v-for="(x, index) in dotNumber" :key="index">
        <div
          class="color-loading-small"
          :class="[`color-loading-${computedColorClass}`]"
          :style="{
            left: `${index * 2}rem`,
            animationDelay: `${index * 0.2}s`,
          }"
        ></div>
      </div>
    </div>
    <div class="color-loading-text">
      {{ loadingText }}
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, Ref, ref, computed, onMounted } from "vue";
import { setColorWithLuminance } from "@/hooks/color-app";
export default defineComponent({
  name: "ColorLoading",
  props: {
    color: { type: String, default: "primary" },
    loadingText: { type: String, default: null },
    dotNumber: { type: Number, default: 3 },
  },
  components: {},
  setup(props) {
    const colorLoading: Ref<HTMLElement | null> = ref(null);
    const computedColorClass = computed(() => {
      if (props.color[0] == "#") {
        return "custom";
      } else {
        return props.color;
      }
    });
    onMounted(() => {
      if (colorLoading.value && computedColorClass.value == "custom") {
        setColorWithLuminance(
          "custom-color",
          colorLoading.value,
          props.color,
          0
        );
        setColorWithLuminance(
          "custom-color-darkest",
          colorLoading.value,
          props.color,
          -0.3
        );
      }
    });
    return {
      computedColorClass,
      colorLoading,
    };
  },
});
</script>
<style lang="scss">
.color-loading {
  position: relative;
  display: flex;
  width: 5.5rem;
  height: 1.5rem;
}
.color-loading-text {
  text-shadow: 0 2px #00000018;
  margin-top: 0.3rem;
}
.color-loading-wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  min-height: 4.5rem;
  user-select: none;
}
.color-loading-primary {
  background-color: var(--primary-color);
  box-shadow: 0 6px 0 0 var(--primary-color-darkest);
}
.color-loading-secondary {
  background-color: var(--secondary-color);
  box-shadow: 0 6px 0 0 var(--secondary-color-darkest);
}
.color-loading-custom {
  background-color: var(--custom-color);
  box-shadow: 0 6px 0 0 var(--custom-color-darkest);
}
.color-loading-small {
  position: absolute;
  width: 1.5rem;
  height: calc(1.5rem - 6px);

  border-radius: 6px;
  animation: loading-jump 1s ease-in;
  animation-iteration-count: infinite;
  left: 0;
}
@keyframes loading-jump {
  0% {
    top: 0;
    transform: scale3d(1, 1, 1);
  }
  50% {
    top: -1rem;
    transform: scale3d(0.8, 1, 1);
  }
  100% {
    top: 0;
    transform: scale3d(1, 1, 1);
  }
}
@keyframes loading-jump-outside {
  0% {
    transform: scale3d(1, 1, 1);
  }
  50% {
    transform: scale3d(0.9, 0.9, 1);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
}
</style>
