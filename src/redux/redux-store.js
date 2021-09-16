import { combineReducers, createStore } from 'redux'
import mainContentReducer from './main-content-reducer'
import usedCarsReducer from './used-cars-reducer'
import dialogsReducer from './dialogs-reducer'
import usersReducer from './users-reducer'
let reducers = combineReducers({
    MainContentPage: mainContentReducer,
    UsedCarsPage: usedCarsReducer, 
    DialogsPage: dialogsReducer,
    UsersPage: usersReducer  
})

let store = createStore(reducers)
window.store = store
export default store