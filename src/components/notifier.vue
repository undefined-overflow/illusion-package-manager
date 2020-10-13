<template>
  <transition name="fade">
    <footer v-if="current !== null">
      <component :is="current" />
    </footer>
  </transition>
</template>

<script>
import { defineComponent } from "vue";
import { useNotifier } from "@/modules/notifier";

export default defineComponent({
  setup() {
    return { ...useNotifier() };
  },
});
</script>

<style>
footer {
  user-select: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: var(--anim-dur) var(--anim-timing-func);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(50%);
}
</style>
