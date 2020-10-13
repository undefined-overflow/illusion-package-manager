import { inject, provide, ref, markRaw } from "vue";

class Modal {
  readonly symbol = Symbol();
  readonly current = ref<any | null>(null);

  remove() {
    this._components.pop();
    this.current.value = this._components[this._components.length - 1] ?? null;
  }

  add({ component }: { component: any }) {
    this._components.push(component);
    this.current.value = markRaw(component);
  }

  private _components: any[] = [];
}

export const modal = new Modal();

export function provideModal() {
  provide(modal.symbol, {
    current: modal.current,
    close: modal.remove.bind(modal),
    add: modal.add.bind(modal),
  });
}

export function useModal() {
  const injected = inject(modal.symbol);

  if (typeof injected === "undefined") {
    throw new Error("Something wrong");
  }

  return injected;
}
