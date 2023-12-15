import { BrowserRouter, Route, Routes } from "react-router-dom";
import Order from "./pages/OrderPage/OrderPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Order />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
