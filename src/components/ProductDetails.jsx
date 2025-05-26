import React, { useState } from "react";
import Breadcrumbs from "./Breadcrumbs";
import { FaRegHeart } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { LuUndo2 } from "react-icons/lu";
import { Link } from "react-router";
import HomeSectionHeading from "./home components/HomeSectionHeading";
import ProductCard from "./ProductCard";
import img1 from "../assets/image 57.png";
import img2 from "../assets/image 58.png";
import img3 from "../assets/image 59.png";
import img4 from "../assets/image 61.png";
import img5 from "../assets/image 63.png";

const ProductDetails = () => {
  const [selectedColor, setSelectedColor] = useState("red");
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(2);
  // const [image,setImage] = useState('');

  return (
    <div className="w-11/12 mx-auto px-4">
      <Breadcrumbs title="Havic HV G-92 Gamepad" product />
      <div className="flex w-full py-10 gap-10">
        <div className="md:w-2/3  flex gap-6 ">
          <div className="w-1/5 flex flex-col justify-between ">
            {[img1, img2, img3, img4].map((itm) => (
              <div className=" bg-gray-100 flex justify-center items-center p-3  ">
                <img src={itm} alt="" />
              </div>
            ))}
          </div>
          <div className=" w-4/5 bg-gray-100 flex items-center justify-center ">
            <img src={img5} alt="" />
          </div>
        </div>
        <div className="md:w-1/3">
          <section className=" flex flex-col gap-3">
            <h2 className="text-2xl font-bold">Havic HV G-92 Gamepad</h2>
            <p>
              <span>stars</span>
              <span>(150)</span> |{" "}
              <span className="text-green-500">in stock </span>
            </p>
            <p className="text-xl font-semibold">$192.00</p>
            <p className="text-sm">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>
          </section>
          <div className="divider"></div>

          <section className="flex flex-col gap-6 ">
            {/* Colours */}
            <div className="flex space-x-2 items-center">
              <div className="text-xl font-medium">Colours :</div>
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
            <div className="flex space-x-2 items-center">
              <div className="text-xl font-medium">Size :</div>

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

          <section className="mt-8">
            <div className="border rounded">
              <div className="flex items-start gap-3 p-6">
                <FaTruckFast className="w-8 h-8 mt-2 " />
                <div>
                  <p className="font-medium">Free Delivery</p>
                  <Link className="text-sm text-gray-600">
                    Enter your postal code for Delivery Availability
                  </Link>
                </div>
              </div>
              <hr />
              <div className="flex items-center gap-3 p-6">
                <LuUndo2 className="w-6 h-6 mt-2" />
                <div>
                  <p className="font-medium">Return Delivery</p>
                  <p className="text-sm text-gray-600">
                    Free 30 Days Delivery Returns.
                    <Link className="underline cursor-pointer">Details</Link>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="">
        <HomeSectionHeading title="Related items" />
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 items-center justify-around gap-4 py-10">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
