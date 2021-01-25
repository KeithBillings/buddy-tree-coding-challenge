import { useState, useEffect } from "react";

import Link from "next/link";

// material-ui
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";

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
          <Link href="/api/auth/signin">
            {
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                {auth ? `${profileName}` : <Typography> Login </Typography>}
                <AccountCircle style={{ margin: "0.5rem" }} />
              </IconButton>
            }
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
