import { Pencil, Trash2 } from "lucide-react";

const ProductTable = ({
  products,
  onDelete,
  onEdit,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-6 overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b text-left text-gray-500">
            <th className="py-3">Image</th>
            <th className="py-3">Product</th>
            <th className="py-3">Category</th>
            <th className="py-3">Price</th>
            <th className="py-3">Ingredients</th>
            <th className="py-3">Status</th>
            <th className="py-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.length === 0 ? (
            <tr>
              <td
                colSpan="7"
                className="text-center py-10 text-gray-400"
              >
                No Products Found
              </td>
            </tr>
          ) : (
            products.map((product) => (
              <tr
                key={product.id}
                className="border-b hover:bg-pink-50 transition"
              >
                <td className="py-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-14 h-14 rounded-xl object-cover"
                  />
                </td>

                <td className="py-4 font-semibold">
                  {product.name}
                </td>

                <td className="py-4">
                  <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm">
                    {product.category}
                  </span>
                </td>

                <td className="py-4 font-semibold text-pink-600">
                  ${product.price}
                </td>

                <td className="py-4">
                  {product.ingredients.join(", ")}
                </td>

                <td className="py-4">
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                    Active
                  </span>
                </td>

                <td className="py-4">
                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() => onEdit(product)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      onClick={() => onDelete(product.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;