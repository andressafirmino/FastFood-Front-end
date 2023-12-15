import { BrowserRouter, Route, Routes } from "react-router-dom";
import Order from "./pages/OrderPage/OrderPage";
import Kitchen from "./pages/KitchenPage/KitchenPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Order />}></Route>
        <Route path="/cozinha" element={<Kitchen />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
