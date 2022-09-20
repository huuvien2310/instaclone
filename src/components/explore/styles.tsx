import { makeStyles } from "@material-ui/core";
import IconSheet from "../../images/icon-sheet.png";

export const useExploreGridStyles = makeStyles((theme) => ({
  article: {
    display: "grid",
    gridTemplateColumns: "minmax(auto, 935px)",
    width: "100vw",
  },
  postContainer: {
    [theme.breakpoints.down("sm")]: {
      gridGap: 2,
    },
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: 20,
  },
  typography: {
    fontWeight: 600,
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(1),
  },
}));

export const useExploreSuggestionsStyles = makeStyles((theme) => ({
  container: {
    width: 935,
  },
  typography: {
    fontWeight: 600,
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(1),
  },
}));

export const useSearchStyles = makeStyles({
  input: {
    height: 28,
    fontSize: "14px !important",
    background: "rgba(var(--b3f,250,250,250),1)",
    border: "solid 1px rgba(var(--b6a,219,219,219),1)",
    borderRadius: 3,
    color: "rgba(var(--i1d,38,38,38),1)",
    outline: 0,
    padding: "3px 3px 3px 26px",
    zIndex: 2,
  },
  searchIcon: {
    backgroundImage: `url(${IconSheet})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-167px -306px",
    height: 10,
    width: 10,
    left: 11,
    position: "absolute",
    top: 9,
    zIndex: 2,
  },
  clearIcon: {
    backgroundImage: `url(${IconSheet})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-250px -98px",
    height: 20,
    width: 20,
    cursor: "pointer",
  },
});
