import React, { useState } from "react";
import Breadcrumbs from "./Breadcrumbs";
import { FaRegHeart } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { LuUndo2 } from "react-icons/lu";
const ProductDetails = () => {
  const [selectedColor, setSelectedColor] = useState("red");
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(2);
  return (
    <div className="w-11/12 mx-auto px-4">
      <Breadcrumbs title="Havic HV G-92 Gamepad" product />
      <div className="flex w-full py-10">
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
          <div className="divider"></div>

          <section className="flex flex-col gap-3 ">
            {/* Colours */}
            <div className="flex space-x-2">
              {["black", "red", "blue"].map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-6 h-6 rounded-full border-2 ${
                    selectedColor === color ? "border-black" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                ></button>
              ))}
            </div>
            {/* Sizes */}
            <div className="text-sm font-medium">Size:</div>
            <div className="flex space-x-2">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 border rounded ${
                    selectedSize === size
                      ? "bg-red-500 text-white"
                      : "border-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center border rounded">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-1 cursor-pointer border-r font-bold "
                >
                  -
                </button>
                <span className="px-4">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-1 cursor-pointer border-l font-bold "
                >
                  +
                </button>
              </div>
              <button className="bg-red-500 text-white px-6 py-2 rounded font-semibold">
                Buy Now
              </button>
              <button className="border p-2 rounded">
                <FaRegHeart />
              </button>
            </div>
          </section>

          <section>
            <div className="border rounded  space-y-4">
              <div className="flex items-start gap-3 p-3">
                <FaTruckFast className="w-8 h-8 mt-2 " />
                <div>
                  <p className="font-medium">Free Delivery</p>
                  <p className="text-sm text-gray-600">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
              <hr />
              <div className="flex items-start space-x-3">
               <LuUndo2  className="w-6 h-6 mt-2" />
                <div>
                  <p className="font-medium">Return Delivery</p>
                  <p className="text-sm text-gray-600">
                    Free 30 Days Delivery Returns.
                    <span className="underline cursor-pointer">Details</span>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ProductDetails;
