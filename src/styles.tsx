import { makeStyles, withStyles, Tooltip } from '@material-ui/core';
import IconSheet from "./images/icon-sheet.png";
import IconSheet2 from "./images/icon-sheet-2.png";

export const useLoginPageStyles = makeStyles({
  signUpCard: {
    maxWidth: 348,
    padding: "16px 40px",
    marginBottom: 10,
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "2fr 1fr"
  },
  card: {
    maxWidth: 348,
    padding: "16px 40px",
    marginBottom: 10
  },
  section: {
    display: "grid",
    placeItems: "center",
    height: "100vh"
  },
  cardHeader: {
    backgroundImage: `url(${IconSheet})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-98px 0",
    height: 51,
    width: 175,
    margin: "22px auto 12px"
  },
  textField: {
    marginBottom: 6
  },
  button: {
    margin: "8px 0px"
  },
  typography: {
    margin: "10px 0px"
  },
  orContainer: {
    margin: "10px 0px",
    display: "grid",
    gridTemplateColumns: "1fr auto 1fr",
    gridGap: 18,
    placeItems: "center"
  },
  orLine: {
    justifySelf: "stretch",
    height: 1,
    background: "#e6e6e6"
  },
  facebookIcon: {
    height: 16,
    width: 16,
    marginRight: 8
  }
});

export const useLayoutStyles = makeStyles((theme) => ({
    section: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        minHeight: "100%",
        overflow: "hidden"
      },
      main: {
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        flexShrink: 0,
        position: "relative",
        padding: 0,
        order: 4
      },
      childrenWrapper: {
        paddingTop: 30,
        display: "flex",
        margin: "0 auto",
        flexFlow: "row nowrap",
        maxWidth: "935px !important"
      },
      children: {
        width: "100%"
      }
}));
