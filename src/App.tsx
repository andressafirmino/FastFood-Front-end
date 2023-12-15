import { BrowserRouter, Route, Routes } from "react-router-dom";
import Order from "./pages/OrderPage/OrderPage";
import Kitchen from "./pages/KitchenPage/KitchenPage";
import Withdrawal from "./pages/WithdrawalPage/WithdrawalPage";
import Header from "./components/ Header/ Header";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Order />}></Route>
        <Route path="/cozinha" element={<Kitchen />}></Route>
        <Route path="/retirada" element={<Withdrawal />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
