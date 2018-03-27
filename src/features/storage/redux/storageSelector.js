class LocalStorage {
  constructor(state) {
    this.state = state
  }

  get(key) {
    return key ? this.state.storage.keys[key] : this.state.storage.keys
  }
}

export const Storage = state => new LocalStorage(state)

