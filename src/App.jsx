import Home from "./components/home"
import Login from "./components/login"
import Create from "./components/create"
import Setting from "./components/settings"
import { BrowserRouter, Route, Routes } from "react-router"

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Create />} />
          <Route path="/settings" element={<Setting />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
