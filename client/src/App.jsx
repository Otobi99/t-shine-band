import { Route, Routes } from "react-router-dom"
import React from 'react'
import { ClientLayout } from "./components"
import Home from "./pages/Home"

const App = () => {
  return (
    <Routes>
      <Route element={<ClientLayout/>}>
        <Route index element={<Home/>}/>
      </Route>
      <Route>

      </Route>
    </Routes>
  )
}

export default App