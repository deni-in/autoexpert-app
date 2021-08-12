import React, { useState } from "react";
import { Box, Toolbar, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { alpha, makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import HeaderUserAgent from "./HeaderUserAgent";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchRequest } from "../../redux/features/requests";
import HeaderUser from '../DefaultComponents/Header/HeaderUser';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function HeaderBoxAgent() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const handleSearch = () => {
    console.log(search);
    dispatch(searchRequest(search));
  };

  handleSearch();

  return (
    <>
      <Box component='header' style={{ backgroundColor: "rgba(0, 0, 0, .7)", backdropFilter: "blur(15px)", marginBottom: 20, color: 'white'}} >
        <Box className={classes.root}>
          <Toolbar>
            <IconButton
              edge='start'
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>

              <NavLink to="/">
                LOGO
              </NavLink>
            </Typography>
            <Box className={classes.search}>
              <Box className={classes.searchIcon}>
                <SearchIcon />
              </Box>
              <InputBase
                placeholder="Search…"
                onChange={(e) => setSearch(e.target.value)}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </Box>
            <HeaderUserAgent />
          </Toolbar>
        </Box>
      </Box>
    </>
  );
}

export default HeaderBoxAgent;
