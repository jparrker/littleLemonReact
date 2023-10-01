import "./App.css";
import { Route, Routes } from "react-router-dom";
import pages from "./utils/pages";
import Layout from "./layouts/Layout/Layout";
import Menu from "./pages/Menu/Menu";
import Orders from "./pages/Orders/Orders";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Reservations from "./pages/Reservations/Reservations";

function App() {
  return (
    <div data-testid="app-component">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/reservation" element={<Reservations />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
