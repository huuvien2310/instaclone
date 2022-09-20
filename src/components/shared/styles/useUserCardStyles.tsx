import { makeStyles } from "@material-ui/core";

export const useUserCardStyles = makeStyles({
  avatar: {
    width: ({ avatarSize = 44 }: any) => avatarSize,
    height: ({ avatarSize = 44 }) => avatarSize,
  },
  typography: {
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  container: {
    display: "grid",
    gridAutoFlow: "column",
    gridTemplateColumns: "min-content auto",
    gridGap: 12,
    alignItems: "center",
    width: "100%",
  },
  nameWrapper: {
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
});
