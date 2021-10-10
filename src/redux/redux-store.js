import { applyMiddleware, combineReducers, createStore } from 'redux'
import mainContentReducer from './main-content-reducer'
import usedCarsReducer from './used-cars-reducer'
import dialogsReducer from './dialogs-reducer'
import usersReducer from './users-reducer'
import authReducer from './auth-reducer'
import thunkMiddleware from 'redux-thunk'
let reducers = combineReducers({
    MainContentPage: mainContentReducer,
    UsedCarsPage: usedCarsReducer, 
    DialogsPage: dialogsReducer,
    UsersPage: usersReducer,
    auth: authReducer 
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store
export default store