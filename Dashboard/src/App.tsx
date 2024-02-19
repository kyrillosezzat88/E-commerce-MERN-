import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard, Home, Login, Orders } from "./pages";
import { Navbar, SideMenu } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="AppContainer flex gap-10 ">
        <div className="hidden lg:block lg:w-1/5">
          <SideMenu />
        </div>
        <div className="w-full lg:w-4/5">
          <Navbar />
          <div className="bg-primary/10 p-5 h-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
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
