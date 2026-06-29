import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import Footer from "../components/Footer";

const CategoriesPage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-24">
        <Categories />
      </div>
      <Footer />
    </>
  );
};

export default CategoriesPage;