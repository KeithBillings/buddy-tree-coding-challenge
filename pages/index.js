import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// material-ui
import { useTheme } from "@material-ui/core/styles";
import {
  Typography,
  Container,
  Box,
  Grid,
  Paper,
  ThemeProvider,
} from "@material-ui/core";

// example api
import loremData from "./api/loremData";

export default function Home() {
  const theme = useTheme();
  const { margin: loremMargin } = theme.lorem;

  return (
    <div>
      <Head>
        <title>Keith Billings</title>
      </Head>
      <Grid
        container
        spacing={1}
        alignContent="center"
        alignItems="center"
        style={{ minHeight: "90vh", maxWidth: "100%" }}
      >
        <Grid item xs>
          <Typography align="center" variant="h2">
            Keith Billings
          </Typography>
          <Typography align="center" variant="h6">
            Coding Demo for BuddyTree
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={1} alignContent="center" alignItems="center">
        <Grid align="center" item xs>
          <a item href="/#lorem">
            <Image
              src={"/down-arrow.png"}
              alt="downArrow"
              width="70"
              height="45"
            />
          </a>
        </Grid>
        <Grid container style={{ padding: "5%", textAlign: "justify" }}>
          <Grid item xs style={{ margin: loremMargin }}>
            <Typography variant="h5">
              Mapping Over Example Data From An API
            </Typography>
          </Grid>
          {loremData.map((ipsum, index) => {
            return (
              <Grid key={index} item id="lorem" style={{ margin: loremMargin }}>
                <Typography key={index} variant="h6">
                  <Link href={`/exampleroute/${index}`}>
                    <a>Click for example route {index}</a>
                  </Link>
                </Typography>
                {ipsum}
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
}
