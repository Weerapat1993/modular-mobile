class LocalStorage {
  constructor(state) {
    this.state = state
  }

  get(key) {
    return key ? this.state.storage[key] : this.state.storage
  }
}

export const Storage = state => new LocalStorage(state)

