/** @format */


import Shop from "../components/Shop";
import FootbarShop from "../components/FootbarShop";

function ShopPages() {
  return (
    <div>
      <div>
        <Shop />
      </div>
      <div className="w-full mt-10">
        <FootbarShop />
      </div>
    </div>
  );
}

export default ShopPages;
