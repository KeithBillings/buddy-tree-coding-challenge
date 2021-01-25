import { useState, useEffect } from "react";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";

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

export default function Header() {
  const [session] = useSession();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Link href="/">
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              <IconButton color="inherit">Home</IconButton>
            </Typography>
          </Link>
          <IconButton color="inherit">
            {session ? (
              <>
                <Typography onClick={signOut}>
                  Welcome {session.user.name}
                </Typography>
                {session.user.image && (
                  <img
                    onClick={signOut}
                    src={session.user.image}
                    style={{
                      width: "25px",
                      borderRadius: "50%",
                      margin: "0.5rem",
                    }}
                  />
                )}
              </>
            ) : (
              <>
                <Typography onClick={() => signIn("github")}>
                  Login With Github
                </Typography>
                <AccountCircle style={{ margin: "0.5rem" }} />
              </>
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
