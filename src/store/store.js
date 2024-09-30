
import { userReduser } from './user/userReduser'
import { itemReduser } from './items/itemReduser'
import { combineReducers , createStore, applyMiddleware} from 'redux'
import { thunk } from 'redux-thunk'

const rootReduser = combineReducers(
    {
        user: userReduser,
        itemsInfo: itemReduser
    }
)

export const store = createStore(rootReduser, applyMiddleware(thunk))

