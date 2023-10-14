import * as React from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const pages = ["Home", "New", "Trending", "Categories"];

const ResponsiveAppBar = () => {
  return (
    <>
      <DesktopNavbar pages={pages} />
      <MobileNavbar pages={pages} />
    </>
  );
};
export default ResponsiveAppBar;
