import { Divider, Tab, Tabs, Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import React from "react";
import { GridIcon, SaveIcon } from "../../icons";
import GridPost from "../shared/GridPost";
import { useProfileTabsStyles } from "./styles";

function ProfileTabs({ user, isOwner }: any) {
  const classes = useProfileTabsStyles();
  const [value, setValue] = React.useState(0);

  return (
    <>
      <section className={classes.section}>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Divider />
        </Box>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Tabs
            value={value}
            onChange={(_, value) => setValue(value)}
            centered
            classes={{ indicator: classes.tabsIndicator }}
          >
            <Tab
              icon={<span className={classes.postsIconLarge} />}
              label="POSTS"
              classes={{
                root: classes.tabRoot,
                labelIcon: classes.tabLabelIcon,
                wrapper: classes.tabWrapper,
              }}
            />
            {isOwner && (
              <Tab
                icon={<span className={classes.savedIconLarge} />}
                label="SAVED"
                classes={{
                  root: classes.tabRoot,
                  labelIcon: classes.tabLabelIcon,
                  wrapper: classes.tabWrapper,
                }}
              />
            )}
          </Tabs>
        </Box>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <Tabs
            value={value}
            onChange={(_, value) => setValue(value)}
            centered
            className={classes.tabs}
            classes={{ indicator: classes.tabsIndicator }}
          >
            <Tab
              icon={<GridIcon fill={value === 0 ? "#3897f0" : undefined} />}
              classes={{ root: classes.tabRoot }}
            />
            {isOwner && (
              <Tab
                icon={<SaveIcon fill={value === 1 ? "#3897f0" : undefined} />}
                classes={{ root: classes.tabRoot }}
              />
            )}
          </Tabs>
        </Box>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          {user.posts.length === 0 && <Divider />}
        </Box>
        {value === 0 && <ProfilePosts user={user} isOwner={isOwner} />}
        {value === 1 && <SavedPosts />}
      </section>
    </>
  );
}

function ProfilePosts({ user, isOwner }: any) {
  const classes = useProfileTabsStyles();

  if (user.posts.length === 0) {
    return (
      <section className={classes.profilePostsSection}>
        <div className={classes.noContent}>
          <div className={classes.uploadPhotoIcon} />
          <Typography variant="h4">
            {isOwner ? "Upload a Photo" : "No Photos"}
          </Typography>
        </div>
      </section>
    );
  }

  return (
    <article className={classes.article}>
      <div className={classes.postContainer}>
        {user.posts.map((post: { id: any }) => (
          <GridPost key={post.id} post={post} />
        ))}
      </div>
    </article>
  );
}

function SavedPosts() {
  const classes = useProfileTabsStyles();

  return (
    <section className={classes.savedPostsSection}>
      <div className={classes.noContent}>
        <div className={classes.savePhotoIcon} />
        <Typography variant="h4">Save</Typography>
        <Typography align="center">
          Save photos and videos that you want to see again. No one is notified,
          and only you can see what you've saved.
        </Typography>
      </div>
    </section>
  );
}

export default ProfileTabs;
