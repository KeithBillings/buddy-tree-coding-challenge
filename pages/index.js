import Head from "next/head";
import Image from "next/image";

// material-ui
import { useTheme } from "@material-ui/core/styles";
import {
  Typography,
  Container,
  Box,
  Grid,
  Link,
  Paper,
  ThemeProvider,
} from "@material-ui/core";

export default function Home() {
  const theme = useTheme();
  const { margin: loremMargin } = theme.lorem;

  return (
    <div>
      <Head>
        <title>Keith Billings</title>
        <link rel="icon" href="/favicon.ico" />
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
          <Link item href="#lorem">
            <Image
              src={"/down-arrow.png"}
              alt="downArrow"
              width="70"
              height="45"
            />
          </Link>
        </Grid>
        <Grid container style={{ padding: "5%", textAlign: "justify" }}>
          <Grid item id="lorem" style={{ margin: loremMargin }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
            mi non ex rhoncus aliquet ac non nibh. Aliquam mollis elit auctor,
            varius felis auctor, consectetur nunc. Fusce non facilisis lorem.
            Integer porta tellus ante, ut semper enim porttitor vitae. Proin
            gravida eros eget tortor ultricies porta. Nullam venenatis, magna
            non cursus pharetra, eros magna ultricies justo, non dictum erat
            ligula et risus. Phasellus sodales arcu lobortis condimentum
            commodo. Integer tempor pretium nibh eget pellentesque. Cras vitae
            interdum mauris. Morbi at mauris at neque dapibus suscipit. Donec
            sollicitudin accumsan odio, a interdum dui tristique et. Cras a
            aliquam arcu, sit amet sagittis ipsum. Ut sapien quam, tristique ut
            ex et, dignissim pellentesque nunc. Sed eget blandit sapien.
          </Grid>
          <Grid item style={{ margin: loremMargin }}>
            Nulla fermentum scelerisque magna nec pellentesque. Maecenas nisl
            orci, tincidunt ac lectus eget, viverra tincidunt diam. Pellentesque
            egestas sed ligula nec tristique. Aliquam velit purus, pretium sed
            ante eget, hendrerit mollis massa. Praesent aliquam dapibus ex ac
            aliquet. Nullam eu nisi semper felis molestie dignissim. Nulla
            pharetra non nisi eget rutrum. Nunc ut massa quis ante tristique
            mollis. Vivamus porta dignissim metus mollis tincidunt. Vivamus
            vitae nulla ullamcorper, convallis neque ut, iaculis justo. Etiam
            vel metus tincidunt, tempus orci vitae, interdum libero. Nulla risus
            elit, bibendum at justo quis, porta tristique nisl. Duis interdum
            diam in mauris suscipit vestibulum.
          </Grid>
          <Grid item style={{ margin: loremMargin }}>
            Aliquam turpis justo, varius sed iaculis id, auctor sed nisl.
            Praesent malesuada diam quis tempor varius. Maecenas convallis
            placerat placerat. Duis faucibus tempus scelerisque. Aliquam erat
            velit, molestie sit amet tellus ac, vulputate consequat justo. Nunc
            quam turpis, rutrum in gravida a, malesuada id neque. Suspendisse
            faucibus vitae lacus id consectetur.
          </Grid>
          <Grid item style={{ margin: loremMargin }}>
            Aenean libero erat, iaculis vel ornare a, facilisis consequat odio.
            Maecenas ullamcorper in mauris sit amet aliquam. Vestibulum
            fringilla eget purus eget finibus. Sed posuere magna arcu, ut
            posuere nunc blandit sagittis. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Integer venenatis, turpis ut finibus
            accumsan, augue tortor mollis enim, et malesuada quam mauris eu
            arcu. Nam suscipit commodo tellus quis maximus. Etiam imperdiet leo
            ut metus scelerisque iaculis. Sed ultricies lacus non sem aliquet,
            nec venenatis massa convallis. Aenean at mauris ante.
          </Grid>
          <Grid item style={{ margin: loremMargin }}>
            Morbi sollicitudin arcu dui, vel dapibus enim eleifend sed. Nam
            placerat ex id urna convallis interdum. Nullam dictum dolor in erat
            sodales, at faucibus ipsum rutrum. Vestibulum posuere, tellus sed
            vehicula sodales, justo risus finibus dolor, a pharetra orci elit in
            lorem. Donec quis ante non lacus blandit condimentum. Quisque
            bibendum elit a justo dictum ullamcorper. Aliquam sodales lectus at
            metus rutrum, quis pretium nisi consectetur. Integer cursus dui ut
            tempor interdum. Praesent tincidunt vehicula lectus in volutpat.
            Vivamus scelerisque elementum velit sit amet feugiat. Pellentesque
            vestibulum dictum est, at facilisis massa lobortis sed. Morbi id
            diam egestas, venenatis turpis interdum, condimentum arcu.
            Suspendisse vitae tortor quis nunc cursus vulputate at in augue. In
            tincidunt finibus purus, ac sodales lacus vulputate quis. Nam ac
            sapien eu sem ultrices ullamcorper.
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
