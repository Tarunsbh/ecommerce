import React from "react";
import { IconButton, Button } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://media.modicare.com/ProductCategory/thumb/953_small.jpg"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">
            Face Pack With Neem & Rosemary (Sensitive & Acne Prone Skin)
          </p>
          <p className="opacity-70 mt-2 text-left">
            Seller: Fruit Of The Earth
          </p>
          <div className="flex space-x-5 items-center text-gray-900 pt-6">
            <p className="font-semibold">₹ 260.00</p>
            <p className="opacity-50 line-through">₹ 300.00</p>
            <p className="text-green-600 font-semibold">10% Off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">3</span>
          <IconButton style={{ color: "blue" }}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <Button style={{ color: "blue" }}>Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
