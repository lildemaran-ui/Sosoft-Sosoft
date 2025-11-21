import Nav from "../Components/Nav";
import Footer from "../Components/Foother";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <div>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
