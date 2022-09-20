import { Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import React from "react";
import FollowSuggestions from "../shared/FollowSuggestions";

function ExploreSuggestions() {
  return (
    <Box sx={{ display: { xs: "none", sm: "block" } }}>
      <div>
        <Typography>Discover People</Typography>
        <FollowSuggestions />
      </div>
    </Box>
  );
}

export default ExploreSuggestions;
