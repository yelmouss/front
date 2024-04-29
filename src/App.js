import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen ">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
