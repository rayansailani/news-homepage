import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { mainContentContainerPadding, readMoreTextButton, textContentPadding } from "../styles";

const MainContent = () => {

    const repeatableTextSection = [
        {
            heading: "Hydrogen VS Electric Cars",
            content:"Will hydrogen-fueled cars ever catch up to EVs?"
        },
        {
            heading: "The Downsides of AI Artistry",
            content: " What are the possible adverse effects of on-demand AI image generation?"
        },
        {
            heading: "Is VC Funding Drying Up?",
            content: "Private funding by VC firms is down 50% YOY. We take a look at what that means."
        },
    ]

  return (
    <Container maxWidth="xl" sx={{ ...mainContentContainerPadding }}>
      <Grid container spacing={2}>
        <Grid item md={8}>
          <Grid container>
            <Grid item xs={12}>
              <img style={{maxWidth: '100%'}} src="assets/images/image-web-3-desktop.jpg"/>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <Typography sx={{...textContentPadding, fontWeight: "bold", textAlign:"left"}} variant="h3">The Bright Future of Web 3.0?</Typography>
            </Grid>
            <Grid item md={6}>
              <Typography color="primary" sx={{...textContentPadding}} variant="h6">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </Typography>
              <Button variant="contained" sx={{...readMoreTextButton}}>READ MORE</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4}>
            <Box>
                <Typography variant="h3" sx={{fontWeight:"bold"}}>New</Typography>

            </Box>
        </Grid>
      </Grid>
      asdfasdfhkjl
    </Container>
  );
};

export default MainContent;
