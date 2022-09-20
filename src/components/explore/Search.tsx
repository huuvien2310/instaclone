import { InputBase } from "@material-ui/core";
import { Box } from "@mui/system";
import React from "react";
import { LoadingIcon } from "../../icons";
import { useSearchStyles } from "./styles";

export default function Search() {
  const classes = useSearchStyles();
  const [loading] = React.useState(false);
  const [query, setQuery] = React.useState("");

  function handleClearInput() {
    setQuery("");
  }

  return (
    <Box
      sx={{ display: { xs: "none", sm: "block" } }}
      style={{
        marginBottom: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <InputBase
        fullWidth={true}
        className={classes.input}
        onChange={(event) => setQuery(event.target.value)}
        startAdornment={<span className={classes.searchIcon} />}
        endAdornment={
          loading ? (
            <LoadingIcon />
          ) : (
            <span onClick={handleClearInput} className={classes.clearIcon} />
          )
        }
        placeholder="Search"
        value={query}
      />
    </Box>
  );
}
