import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router";
import MiniNav from "./components/MiniNav/MiniNav";
import "./App.css";

function App() {

  return (
    <div className="home">
      <Navbar />
      <MiniNav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
