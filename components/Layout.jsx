import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="app">
      <header className="site-header">
        <h1>Culinary Hub</h1>
        <Navbar />
      </header>

      <main className="page">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
