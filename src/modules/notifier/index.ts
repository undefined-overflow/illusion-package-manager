import { inject, provide, ref, markRaw } from "vue";

class Notifier {
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

export const notifier = new Notifier();

export function provideNotifier() {
  provide(notifier.symbol, notifier.current);
}

export function useNotifier() {
  const current = inject(notifier.symbol);

  if (typeof current === "undefined") {
    throw new Error("Something wrong");
  }

  return { current };
}
