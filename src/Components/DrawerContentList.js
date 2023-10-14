import React from "react";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { hamburgerMenuStyles } from "../styles";

const DrawerContentList = ({ pages, toggleDrawerState }) => {
  return (
    <Box>
      <Box sx={{ ...hamburgerMenuStyles }}>
        <IconButton size="small" onClick={toggleDrawerState(false)}>
          <img src="./assets/images/icon-menu-close.svg" />
        </IconButton>
      </Box>
      <List>
        {pages.map((page) => {
          return (
            <ListItem key={page}>
              <ListItemButton>
                <ListItemText primary={page} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default DrawerContentList;
