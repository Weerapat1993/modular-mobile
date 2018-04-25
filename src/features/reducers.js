import { githubReducer } from './github'
import { storageReducer } from './storage'
import { purchaseReducer } from './purchase'
import { databaseReducer } from './database'

// RootReducer
const rootReducer = {
  github: githubReducer,
  storage: storageReducer,
  purchase: purchaseReducer,
  database: databaseReducer,
}

export default rootReducer