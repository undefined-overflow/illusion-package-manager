import { _popups } from '@/modules/popup';
import { v4 } from 'uuid';
import { defineAsyncComponent, markRaw } from 'vue';

const clientUrl = "http://localhost:5000";

export const clientRequest = (input: string, init?: RequestInit) =>
  fetch(`${clientUrl}/api/${input}`, init).catch(reason => {
    _popups.value.push({ uuid: v4(), component: markRaw(defineAsyncComponent(() => import("@/components/popups/no-client.vue"))) });

    throw reason;
  });
