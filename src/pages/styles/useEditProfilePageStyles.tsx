import { makeStyles } from "@material-ui/core";

const sectionItem = {
  display: "grid",
  gridAutoFlow: "column",
  gridGap: 30,
  placeItems: "start end",
  marginBottom: 16,
  gridTemplateColumns: "minmax(auto, 150px) minmax(auto, 340px)",
};
const typography = {
  fontWeight: 600,
};
const justifySelfStart = {
  justifySelf: "start",
};
const form = {
  display: "grid",
};

export const useEditProfilePageStyles = makeStyles((theme) => ({
  section: {
    display: "grid",
    gridAutoFlow: "column",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "minmax(48px, max-content) 0px auto",
    },
    [theme.breakpoints.up("sm")]: {
      gridTemplateColumns: "minmax(220px, max-content) auto",
    },
    border: "1px solid #dbdbdb",
  },
  permanentDrawerPaper: {
    borderRight: "1px solid #dbdbdb !important",
    left: "unset !important",
    top: "unset !important",
    position: "relative",
  },
  permanentDrawerRoot: {
    height: "100% !important",
    "& div": {
      zIndex: "unset !important",
    },
  },
  temporaryDrawer: {
    "& div": {
      width: "220px !important",
    },
  },
  listItemButtonSelected: {
    "& span": {
      fontWeight: 600,
    },
  },
  listItemButton: {},
  menuButton: {
    [theme.breakpoints.up("sm")]: {
      display: "none !important",
    },
    marginLeft: "unset !important",
    "&:hover": {
      background: "none !important",
    },
  },
  container: {
    background: "#ffffff",
    display: "grid",
    justifyContent: "start",
    padding: "30px !important",
  },
  sectionItem: {
    ...sectionItem,
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  form,
  typography,
  justifySelfStart,
  sectionItemWrapper: {
    ...sectionItem,
    [theme.breakpoints.down("xs")]: {
      display: "unset",
    },
  },
  bio: {
    fontWeight: 600,
  },
  textFieldInput: {
    padding: "10px !important",
  },
  textField: {
    alignSelf: "center",
  },
  pictureSectionItem: {
    ...sectionItem,
    placeItems: "center end",
    [theme.breakpoints.down("xs")]: {
      gridGap: 20,
      gridTemplateColumns: "minmax(auto, 38px) minmax(auto, 340px)",
    },
  },
  typographyChangePic: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  listContainer: {},
}));
