<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" v-if="current !== null" @click.self="close">
      <div class="modal">
        <component :is="current" />
      </div>
    </div>
  </transition>
</template>

<script>
import { useModal } from "@/modules/modal";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      /*...useModal()*/
    };
  },
});
</script>

<style lang="scss" scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: var(--font-color);
  color: var(--bg-color);
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  padding: 10px;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: var(--anim-dur) var(--anim-timing-func);
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
