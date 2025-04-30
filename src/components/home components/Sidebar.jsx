import React, { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router";

const Sidebar = () => {
  //men's dropdown
  const [isActive1, setIsActive1] = useState(false);
  const dropdownRef1 = useRef(null);
  //women's dropdown
  const [isActive2, setIsActive2] = useState(false);
  const dropdownRef2 = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef1.current &&
        !dropdownRef1.current.contains(event.target)
      ) {
        setIsActive1(false);
      }

      if (
        dropdownRef2.current &&
        !dropdownRef2.current.contains(event.target)
      ) {
        setIsActive2(false);
      }
      console.log("click");
    };

    document.addEventListener("pointerdown", handleClickOutside);
    return () =>
      document.removeEventListener("pointerdown", handleClickOutside);
  }, []);

  const list = [
    "Home & Lifestyle",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby’s & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  return (
    <div className="flex flex-col text-lg gap-2 ">
      <div ref={dropdownRef1} className="dropdown dropdown-right">
        <Link
          onClick={() => setIsActive1(!isActive1)}
          className={`flex items-center justify-between hover:text-red-500 ${
            isActive1 ? "text-red-500" : ""
          }`}
        >
          Men’s Fashion <MdKeyboardArrowRight />
        </Link>

        {isActive1 && (
          <ul className="dropdown-content text-lg  menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm ml-1">
            <li>
              <Link>Jeans</Link>
            </li>
            <li>
              <Link>T-shirt</Link>
            </li>
            <li>
              <Link>Shirt</Link>
            </li>
            <li>
              <Link>Panjabi</Link>
            </li>
            <li>
              <Link>Shoes</Link>
            </li>
          </ul>
        )}
      </div>

      <div ref={dropdownRef2} className="dropdown dropdown-right">
        <Link
          onClick={() => setIsActive2(!isActive2)}
          className={`flex items-center justify-between hover:text-red-500 ${
            isActive2 ? "text-red-500" : ""
          }`}
        >
          Woman's Fashion
          <MdKeyboardArrowRight />
        </Link>

        {isActive2 && (
          <ul className="dropdown-content text-lg  menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm">
            <li>
              <Link>Jeans</Link>
            </li>
            <li>
              <Link>T-shirt</Link>
            </li>
            <li>
              <Link>Shirt</Link>
            </li>
            <li>
              <Link>Shoes</Link>
            </li>
          </ul>
        )}
      </div>
      {list.map((item, index) => (
        <Link className="hover:text-red-500" key={index}>
          {item}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
