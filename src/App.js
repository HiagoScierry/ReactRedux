import React from 'react'
import { Provider } from 'react-redux'

import Store from './store'
import CourseList from './components/CourseList'


function App() {
  return (
    <Provider store={Store}>
      <div>
        <CourseList/>
      </div>
    </Provider>    
  )
}

export default App
