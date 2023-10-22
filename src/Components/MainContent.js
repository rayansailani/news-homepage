import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import {
  mainContentContainerPadding,
  readMoreTextButton,
  textContentPadding,
  fontBold,
  orangeColor,
  newSectionCard,
  whiteColour,
  padding1rem,
  margin2rem,
} from "../styles";
import BlogSection from "./BlogsSection";

const MainContent = () => {
  const repeatableTextSection = [
    {
      heading: "Hydrogen VS Electric Cars",
      content: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      heading: "The Downsides of AI Artistry",
      content:
        " What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      heading: "Is VC Funding Drying Up?",
      content:
        "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ ...mainContentContainerPadding }}>
      <Grid container spacing={2}>
        <Grid item md={8} xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <img
                style={{ maxWidth: "100%" }}
                src={
                  window.innerWidth > 650
                    ? "assets/images/image-web-3-desktop.jpg"
                    : "assets/images/image-web-3-mobile.jpg"
                }
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <Typography
                sx={{
                  ...textContentPadding,
                  textAlign: "left",
                  typography: { xs: "h3", md :" h2"},
                  marginTop: "1.2rem"
                }}
                variant="h2"
              >
                <Box fontWeight="fontWeightBold">
                  The Bright Future of Web 3.0?{" "}
                </Box>
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Typography
                color="primary"
                sx={{ ...textContentPadding }}
                variant="h6"
              >
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </Typography>
              <Button variant="contained" sx={{ ...readMoreTextButton }}>
                READ MORE
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4} xs={12}>
          <Box sx={{ ...newSectionCard }}>
            <Typography
              variant="h3"
              sx={{ ...fontBold, ...orangeColor, margin: "2rem 0" }}
            >
              New
            </Typography>
            {repeatableTextSection.map((section) => {
              return (
                <Box sx={{ ...margin2rem }}>
                  <Typography
                    variant="h5"
                    sx={{ ...whiteColour, marginBottom: "1rem" }}
                  >
                    {section.heading}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ ...whiteColour, marginBottom: "1rem" }}
                  >
                    {section.content}
                  </Typography>
                  <Divider sx={{ background: "white !important" }} />
                </Box>
              );
            })}
          </Box>
        </Grid>
      </Grid>
      <BlogSection />
    </Container>
  );
};

export default MainContent;
