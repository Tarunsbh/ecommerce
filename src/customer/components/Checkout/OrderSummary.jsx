import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Button } from "@mui/material";
import CartItem from "../Cart/CartItem";

const OrderSummary = () => {
  return (
    <div className="text-left">
      <div className="p-5 shadow-lg roundeds-md border">
        <AddressCard />
      </div>

      <div>
        <div className="lg:grid grid-cols-3 mt-5 relative">
          <div className="col-span-2">
            {[1, 1, 1, 1, 1].map((item) => (
              <CartItem />
            ))}
          </div>
          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 j">
            <div className="border">
              <p className="Uppercase opacity-60 pb-4 mt-5 font-bold text-left">
                Price Details
              </p>
              <hr />
              <div className="space-y-3 font-semibold ">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price</span>
                  <span> ₹ 2595.00</span>
                </div>
              </div>
              <div className="space-y-3 font-semibold ">
                <div className="flex justify-between pt-3">
                  <span>Discount</span>
                  <span className="text-green-600"> ₹ 595.00</span>
                </div>
              </div>
              <div className="space-y-3 font-semibold ">
                <div className="flex justify-between pt-3">
                  <span>Delivery Charges</span>
                  <span className="text-green-600">Free</span>
                </div>
              </div>
              <hr className="mx-auto w-80 mt-2" />
              <div className="space-y-3 font-semibold mb-10">
                <div className="flex justify-between pt-3 font-bold  text-black">
                  <span>Total Amount</span>
                  <span> ₹ 2000.00</span>
                </div>
              </div>
              <Button
                className="w-full mt-5"
                variant="contained"
                sx={{ px: "2.5rem", py: ".7rem", bgcolor: "primary" }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
