import { useRouter } from "next/router";
import Link from "next/link";

import { Box, Typography } from "@material-ui/core";

const Index = () => {
  const router = useRouter();
  const { index } = router.query;

  return (
    <Box style={{ margin: "25%", textAlign: "center" }}>
      <Typography variant="h4">
        Example Dynamic Route with an index of:
      </Typography>
      <Typography variant="h1">{index}</Typography>
      <Typography>
        <Link href="/">
          <a>{"<"} Back</a>
        </Link>
      </Typography>
    </Box>
  );
};

export default Index;
