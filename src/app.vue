<template>
  <menu-component class="menu" />
  <router-view class="router" />
  <PopupsComponent />
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, onBeforeMount, onMounted, VNode } from "vue";
import { LocaleMessageDictionary, useI18n } from "vue-i18n";

import { provideNotifier } from "./modules/notifier";
import { provideModal } from "./modules/modal";
import { clientPluginsUpdateAll } from "./client/plugins";
import { providePopup } from "./modules/popup";

export default defineComponent({
  setup() {
    provideNotifier();
    provideModal();
    providePopup();

    onMounted(async () => {
      // await clientPluginsUpdateAll();
    });
  },
  components: {
    MenuComponent: defineAsyncComponent(() => import("@/components/menu.vue")),
    PopupsComponent: defineAsyncComponent(() => import("@/components/popups.vue")),
  },
});
</script>

<style lang="scss">
@use "@/styles/reset.scss";
@use "@/styles/typography.scss";
@use "@/styles/themes/yuuko-best-girl.scss";

:root {
  --anim-dur: 300ms;
  --anim-timing-func: cubic-bezier(0.165, 0.84, 0.44, 1);
}

#app {
  color: var(--font-color);
  background-color: var(--bg-color);
  grid-template-columns: auto 1fr;
  display: grid;
}

// https://youtu.be/RFnazAsMOQI
</style>

<style lang="scss" scoped>
$offset: 260px;

.router {
  padding: 24px;
  margin-left: $offset;
}

.menu {
  width: $offset;
}
</style>
