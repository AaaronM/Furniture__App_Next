import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="p-5">
        <div className="p-5">
          <h3 className="text-[30px] mb-3 font-thin">What is Concepts </h3>
          <p className="text-gray-500 text-[13px] ">
            Concepts. A curated and crafted experience that connects design with
            the individuals who seek it. Founded in the Pacific Northwest in
            2011, our company grew from a desire to modernize the furniture
            industry. Focusing on quality and contemporary design, we offer
            sophisticated home decor to help create your inspired lifestyle.
          </p>
        </div>

        {/* ___FOOTER____ */}
        <div className="flex justify-evenly bg-gray  text-dark  py-[30px]">
          <div>
            <h3>Help</h3>
            <p>Contact US</p>
            <p>FAQ</p>
            <p>Store Policy</p>
            <p>Product Care</p>
          </div>

          <div>
            <h3>Discover</h3>
            <p>AR 3D Planner</p>
            <p>Trade</p>
            <p>Sustainability</p>
            <p>Membership</p>
          </div>

          <div>
            <h3>Join our mailing list</h3>
            <p>
              get the latest updates on promotions, new products, news <br />{" "}
              and much more.
            </p>
            <p>Form</p>
            <div className="flex">
              <p>ICON</p>
              <p>ICON</p>
              <p>ICON</p>
              <p>ICON</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
