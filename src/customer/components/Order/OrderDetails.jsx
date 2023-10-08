import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTrackker from "./OrderTrackker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarIcon from "@mui/icons-material/Star";
const OrderDetails = () => {
  return (
    <div className="px- 5 lg:px-20">
      <div>
        <AddressCard />
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
      </div>
      <div className="py-20">
        <OrderTrackker activeStep={3} />
      </div>

      <Grid className="space-y -5" container>
        {[1, 1, 1, 1, 1, 1, 1, 1].map((item) => (
          <Grid
            item
            container
            className="shadow-xl rounded-ms p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item sx={6}>
              <div className="flex items-center space-x-4">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="https://media.modicare.com/ProductCategory/thumb/FS5026s.jpg"
                  alt=""
                />
                <div className="space-y-2 ml-5">
                  <p className="font-semibold">Noni Juice Concentrate</p>
                  <p>Seller: Well</p>
                  <p>₹ 550.00</p>
                </div>
              </div>
            </Grid>

            <Grid item>
              <Box sx={{ color: deepPurple[500] }}>
                <StarIcon sx={{ fontSize: "2rem" }} className="px-2 text-5xl" />
                <span>Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
