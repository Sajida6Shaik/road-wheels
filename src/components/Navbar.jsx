import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Menu,
  MenuItem,
  Fab,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import PersonIcon from "@mui/icons-material/Person";

const StyledAppBar = styled(AppBar)({
  backgroundColor: "black",
  "&:hover": {
    backgroundColor: "darkblue",
  },
});

const Logo = styled("img")({
  height: "50px", // Adjust the height of the logo as needed
  marginRight: "auto", // Pushes the links to the right
});

function Navbar() {
  const [token, setToken] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const open = Boolean(anchorEl);

  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("JWT");
    let username = localStorage.getItem("username");
    let role = localStorage.getItem("role");
    setUsername(username);
    setToken(token);
    setRole(role);
  });

  const handleLogout = (e) => {
    setAnchorEl(null);
    e.preventDefault();
    localStorage.clear();
    navigate("/login");
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <AppBar position="fixed" color="" sx={{ marginBottom: 10 }}>
        <Toolbar>
          <Logo
            onClick={() => navigate("/")}
            src={require("../assests/logo-car.jpg")}
            alt="Road Wheels Logo"
          />{" "}
          <Typography variant="h5">
            Road Wheels - Make your trip Enjoyable
          </Typography>
          <Box
            sx={{
              marginLeft: "auto",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {role === "ADMIN" && (
              <Button onClick={() => navigate("/admin/dashboard")}>
                Dashboard
              </Button>
            )}
            {role === "HOST" && (
              <Button onClick={() => navigate("/host/dashboard")}>
                Dashboard
              </Button>
            )}
            {role !== "HOST" && role !== "ADMIN" && (
              <Button onClick={() => navigate("/carlist")}>cars</Button>
            )}
            {token && (
              <>
                <Typography variant="h6">Hi, Welcome {username}</Typography>
              </>
            )}
            {!token && (
              <>
                <Button color="inherit" component={Link} to="/login">
                  Login
                </Button>
              </>
            )}

            <Fab
              size="small"
              onClick={handleClick}
              color="primary"
              aria-label="add"
            >
              <PersonIcon />
            </Fab>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem
                onClick={() => {
                  setAnchorEl(null);
                  navigate("/about");
                }}
              >
                About
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/services");
                  setAnchorEl(null);
                }}
              >
                Services
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/testimonials");
                  setAnchorEl(null);
                }}
              >
                Testimonials
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/contact-us");
                  setAnchorEl(null);
                }}
              >
                Contact us
              </MenuItem>
              {token && <MenuItem onClick={handleLogout}>Logout</MenuItem>}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default Navbar;
