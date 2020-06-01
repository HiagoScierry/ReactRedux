import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key:'root',
    storage
}

const persistedReducer =  persistReducer(persistConfig , courses)



const INITIAL_STATE = {
    data : [
        'React Native',
        'React JS',
        'NodeJS',
        'Redux'
    ]
}

function courses(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_COURSE':
            console.log(state.data)
            return { ...state , data: [...state.data, action.title ] }
        default:
            return state
    }
}

const store = createStore(persistedReducer)
const persistor = persistStore(store)

export { store, persistor }