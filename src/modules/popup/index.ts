import { inject, provide, ref, Component } from "vue";

export type Popup = {
  uuid: string,
  component?: Component,
};

export const _popups = ref<Popup[]>([]);

const popupsSymbol = Symbol();

export function providePopup() {
  provide(popupsSymbol, _popups);
}

export function usePopups() {
  const popups = inject(popupsSymbol, _popups);

  if (typeof popups === "undefined") {
    throw new Error("Something wrong");
  }

  return { popups };
}
