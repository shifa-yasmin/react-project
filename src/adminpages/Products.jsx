import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import Sidebar from "../components/admin/Sidebar";
import Header from "../components/admin/Header";
import SearchBar from "../components/admin/SearchBar";
import FilterButton from "../components/admin/FilterButton";
import ProductTable from "../components/admin/ProductTable";
import ProductModal from "../components/admin/ProductModal";
import Pagination from "../components/admin/Pagination";

import {
  setProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../features/productSlice";

const Products = () => {
  const dispatch = useDispatch();

  const products = useSelector(
    (state) => state.products.products
  );

  const [open, setOpen] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 5;

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/products"
      );

      dispatch(setProducts(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  const handleSave = async (product) => {
    try {
      if (editProduct) {
        const res = await axios.put(
          `http://localhost:3000/products/${editProduct.id}`,
          {
            ...product,
            id: editProduct.id,
          }
        );

        dispatch(updateProduct(res.data));
      } else {
        const res = await axios.post(
          "http://localhost:3000/products",
          product
        );

        dispatch(addProduct(res.data));
      }

      setOpen(false);
      setEditProduct(null);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    const ok = window.confirm(
      "Delete this product?"
    );

    if (!ok) return;

    try {
      await axios.delete(
        `http://localhost:3000/products/${id}`
      );

      dispatch(deleteProduct(id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (product) => {
    setEditProduct(product);
    setOpen(true);
  };

  const filteredProducts = products.filter(
    (product) => {
      const matchSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory =
        category === "All" ||
        product.category === category;

      return matchSearch && matchCategory;
    }
  );

  const lastIndex =
    currentPage * productsPerPage;

  const firstIndex =
    lastIndex - productsPerPage;

  const currentProducts =
    filteredProducts.slice(
      firstIndex,
      lastIndex
    );

  const totalPages = Math.ceil(
    filteredProducts.length /
      productsPerPage
  );

  return (
    <div className="flex bg-pink-50 min-h-screen">

      <Sidebar />

      <div className="flex-1 ml-64 p-6">

        <Header />

        <div className="flex justify-between items-center mt-6">

          <h1 className="text-3xl font-bold text-pink-600">
            Products
          </h1>

          <button
            onClick={() => {
              setEditProduct(null);
              setOpen(true);
            }}
            className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-3 rounded-xl"
          >
            + Add Product
          </button>

        </div>

        <div className="flex justify-between items-center my-6">

          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <FilterButton
            category={category}
            setCategory={setCategory}
          />

        </div>

        <ProductTable
          products={currentProducts}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={
            setCurrentPage
          }
        />

        <ProductModal
          open={open}
          onClose={() => {
            setOpen(false);
            setEditProduct(null);
          }}
          onSave={handleSave}
          editProduct={editProduct}
        />

      </div>

    </div>
  );
};

export default Products;