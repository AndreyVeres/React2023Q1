interface Storage {
  [key: string]: string;
}

export class StorageMock {
  private storage: Storage;

  constructor() {
    this.storage = {};
  }
  setItem(key: string, value: string) {
    this.storage[key] = value || '';
  }
  getItem(key: string) {
    return key in this.storage ? this.storage[key] : null;
  }
  removeItem(key: string) {
    delete this.storage[key];
  }

  clear() {
    this.storage = {};
  }
}
