import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import { getdata } from "../service/Imagedata";
// import { DataArray } from "@mui/icons-material";

const Header = () => {
  // const [shopData,setShopData]=useState([])
  // let shopData=getdata();
  // console.log(shopData.length)
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {/* <MenuIcon /> */}
        
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <NavLink to="/apiform">Form</NavLink>
            </Typography>
            {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <NavLink to="/">Shop</NavLink>
            </Typography> */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to="/il">list</NavLink>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           <NavLink to="/api">Api's</NavLink>
            </Typography>
            {/* <NavLink to="/list"><AddShoppingCartIcon /> </NavLink> */}
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};


export default Header;