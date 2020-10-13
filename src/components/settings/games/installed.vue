<template>
  <div class="game">
    <img :src="icon" />
    <div>{{ t(`games.${guid}`) }}</div>
    <div class="path">— {{ path }}</div>
  </div>
</template>

<script lang="ts">
import { gamesApiUrl } from "@/api/games";
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  props: {
    guid: { type: String, required: true },
    icon: { type: String, required: true },
    path: { type: String, required: true },
  },
  setup() {
    return { ...useI18n() };
  },
});
</script>

<style lang="scss" scoped>
.game {
  display: grid;
  grid-template-columns: 16px auto 1fr auto;
  align-items: center;
  gap: 10px;
  line-height: 0;
  padding: 10px;
  user-select: none;
  transition: var(--anim-dur) var(--anim-timing-func);

  &:hover {
    background-color: var(--games-bg-color-hover);
  }
}

.path {
  font-style: italic;
  color: var(--link-color-hover);

  gap: 10px;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
}
</style>
