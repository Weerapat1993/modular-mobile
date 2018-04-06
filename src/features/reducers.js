import { githubReducer } from './github'
import { storageReducer } from './storage'
import { purchaseReducer } from './purchase'

// RootReducer
const rootReducer = {
  github: githubReducer,
  storage: storageReducer,
  purchase: purchaseReducer,
}

export default rootReducer