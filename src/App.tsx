import { BrowserRouter, Route, Routes } from "react-router-dom";
import Order from "./pages/OrderPage/OrderPage";
import Header from "./components/ Header/ Header";
import Kitchen from "./pages/KitchenPage/KitchenPage";
import Withdrawal from "./pages/WithdrawalPage/WithdrawalPage";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Order />}></Route>
        <Route path="/cozinha" element={<Kitchen />} />
        <Route path="/retirada" element={<Withdrawal />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
