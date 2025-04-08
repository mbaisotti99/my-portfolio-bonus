import { BrowserRouter, Route, Routes } from "react-router-dom"
import "/src/assets/index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import Layout from "../pages/Layout"
import Projects from "../pages/Projects"
import Devs from "../pages/Devs"
import ProjShow from "../pages/ProjShow"
import DevShow from "../pages/dEVsHOW.JSX"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/:id" element={<ProjShow />} />
          <Route path="/" element={<Projects   />} />
          <Route path="/devs/:id" element={<DevShow />} />
          <Route path="/devs" element={<Devs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
