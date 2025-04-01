import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

import { Routes, Route } from "react-router-dom";
import { useThemeStore } from "./store/useThemeStore.js";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";

function App() {
  const { theme } = useThemeStore();

  useEffect(() => {
    const root = document.documentElement; // Target <html> element

    // Set theme using data-theme attribute
    root.setAttribute("data-theme", theme);
    
    // Remove any previously forced background classes
    root.classList.remove("bg-coffee"); // Clean up old approach
  }, [theme]);

  return (
    <div className="min-h-screen bg-base-200 transition-colors duration-300">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
