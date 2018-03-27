import { githubReducer } from './github'
import { storageReducer } from './storage'

// RootReducer
const rootReducer = {
  github: githubReducer,
  storage: storageReducer,
}

export default rootReducer