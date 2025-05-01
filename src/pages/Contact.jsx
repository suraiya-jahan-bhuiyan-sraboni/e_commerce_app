import React from "react";
import { BsTelephone } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import Breadcrumbs from "../components/Breadcrumbs";
const Contact = () => {
  return (
    <div className="w-11/12 mx-auto px-4">
      <div className="py-4">
        <Breadcrumbs />
      </div>

      <div className="flex py-20 gap-6 ">
        <div className="w-1/3 flex flex-col shadow-sm p-4 ">
          <div className=" flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="bg-red-500 text-white font-bold p-2 rounded-full  ">
                <BsTelephone />
              </span>
              Call To Us
            </div>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </div>
          <div className="divider"></div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="bg-red-500 text-white font-bold p-2 rounded-full ">
                <GoMail />
              </span>
              Write To US
            </div>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
        </div>
        <form className="w-2/3 flex flex-col gap-8 shadow-sm p-4 ">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Your Name *"
              className="input bg-gray-50"
            />
            <input
              type="text"
              placeholder="Your Email *"
              className="input bg-gray-50"
            />
            <input
              type="text"
              placeholder="Your Phone *"
              className="input bg-gray-50"
            />
          </div>
          <textarea
            className="border-2 bg-gray-50 border-gray-200 resize-none p-4 "
            name="bio"
            id=""
            placeholder="Your Massage"
            rows="6"
          ></textarea>
          <button className="btn text-white bg-red-400 w-60 flex self-end hover:bg-amber-600 ">
            Send Massage
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
