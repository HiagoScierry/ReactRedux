import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'


import { store , persistor} from './store'
import CourseList from './components/CourseList'


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CourseList/>
      </PersistGate>
    </Provider>    
  )
}

export default App
