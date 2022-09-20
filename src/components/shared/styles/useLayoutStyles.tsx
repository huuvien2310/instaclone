import { makeStyles } from "@material-ui/core";

export const useLayoutStyles = makeStyles({
  section: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    minHeight: "100%",
    overflow: "hidden",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    flexShrink: 0,
    position: "relative",
    padding: 0,
    order: 4,
  },
  childrenWrapper: {
    paddingTop: 30,
    display: "flex",
    margin: "0 auto",
    flexFlow: "row nowrap",
    maxWidth: "935px !important",
  },
  children: {
    width: "100%",
  },
});
