import { useEffect, useState } from "react";

const ProductModal = ({
  open,
  onClose,
  onSave,
  editProduct,
}) => {
  const [form, setForm] = useState({
    name: "",
    category: "Desserts",
    price: "",
    image: "",
    ingredients: "",
  });

  useEffect(() => {
    if (editProduct) {
      setForm({
        name: editProduct.name,
        category: editProduct.category,
        price: editProduct.price,
        image: editProduct.image,
        ingredients: editProduct.ingredients.join(", "),
      });
    } else {
      setForm({
        name: "",
        category: "Desserts",
        price: "",
        image: "",
        ingredients: "",
      });
    }
  }, [editProduct]);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      ...form,
      price: Number(form.price),
      ingredients: form.ingredients
        .split(",")
        .map((item) => item.trim()),
    };

    onSave(product);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-lg p-6">

        <h2 className="text-2xl font-bold text-pink-600 mb-6">
          {editProduct ? "Edit Product" : "Add Product"}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Product Name"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
            className="w-full border rounded-xl p-3 outline-none focus:border-pink-500"
            required
          />

          <select
            value={form.category}
            onChange={(e) =>
              setForm({
                ...form,
                category: e.target.value,
              })
            }
            className="w-full border rounded-xl p-3 outline-none focus:border-pink-500"
          >
            <option>Desserts</option>
            <option>Drinks</option>
            <option>Pudding</option>
          </select>

          <input
            type="number"
            placeholder="Price"
            value={form.price}
            onChange={(e) =>
              setForm({
                ...form,
                price: e.target.value,
              })
            }
            className="w-full border rounded-xl p-3 outline-none focus:border-pink-500"
            required
          />

          <input
            type="text"
            placeholder="/dragonp.jpeg"
            value={form.image}
            onChange={(e) =>
              setForm({
                ...form,
                image: e.target.value,
              })
            }
            className="w-full border rounded-xl p-3 outline-none focus:border-pink-500"
            required
          />

          <textarea
            rows="3"
            placeholder="Dragon Fruit, Cream, Milk"
            value={form.ingredients}
            onChange={(e) =>
              setForm({
                ...form,
                ingredients: e.target.value,
              })
            }
            className="w-full border rounded-xl p-3 outline-none focus:border-pink-500"
          />

          <div className="flex justify-end gap-3 pt-4">

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-gray-200 hover:bg-gray-300"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-pink-500 hover:bg-pink-600 text-white"
            >
              {editProduct ? "Update" : "Add Product"}
            </button>

          </div>
        </form>

      </div>
    </div>
  );
};

export default ProductModal;