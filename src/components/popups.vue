<template>
  <transition-group tag="section" class="popups" name="anim" mode="out-in">
    <div class="popup" v-for="popup of popups" :key="popup.uuid">
      <div class="popup-content"><component :is="popup.component" /></div>
      <RemoveIcon class="popup-close" @click="close(popup)" />
    </div>
  </transition-group>
</template>

<script lang="ts">
import { Popup, usePopups } from "@/modules/popup";
import { defineAsyncComponent, defineComponent, markRaw } from "vue";
import { v4 } from "uuid";

export default defineComponent({
  methods: {
    close(popup: Popup) {
      const index = this.popups.indexOf(popup);
      if (index !== -1) {
        this.popups.splice(index, 1);
      }
    },
  },
  setup() {
    return {
      ...usePopups(),
    };
  },

  components: {
    RemoveIcon: defineAsyncComponent(() => import("@/components/icons/remove.vue")),
  },
});
</script>

<style lang="scss" scoped>
.popups {
  position: fixed;
  bottom: 10px;
  right: 10px;
  display: grid;
  gap: 10px;
}

.popup {
  background-color: var(--bg-color);
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.7);
  padding: 16px;
  display: flex;
}

.popup-content {
  flex-grow: 2;
  padding-right: 16px;
}

.popup-close {
  $size: 16rem;
  width: $size;
  height: $size;

  cursor: pointer;
  transition: var(--anim-dur) var(--anim-timing-func);
  fill: var(--games-unavailable-font-color);

  &:hover {
    fill: var(--font-color);
  }
}

.anim-enter-active,
.anim-leave-active {
  transition: var(--anim-dur) var(--anim-timing-func);
}

.anim-enter-from,
.anim-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
</style>
