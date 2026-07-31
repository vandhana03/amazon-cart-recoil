import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import WishList from "./components/WishList";
import AmazonCart from "./components/AmazonCart";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<WishList />} />

        <Route path="/cart" element={<AmazonCart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;