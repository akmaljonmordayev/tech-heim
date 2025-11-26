import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Categories from "./Components/Categories/Categories";
import TopBrands from "./Components/TopBrands/TopBrands";
import NewProducts from "./Components/NewProducts/NewProducts";
import BestSeller from "./Components/BestSeller/BestSeller";
import Blogs from "./Components/Blogs/Blogs";

function App() {
  return (
    <>
      <Header />
      <Categories />
      <NewProducts />
      <BestSeller />
      <TopBrands />
      <Blogs />
      <Footer />
    </>
  );
}

export default App;
