import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Categories, Dashboard, Login, Orders, Products } from "./pages";
import { Alert, Navbar, SideMenu } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="AppContainer flex gap-10 ">
        <Alert />
        <div className="hidden lg:block lg:w-1/5">
          <SideMenu />
        </div>
        <div className="w-full lg:w-4/5">
          <Navbar />
          <div className="bg-primary/10 p-5 h-full min-h-screen-custom ">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/products" element={<Products />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
