<template>
  <section class="plugins">
    <div class="plugin" v-for="plugin of plugins" :key="plugin.guid">
      <div class="plugin-description">{{ t(`plugins.${plugin.guid}.description`) }}</div>
      <header class="plugin-header">
        <div class="install" @click="install(plugin)" v-if="!plugin.installed">install</div>
        <div class="name">{{ t(`plugins.${plugin.guid}.name`) }}</div>
      </header>
    </div>
  </section>
</template>

<script lang="ts">
import { useI18n } from "vue-i18n";
import { defineComponent, onMounted, ref } from "vue";
import { ApiPlugin } from "@/api/plugins/types";
import { useIconsHelper } from "@/helpers/icons";
import { clientPluginAdd, clientPlugins } from "@/client/plugins";
import { apiPlugins } from "@/api/plugins";

type PluginEx = { installed: boolean; version: string } & ApiPlugin;

export default defineComponent({
  props: {
    guid: { required: true, type: String },
  },

  methods: {
    async install(plugin: PluginEx) {
      await clientPluginAdd(plugin.guid, this.guid);
      this.mark(plugin.guid, true);
    },

    mark(guid: string, installed: boolean) {
      const p = this.plugins.find((p) => p.guid == guid)!;
      p.installed = installed;

      for (const dep of p.dependencies) {
        this.mark(dep, installed);
      }
    },
  },

  setup(props) {
    const plugins = ref<PluginEx[]>([]);

    onMounted(async () => {
      plugins.value = (await apiPlugins(props.guid)).map((p) => ({ ...p, installed: false, version: "0" }));

      for (const plugin of await clientPlugins(props.guid)) {
        const found = plugins.value.find((p) => p.guid == plugin.guid)!;
        found.installed = true;
        found.version = plugin.version;
      }
    });

    return { plugins, ...useIconsHelper(), ...useI18n() };
  },
});
</script>

<style lang="scss" scoped>
.plugin {
  background-color: var(--header-bg-color);
  // border: 1px solid rgba(0, 0, 0, 0.4);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.7);

  &:not(:last-child) {
    margin-bottom: 24px;
  }
}

.plugin-header {
  border-top: 1px solid rgba(0, 0, 0, 0.4);
  background-color: rgba(0, 0, 0, 0.08);
  padding: 8px 16px;

  display: grid;
  grid-template-columns: min-content 1fr;
  gap: 16px;
}

.install {
  cursor: pointer;
  padding: 0 10px;
  transition: var(--anim-dur) var(--anim-timing-func);
  color: rgb(0, 191, 255);

  &:hover {
    background-color: var(--font-color);
    color: var(--bg-color);
  }
}

.plugin-description {
  padding: 16px;
  color: var(--font-detail-color);
}
</style>
