import { makeStyles } from "@material-ui/core";
import IconSheet2 from "../../../images/icon-sheet-2.png";

const iconProps = {
  backgroundImage: `url(${IconSheet2})`,
  backgroundRepeat: "no-repeat",
  height: 12,
};

export const useGridPostStyles = makeStyles((theme) => ({
  image: {
    width: "100%",
    userSelect: "none",
  },
  gridPostContainer: {
    position: "relative",
  },
  gridPostOverlay: {
    [theme.breakpoints.down("xs")]: {
      gridAutoFlow: "row",
      alignContent: "space-evenly",
    },
    position: "absolute",
    display: "grid",
    placeItems: "center",
    gridAutoFlow: "column",
    width: "100%",
    height: "100%",
    justifyContent: "space-evenly",
    "&:hover": {
      background: "rgba(0,0,0,0.6)",
      cursor: "pointer",
      "& > div": {
        opacity: 1,
      },
    },
  },
  gridPostInfo: {
    color: "#ffffff",
    display: "grid",
    gridAutoFlow: "column",
    gridGap: 5,
    placeItems: "center",
    opacity: 0,
  },
  likes: {
    ...iconProps,
    backgroundPosition: "-328px -239px",
    backgroundSize: "355px 344px",
    height: 16,
    width: 16,
  },
  comments: {
    ...iconProps,
    backgroundPosition: "-327px -203px",
    backgroundSize: "355px 344px",
    height: 16,
    width: 18,
  },
}));
