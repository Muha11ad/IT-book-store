import { Routes, Route } from "react-router-dom"
import { Cart } from "../../pages/cart/ui/Cart"
import { Category } from "../../pages/category"
import { Home } from "../../pages/home"

export const AppRouter = () => {
  
  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/book/:title" element={<Category/>} />
    <Route path="/cart" element={<Cart/>} />
    </Routes>
    </>
  )
}
