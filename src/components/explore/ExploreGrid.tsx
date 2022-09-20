import React from "react";
import { getDefaultPost } from "../../data";
import { LoadingLargeIcon } from "../../icons";
import GridPost from "../shared/GridPost";
import { useExploreGridStyles } from "./styles";

function ExploreGrid() {
  const classes = useExploreGridStyles();
  const [loading, setLoading] = React.useState(true);

  setTimeout(() => setLoading(false), 1000);
  return (
    <>
      {loading ? (
        <LoadingLargeIcon />
      ) : (
        <article className={classes.article}>
          <div className={classes.postContainer}>
            {Array.from({ length: 30 }, () => getDefaultPost()).map((post) => (
              <GridPost key={post.id} post={post} />
            ))}
          </div>
        </article>
      )}
    </>
  );
}

export default ExploreGrid;
