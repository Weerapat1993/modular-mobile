class LocalStorage {
  constructor(state) {
    this.state = state
  }

  getItem(key) {
    return key ? this.state.storage.keys[key] : this.state.storage.keys
  }

  /**
   * get Data in storage Reducer
   * @return {{ isReload: boolean }}
   */
  data() {
    return this.state.storage
  }
}

export const Storage = state => new LocalStorage(state)

