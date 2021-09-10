import { combineReducers, createStore } from 'redux'
import mainContentReducer from './main-content-reducer'
import usedCarsReducer from './used-cars-reducer'
import dialogsReducer from './dialogs-reducer'

let reducers = combineReducers({
    MainContentPage: mainContentReducer,
    UsedCarsPage: usedCarsReducer, 
    DialogsPage: dialogsReducer,  
})

let store = createStore(reducers)

export default store