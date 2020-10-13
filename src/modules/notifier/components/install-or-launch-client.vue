<template>
  <transition name="retry-anim" mode="out-in">
    <section class="default" v-if="ws === null">
      <div class="texts">
        {{ t("Notifier.installOrLaunchClient.text1") }}
        <div class="button" @click="launch">{{ t("Notifier.installOrLaunchClient.text2") }}</div>
        {{ t("Notifier.installOrLaunchClient.text3") }}
        <div class="button" @click="install">{{ t("Notifier.installOrLaunchClient.text4") }}</div>
      </div>
    </section>

    <section class="try-connect" v-else>
      <div class="retry">
        <div class="name">{{ t("Notifier.installOrLaunchClient.retryConnect") }}</div>
        <transition name="retry-count-anim" mode="out-in">
          <div class="count" :key="count">{{ count }}</div>
        </transition>
      </div>
    </section>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  data() {
    return { count: 0, ws: null as WebSocket | null };
  },
  methods: {
    install() {
      window.location.reload(true);
      this.launchWait();
    },
    launch() {
      // window.location.href = "ipl://";
      this.launchWait();
    },
    launchWait() {
      const wait = () => {
        this.ws = new WebSocket("ws://localhost:5123");
        this.ws.onerror = () => {
          ++this.count;
          wait();
        };

        this.ws.onopen = () => {
          window.location.reload(true);
        };
      };

      wait();
    },
  },
  setup() {
    return { ...useI18n() };
  },
});
</script>

<style lang="scss" scoped>
@use '@/styles/button.scss';

.default {
  background-color: var(--install-or-launch-error-bg-color);
}

.try-connect {
  background-color: var(--install-or-launch-bg-color);
}

section {
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  padding: 40px;
}

.retry {
  font-style: italic;
}

.name,
.count {
  display: inline;
}

.retry-anim-enter-active,
.retry-anim-leave-active {
  transition: var(--anim-dur) var(--anim-timing-func);
}

.retry-anim-enter-from,
.retry-anim-leave-to {
  opacity: 0;
}

.retry-count-anim-enter-active,
.retry-count-anim-leave-active {
  transition: var(--anim-dur) var(--anim-timing-func);
}

.retry-count-anim-enter-from,
.retry-count-anim-leave-to {
  opacity: 0;
  // transform: translateY(100%);
}
</style>
