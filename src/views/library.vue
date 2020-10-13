<template>
  <div class="library">
    <header class="menu">
      <template v-for="(name, extension) in extensions" :key="extension">
        <RouterLink :to="{ name: `library-${name}` }" v-if="game.extensions & extension">{{ t(`extensions.${extension}`) }}</RouterLink>
      </template>
    </header>

    <RouterView />
  </div>
</template>

<script lang="ts">
import { apiGame } from "@/api/games";
import { ApiGameEntity, ApiGameExtensions } from "@/api/games/types";
import { defineComponent, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  props: {
    guid: { type: String, required: true },
  },

  data() {
    return {
      extensions: {
        [ApiGameExtensions.PLUGINS]: "plugins",
        [ApiGameExtensions.CARDS]: "cards",
        [ApiGameExtensions.FOLDERS]: "folders",
      },
    };
  },

  setup(props) {
    const game = ref<ApiGameEntity>({
      guid: props.guid,
      extensions: 0,
    });

    onMounted(async () => {
      game.value = await apiGame(props.guid);
    });

    return { game, ...useI18n() };
  },
});
</script>

<style lang="scss" scoped>
.menu {
}
</style>
