import Home from "./pages/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Shop from "./pages/Shop";
import Layouts from "./components/Layouts";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import About from "./pages/About";
import Contact from "./pages/Contact";

let router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layouts />}>
        <Route index element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/shop/:id" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Route>
      <Route path="*" element={<Error />}></Route>
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
