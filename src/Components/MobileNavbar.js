import { Box, Button, Container, Drawer, IconButton } from "@mui/material";
import React, { useState } from "react";
import { drawerCustomClassStyles, mobileNavbarDisplay } from "../styles";
import DrawerContentList from "./DrawerContentList";

const MobileNavbar = ({ pages }) => {
  const [drawerState, setDrawerState] = useState(false);
  const toggleDrawerState = (action) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerState(action);
  };
  return (
    <Container sx={{ ...mobileNavbarDisplay }}>
      <Box sx={{ flex: 1 }}>
        <img src="assets/images/logo.svg" />
      </Box>
      <IconButton onClick={toggleDrawerState(true)}>
        <img src="./assets/images/icon-menu.svg" />
      </IconButton>
      <Drawer
        anchor="right"
        open={drawerState}
        onClose={toggleDrawerState(false)}
        sx={{
          ...drawerCustomClassStyles,
        }}
      >
        <DrawerContentList
          pages={pages}
          toggleDrawerState={toggleDrawerState}
        />
      </Drawer>
    </Container>
  );
};

export default MobileNavbar;
