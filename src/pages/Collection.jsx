import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets/frontend_assets/assets";

function Collection() {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 border-t pt-10">
      <div className="min-w-60">
        <p onClick={()=>setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">
          FILTERS <img src={ assets.dropdown_icon } className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} />
        </p>

        <div
          className={`border border-gray-300 pl-5 py-3 mt-4 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" />
              Men
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" />
              Women
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" />
              Kids
            </p>
          </div>
        </div>
        <div
          className={`border border-gray-300 pl-5 py-3 mt-4 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">SUBCATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" />
              Top-Wear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" />
              Bottom-wear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" />
              Winter-wear
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
