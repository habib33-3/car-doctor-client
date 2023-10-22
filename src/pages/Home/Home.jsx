import About from "./About/About";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Products from "./Products/Products";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Contact />
      <Products />
    </div>
  );
};

export default Home;
