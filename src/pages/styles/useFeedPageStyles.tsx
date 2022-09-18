import { makeStyles } from "@material-ui/core";

export const useFeedPageStyles = makeStyles((theme) => ({
    container: {
      display: "grid",
      // gridAutoFlow: "column",
      gridTemplateColumns: "minmax(auto, 600px) 300px",
      gridGap: 35,
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "minmax(auto, 600px)",
        justifyContent: "center"
      },
      "&.slickSlider": {
        display: "grid"
      }
    },
    sidebarContainer: {
      display: "grid",
      margin: "0px 28px 24px",
      justifyContent: "center",
      gridTemplateColumns: "minmax(auto, 300px)"
    },
    sidebarWrapper: { position: "fixed", width: 293 }
}));