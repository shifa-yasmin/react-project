import { Funnel } from "lucide-react";

const FilterButton = ({
  category,
  setCategory,
}) => {
  return (
    <div className="flex items-center gap-3">

      <Funnel
        size={18}
        className="text-pink-500"
      />

      <select
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
        className="border border-pink-200 rounded-xl px-4 py-3 outline-none focus:border-pink-500"
      >
        <option value="All">
          All Categories
        </option>

        <option value="Desserts">
          Desserts
        </option>

        <option value="Drinks">
          Drinks
        </option>

        <option value="Pudding">
          Pudding
        </option>
      </select>

    </div>
  );
};

export default FilterButton;