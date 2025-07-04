import React from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Routing from "./utils/Routing.jsx";
import ScrollToTop from "./utils/ScrollToTop.jsx";

function AppContent() {
  const location = useLocation();
  const hideNavbarRoutes = ["/signup", "/login", "/forgot-password"];
  const hideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "linear-gradient(135deg, #0f0f0f, #1c1c1e, #2a2a2d)",
      }}
    >
      <ScrollToTop />
      {!hideNavbar && <Navbar />}
      <main className="flex-1 flex flex-col">
        <Routing />
      </main>
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
