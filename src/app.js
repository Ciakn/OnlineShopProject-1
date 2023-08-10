import HomePage from "./pages/HomePage";
import './App.css'
import { Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import CartProvider from "./Providers/CartProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckOutPage from "./pages/CheckOutPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";


const App = () => {
  return (
    <div className="container">
      <CartProvider>
        <ToastContainer/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cards" element={<CartPage />} />
          <Route path="/checkout" element={<CheckOutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </CartProvider>
    </div>
  );
};

export default App;
