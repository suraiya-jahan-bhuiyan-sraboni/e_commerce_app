// import React from "react";
// import { Link } from "react-router";

// const Breadcrumbs = ({ title, product }) => {
//   return (
//     <div className="text-sm text-gray-600 my-4">
//       <div className="text-xl">
//         <Link to="/">Home</Link>
//         {product && <Link to="/products"> / Products</Link>} /
//         <span className="text-blue-500 font-semibold">{title}</span>
//       </div>
//     </div>
//   );
// };

// export default Breadcrumbs;

import React from "react";
import { Link, useLocation } from "react-router";

const Breadcrumbs = ({ isNotFound = false }) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const formatName = (str) => str.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return (
    <div className="text-sm text-gray-600 my-4">
      <ul className="flex space-x-2">
        <li>
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>
        </li>
        {isNotFound ? (
          <li className="flex items-center space-x-2">
            <span>/</span>
            <span className="text-red-500">404 Error</span>
          </li>
        ) : (
          pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;

            return (
              <li key={index} className="flex items-center space-x-2">
                <span>/</span>
                {isLast ? (
                  <span className="text-gray-500">{formatName(name)}</span>
                ) : (
                  <Link to={routeTo} className="text-blue-600 hover:underline">
                    {formatName(name)}
                  </Link>
                )}
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
