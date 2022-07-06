import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { loadable } from "react-lazily/loadable"

const { Home, Custom404 } = loadable(() => import("containers"), {
  fallback: <>Loading...</>
})

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Custom404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
