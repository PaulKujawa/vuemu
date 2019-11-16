export const webStorage = {
  getItem<T = string>(id: string): T | undefined {
    const stored = localStorage.getItem(id);

    if (stored) {
      return JSON.parse(stored);
    }
  },
  setItem<T>(id: string, value: T): void {
    const toBeStore = JSON.stringify(value);
    localStorage.setItem(id, toBeStore);
  },
  removeItem(id: string): void {
    localStorage.removeItem(id);
  }
};
