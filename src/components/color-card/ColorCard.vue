<template>
  <div
    class="color-card"
    :class="[`color-card-${computedColorClass}`]"
    :style="{
      width: width,
      height: height,
      maxWidth: maxWidth,
      maxHeight: maxHeight,
      border: computedColorClass == 'custom' ? `solid 1px ${color}` : null,
      boxShadow: computedColorClass == 'custom' ? `0 4px 0 0 ${color}` : null,
    }"
  >
    <div v-if="title" class="color-card-head">
      <div class="card-title">{{ title }}</div>
      <div class="card-subtitle">{{ subtitle }}</div>
    </div>
    <div class="color-card-content">
      <slot></slot>
    </div>
    <div class="color-card-actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, Ref, ref, computed } from "vue";
export default defineComponent({
  name: "ColorCard",
  props: {
    color: { type: String, default: "primary" },
    title: { type: String, default: null },
    subtitle: { type: String, default: null },
    width: { type: String, default: null },
    height: { type: String, default: null },
    maxWidth: { type: String, default: null },
    maxHeight: { type: String, default: null },
  },
  components: {},
  setup(props) {
    const computedColorClass = computed(() => {
      if (props.color[0] == "#") {
        return "custom";
      } else {
        return props.color;
      }
    });
    return {
      computedColorClass,
    };
  },
});
</script>
<style lang="scss">
.color-card {
  padding: 1rem;
  margin: 1rem;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  background-color: var(--background-color);
}
.color-card-head {
  margin-top: 0.2rem;
  margin-bottom: 0.6rem;
}
.color-card-actions {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin-top: 1rem;
}
.card-title {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 0.1rem;
}
.card-subtitle {
  font-size: 1.1rem;
  color: var(--text-color-transparent);
}
.color-card-primary {
  border: solid 1px var(--primary-color);
  box-shadow: 0 4px 0 0 var(--primary-color);
}
.color-card-secondary {
  border: solid 1px var(--secondary-color);
  box-shadow: 0 4px 0 0 var(--secondary-color);
}
.color-card-content {
  overflow: auto;
}
</style>
