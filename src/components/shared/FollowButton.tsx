import React from "react";
import { Button } from "@material-ui/core";
import { useFollowButtonStyles } from "./styles/useFollowButtonStyles";

function FollowButton({ side }: any) {
  const classes = useFollowButtonStyles({ side });

  return (
    <Button
      variant={side ? "text" : "contained"}
      color="primary"
      className={classes.button}
      fullWidth
    >
      Follow
    </Button>
  );
}

export default FollowButton;
