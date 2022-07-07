import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { CssBaseline, Drawer, Paper } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

//itemes on side menu
const listItems = [
  {
    listIcon: <HomeRoundedIcon />,
    listText: "Home",
  },
  {
    listIcon: <ShoppingBagRoundedIcon />,
    listText: "Products",
  },
];

export default function Header() {
  //menu open & close
  const [open, setOpen] = React.useState(false);

  const toggleSlider = () => {
    setOpen(!open);
  };

  const renderMobileMenu = () => {
    return (
      <Box sx={{padding : '20px 10px'}} component="div">
        <List>
          {listItems.map((listItem, index) => (
            <ListItem button key={index}>
              <ListItemIcon>{listItem.listIcon}</ListItemIcon>
              <ListItemText primary={listItem.listText} />
            </ListItem>
          ))}
        </List>
      </Box>
    );
  };

  return (
    <>
      <CssBaseline />
      <Box component="nav">
        <AppBar
          position="static"
          sx={{
            padding: { md: "19px  15px", sm: "5px" },
            backgroundColor: "#06283D",
          }}
        >
          <Toolbar>
            <Drawer open={open} anchor="left" onClose={toggleSlider}>
              {renderMobileMenu()}
            </Drawer>
            <Typography
              fontWeight="bold"
              variant="h6"
              noWrap
              marginRight="40px"
              component="div"
              sx={{ display: { xs: "none", sm: "none", md: "block" } }}
              className="nav-hover"
            >
              Home
            </Typography>
            <Typography
              fontWeight="bold"
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "none", md: "block" } }}
              className="nav-hover"
            >
              Products
            </Typography>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-haspopup="true"
                onClick={toggleSlider}
                color="inherit"
              >
                <MenuIcon fontSize="large" />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
