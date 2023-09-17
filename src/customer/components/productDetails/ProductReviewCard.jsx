import { Avatar, Box, Grid, Rating } from "@mui/material";
import React from "react";

const ProductReviewCard = () => {
  return (
    <div className="text-left">
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              color="secondary"
              className="text-white"
              sx={{ width: 56, height: 56 }}
            >
              T
            </Avatar>
          </Box>
        </Grid>

        <Grid item xs={9}>
          <div className="space-y-2 ">
            <div>
              <p className="text-lg font-semibold">Tarun</p>
              <p>September 15, 2023</p>
            </div>
          </div>
          <div className="flex">
            <Rating value={4.5} name="half-rating" readOnly precision={0.5} />
            4.5 out of 5
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            corrupti. Facilis vitae neque libero eos totam. Laboriosam atque
            tempore qui. Id assumenda vero cupiditate corporis, accusamus atque
            sed quam sit!
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
