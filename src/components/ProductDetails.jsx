import React from "react";
import Breadcrumbs from "./Breadcrumbs";

const ProductDetails = () => {
  return (
    <div className="w-11/12 mx-auto px-4">

      <Breadcrumbs/>
      <div className="flex w-full">
        <div className="md:w-2/3">pictures</div>
        <div className="md:w-1/3">
          <section>
            <h2 className="text-2xl font-bold">Havic HV G-92 Gamepad</h2>
            <p>
              <span>stars</span>
              <span>(150)</span> | <span>in stock </span>
            </p>
            <p>$192.00</p>
            <p>
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>
          </section>

        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ProductDetails;
