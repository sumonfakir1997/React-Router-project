import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* <h2>this is home page compoments </h2> */}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
