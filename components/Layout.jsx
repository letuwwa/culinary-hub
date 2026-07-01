import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <h1>Layout</h1>
      <Footer />
      <Outlet />
    </>
  );
}
