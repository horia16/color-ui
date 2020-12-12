<template>
  <div
    ref="colorProgress"
    class="color-progress-bar"
    :class="[slim ? 'color-progress-bar-slim' : '']"
  >
    <div
      class="color-progress-bar-inside"
      :class="[
        `color-progress-bar-${computedColorClass}`,
        indeterminate ? 'color-progress-bar-indeterminate' : '',
      ]"
      :style="{
        width: computedPercent,
      }"
    >
      <div v-if="showPercent" style="user-select:none">{{ percentage }}%</div>
    </div>
  </div>
</template>
<script lang="ts">
import { setColorWithLuminance } from "@/hooks/color-app";
import { defineComponent, computed, Ref, ref, onMounted } from "vue";
export default defineComponent({
  name: "ColorProgressBar",
  props: {
    percentage: { type: Number, default: 0 },
    color: { type: String, default: "primary" },
    showPercent: { type: Boolean, default: false },
    slim: { type: Boolean, default: false },
    indeterminate: { type: Boolean, default: false },
  },
  components: {},
  setup(props) {
    const colorProgress: Ref<HTMLElement | null> = ref(null);
    // The color class that is beeing applied to the button
    const computedColorClass = computed(() => {
      if (props.color[0] == "#") {
        return "custom";
      } else {
        return props.color;
      }
    });
    const computedPercent = computed(() => {
      if (props.indeterminate) {
        return "";
      } else {
        return `${props.percentage}%`;
      }
    });
    onMounted(() => {
      if (colorProgress.value && computedColorClass.value == "custom") {
        setColorWithLuminance(
          "custom-color",
          colorProgress.value,
          props.color,
          0
        );
        setColorWithLuminance(
          "custom-color-darkest",
          colorProgress.value,
          props.color,
          -0.3
        );
      }
    });
    return {
      computedColorClass,
      computedPercent,
      colorProgress,
    };
  },
});
</script>
<style lang="scss">
.color-progress-bar {
  display: flex;
  position: relative;
  height: 2rem;
  border-radius: 6px;
  background-color: rgba($color: #000000, $alpha: 0.2);
  margin: 1rem;
}
.color-progress-bar-slim {
  height: 0.8rem;
  font-size: 0.6rem;
}
.color-progress-bar-inside {
  position: absolute;
  top: -6px;
  height: 100%;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 0 2px #00000018;
  transition: all 0.2s;
}
.color-progress-bar-primary {
  background-color: var(--primary-color);
  box-shadow: 0 6px 0 0 var(--primary-color-darkest);
}
.color-progress-bar-custom {
  background-color: var(--custom-color);
  box-shadow: 0 6px 0 0 var(--custom-color-darkest);
}
.color-progress-bar-secondary {
  background-color: var(--secondary-color);
  box-shadow: 0 6px 0 0 var(--secondary-color-darkest);
}
.color-progress-bar-indeterminate {
  animation: progress-bar-loop 2s linear;
  animation-iteration-count: infinite;
}
@keyframes progress-bar-loop {
  0% {
    left: 0;
    width: 0;
  }
  50% {
    width: 100%;
  }
  100% {
    right: 0;
    width: 0;
  }
}
</style>
