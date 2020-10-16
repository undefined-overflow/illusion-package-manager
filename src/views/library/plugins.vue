<template>
  <section class="plugins">
    <div class="plugin" v-for="plugin of plugins" :key="plugin.guid">
      <div class="plugin-description">{{ t(`plugins.${plugin.guid}.description`) }}</div>
      <header class="plugin-header">
        <div class="name">{{ t(`plugins.${plugin.guid}.name`) }}</div>
        <div class="version" v-if="plugin.installed">{{ plugin.version }}</div>
        <div class="install" @click="install(plugin)" v-else>install</div>
      </header>
    </div>
  </section>
</template>

<script lang="ts">
import { useI18n } from "vue-i18n";
import { defineComponent, onMounted, ref } from "vue";
import { clientPluginAdd, clientPlugins } from "@/client/plugins";
import { useIconsHelper } from "@/helpers/icons";
import { ApiPlugin } from "@/api/plugins/types";
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
      const plugin = this.plugins.find((p) => p.guid == guid)!;
      plugin.installed = installed;

      for (const dep of plugin.dependencies) {
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
.plugins {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(calc(100% / 3 - 24px), 1fr));
  gap: 24px;
}

.plugin {
  background-color: var(--header-bg-color);
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.7);
  transition: var(--anim-dur) var(--anim-timing-func);
  display: flex;
  flex-direction: column;

  &:hover {
    background-color: var(--font-color);
    color: var(--bg-color);

    .plugin-description {
      color: var(--bg-color);
    }

    .install {
      background-color: var(--bg-color);
      color: var(--font-color);

      &:hover {
        background-color: var(--font-color);
        color: var(--bg-color);
      }
    }
  }

  // &:not(:last-child) {
  // margin-bottom: 24px;
  // }
}

.plugin-description {
  flex-grow: 2;
}

.plugin-header {
  border-top: 1px solid rgba(0, 0, 0, 0.4);
  background-color: rgba(0, 0, 0, 0.1);
  padding: 8px 16px;

  display: grid;
  grid-template-columns: min-content 1fr;
  gap: 16px;
}

.name {
  white-space: nowrap;
  font-weight: 700;
}

.version {
  justify-self: end;
}

.install {
  cursor: pointer;
  padding: 0 10px;
  transition: var(--anim-dur) var(--anim-timing-func);
  background-color: var(--font-color);
  color: var(--bg-color);
  text-transform: uppercase;
  justify-self: end;
}

.plugin-description {
  padding: 16px;
  color: var(--font-detail-color);
}
</style>

<style lang="scss" scoped>
@media (max-width: 1900px) {
  .plugins {
    grid-template-columns: repeat(auto-fill, minmax(calc(100% / 3 - 24px), 1fr));
  }
}

@media (max-width: 1600px) {
  .plugins {
    grid-template-columns: repeat(auto-fill, minmax(calc(100% / 2 - 24px), 1fr));
  }
}

@media (max-width: 1000px) {
  .plugins {
    grid-template-columns: 1fr;
  }
}
</style>
