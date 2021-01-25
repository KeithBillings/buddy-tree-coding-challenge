import { useState, useEffect } from "react";
import Link from "next/link";

// material-ui
import { Grid, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

function List() {
  const [loremData, setLoremData] = useState([]);

  const theme = useTheme();
  const { margin: loremMargin } = theme.lorem;

  useEffect(() => {
    async function fetchLoremData() {
      const response = await fetch(
        "https://baconipsum.com/api/?type=all-meat&paras=4"
      );
      const loremResonse = await response.json();
      setLoremData(loremResonse);
    }
    fetchLoremData();
  }, []);

  return loremData.map((ipsum, index) => {
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
  });
}
export default List;
