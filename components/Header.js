import { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";

// auth

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();

  const [auth, setAuth] = useState(false);
  const [profileName, setProfileName] = useState("");

  const handleLogin = () => {};

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Home
          </Typography>
          {
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleLogin}
                color="inherit"
              >
                {auth ? <Typography> Login </Typography> : `${profileName}`}
                <AccountCircle style={{ margin: "0.5rem" }} />
              </IconButton>
            </div>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}
