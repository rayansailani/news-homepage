import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import {
  blogSectionCard,
  blogSectionContainer,
  blogTextContentContainer,
  fontBold,
} from "../styles";

const BlogSection = () => {
  const blogInformation = [
    {
      name: "Reviving Retro PCs",
      content: "What happens when old PCs are given modern upgrades?",
      imageSource: "./assets/images/image-retro-pcs.jpg",
    },
    {
      name: "Top 10 Laptops of 2022",
      content: "Our best picks for various needs and budgets.",
      imageSource: "./assets/images/image-top-laptops.jpg",
    },
    {
      name: "The Growth of Gaming",
      content: "How the pandemic has sparked fresh opportunities.",
      imageSource: "./assets/images/image-gaming-growth.jpg",
    },
  ];

  return (
    <Grid container spacing={4} sx={{ ...blogSectionContainer }}>
      {blogInformation.map((blog, index) => {
        return (
          <Grid item md={4} xs={12}>
            <Box sx={{ ...blogSectionCard }}>
              <img src={blog.imageSource} />
              <Box sx={{ ...blogTextContentContainer }}>
                <Typography
                  color="primary"
                  sx={{ typography: { md: "h3", xs: "h5" } }}
                >
                  <Box fontWeight="fontWeightBold">0{index + 1} </Box>
                </Typography>
                <Typography variant="h6" sx={{ ...fontBold }}>
                  {blog.name}
                </Typography>
                <Typography variant="body1" color="primary">
                  {blog.content}
                </Typography>
              </Box>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default BlogSection;
