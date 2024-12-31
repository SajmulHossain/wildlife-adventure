import { Outlet, useLocation, useParams } from "react-router-dom";
import Header from "./mainComponents/Header";
import Footer from "./mainComponents/Footer";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();
  const { id } = useParams();

  useEffect(() => {
    switch (pathname) {
      case "/":
        document.title = "Home || Adventure";
        break;

      case "/update-profile":
        document.title = "Update Profile || Adventure";
        break;

      case "/profile":
        document.title = "Profile || Adventure";
        break;

      case `/details/${id}`:
        document.title = "Details || Adventure";
        break;

      case "/all-data":
        document.title = "All Adventure || Adventure";
        break;

      case "/login":
        document.title = "Login || Adventure";
        break;
        
      case "/register":
        document.title = "Register || Adventure";
        break;
      case "/reset":
        document.title = "Reset || Adventure";
        break;
    }
  }, [pathname]);

  return (
    <>
      <Header />
      <main className="my-8 max-w-screen-xl mx-auto px-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
