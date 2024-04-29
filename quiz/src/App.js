import React from 'react'
import Intro from './components/Intro'
import {Route,Routes} from 'react-router-dom'
import StartTest from './components/StartTest'

export default function App() {
  return (
    <div>
     <Routes>
      <Route path="/" element={<Intro/>}></Route>
      <Route path="/start-test" element={<StartTest/>}></Route>
     </Routes>
    </div>
  )
}
