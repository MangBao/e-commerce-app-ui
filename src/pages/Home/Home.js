import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Products from "../../components/Products/Products";

const Home = () => {
  return (
    <div className="overflow-auto pr-0">
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="relative flex-grow">
          <Banner />
          <Products />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
