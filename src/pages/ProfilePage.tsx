import {
  Avatar,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  Divider,
  Typography,
  Zoom,
} from "@material-ui/core";
import { Box } from "@mui/system";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfileTabs from "../components/profile/ProfileTabs";
import Layout from "../components/shared/Layout";
import ProfilePicture from "../components/shared/ProfilePicture";
import { defaultCurrentUser } from "../data";
import { GearIcon } from "../icons";
import { useProfilePageStyles } from "./styles/useProfilePageStyles";
import { AuthContext } from "../Auth";

function ProfilePage() {
  const classes = useProfilePageStyles();
  const [showOptionsMenu, setShowOptionsMenu] = React.useState(false);
  const isOwner = true;

  function handleShowOptionsMenuClick() {
    setShowOptionsMenu(true);
  }

  function handleCloseOptionsMenu() {
    setShowOptionsMenu(false);
  }

  return (
    <Layout
      title={`${defaultCurrentUser.name} (@${defaultCurrentUser.username})`}
    >
      <div className={classes.container}>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Card className={classes.cardLarge}>
            <ProfilePicture
              image={defaultCurrentUser.profile_image}
              isOwner={isOwner}
            />
            <CardContent className={classes.cardContentLarge}>
              <ProfileNameSection
                user={defaultCurrentUser}
                isOwner={isOwner}
                handleShowOptionsMenuClick={handleShowOptionsMenuClick}
              />
              <PostCountSection user={defaultCurrentUser} />
              <NameBioSection user={defaultCurrentUser} />
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <Card className={classes.cardSmall}>
            <CardContent>
              <section className={classes.sectionSmall}>
                <ProfilePicture
                  image={defaultCurrentUser.profile_image}
                  size={77}
                  isOwner={isOwner}
                />
                <ProfileNameSection
                  user={defaultCurrentUser}
                  isOwner={isOwner}
                  handleShowOptionsMenuClick={handleShowOptionsMenuClick}
                />
              </section>
              <NameBioSection user={defaultCurrentUser} />
            </CardContent>
            <PostCountSection user={defaultCurrentUser} />
          </Card>
        </Box>
        {showOptionsMenu && (
          <OptionsMenu handleCloseOptionsMenu={handleCloseOptionsMenu} />
        )}
        <ProfileTabs user={defaultCurrentUser} isOwner={isOwner} />
      </div>
    </Layout>
  );
}

function ProfileNameSection({
  user,
  isOwner,
  handleShowOptionsMenuClick,
}: any) {
  const classes = useProfilePageStyles();
  const [showUnfollowDialog, setShowUnfollowDialog] = React.useState(false);

  let followButton;
  const isFollowing = true;
  const isFollower = false;

  if (isFollowing) {
    followButton = (
      <Button
        variant="outlined"
        onClick={() => setShowUnfollowDialog(true)}
        className={classes.button}
      >
        Following
      </Button>
    );
  } else if (isFollower) {
    followButton = (
      <Button variant="contained" color="primary" className={classes.button}>
        Follow Back
      </Button>
    );
  } else {
    followButton = (
      <Button variant="contained" color="primary" className={classes.button}>
        Follow
      </Button>
    );
  }

  return (
    <>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <section className={classes.usernameSection}>
          <Typography className={classes.username}>{user.username}</Typography>
          {isOwner ? (
            <>
              <Link to="/accounts/edit">
                <Button variant="outlined" size="medium">
                  Edit Profile
                </Button>
              </Link>
              <div
                onClick={handleShowOptionsMenuClick}
                className={classes.settingsWrapper}
              >
                <GearIcon className={classes.settings} />
              </div>
            </>
          ) : (
            <>{followButton}</>
          )}
        </section>
      </Box>
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <section>
          <div className={classes.usernameDivSmall}>
            <Typography className={classes.username}>
              {user.username}
            </Typography>
            {isOwner && (
              <div
                onClick={handleShowOptionsMenuClick}
                className={classes.settingsWrapper}
              >
                <GearIcon className={classes.settings} />
              </div>
            )}
          </div>
          {isOwner ? (
            <Link to="/accounts/edit">
              <Button variant="outlined" size="medium">
                Edit Profile
              </Button>
            </Link>
          ) : (
            followButton
          )}
        </section>
      </Box>
      {showUnfollowDialog && (
        <UnfollowDialog
          user={user}
          onClose={() => setShowUnfollowDialog(false)}
        />
      )}
    </>
  );
}

function UnfollowDialog({ onClose, user }: any) {
  const classes = useProfilePageStyles();

  return (
    <Dialog
      open
      classes={{
        scrollPaper: classes.unfollowDialogScrollPaper,
      }}
      TransitionComponent={Zoom}
    >
      <div className={classes.wrapper}>
        <Avatar
          src={user.profile_image}
          alt={`${user.username}'s avatar`}
          className={classes.avatar}
        />
      </div>
      <Typography
        align="center"
        variant="body2"
        className={classes.unfollowDialogText}
      >
        Unfollow @{user.username}?
      </Typography>
      <Divider />
      <Button className={classes.unfollowButton}>Unfollow</Button>
      <Divider />
      <Button onClick={onClose} className={classes.cancelButton}>
        Cancel
      </Button>
    </Dialog>
  );
}

function PostCountSection({ user }: any) {
  const classes = useProfilePageStyles();
  const options = ["posts", "followers", "following"];

  return (
    <>
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <Divider />
      </Box>
      <section className={classes.followingSection}>
        {options.map((option) => (
          <div key={option} className={classes.followingText}>
            <Typography className={classes.followingCount}>
              {user[option].length}
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Typography>{option}</Typography>
            </Box>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <Typography color="textSecondary">{option}</Typography>
            </Box>
          </div>
        ))}
      </section>
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <Divider />
      </Box>
    </>
  );
}

function NameBioSection({ user }: any) {
  const classes = useProfilePageStyles();

  return (
    <section className={classes.section}>
      <Typography className={classes.typography}>{user.name}</Typography>
      <Typography>{user.bio}</Typography>
      <a href={user.website} target="_blank" rel="noopener noreferrer">
        <Typography color="secondary" className={classes.typography}>
          {user.website}
        </Typography>
      </a>
    </section>
  );
}

function OptionsMenu({ handleCloseOptionsMenu }: any) {
  const classes = useProfilePageStyles();
  const signOut = React.useContext(AuthContext)!.signOut;
  const [showLogOutMessage, setLogOutMessage] = React.useState(false);
  const navigate = useNavigate();

  function handleLogOutClick() {
    setLogOutMessage(true);
    setTimeout(() => {
      signOut;
      navigate("/accounts/login");
    }, 2000);
  }

  return (
    <Dialog
      open
      classes={{
        scrollPaper: classes.dialogScrollPaper,
        paper: classes.dialogPaper,
      }}
      TransitionComponent={Zoom}
    >
      {showLogOutMessage ? (
        <DialogTitle className={classes.dialogTitle}>
          Logging Out
          <Typography color="textSecondary">
            You need to log back in to continue using Instagram.
          </Typography>
        </DialogTitle>
      ) : (
        <>
          <OptionsItem text="Change Password" />
          <OptionsItem text="Nametag" />
          <OptionsItem text="Authorized Apps" />
          <OptionsItem text="Notifications" />
          <OptionsItem text="Privacy and Security" />
          <OptionsItem text="Log Out" onClick={handleLogOutClick} />
          <OptionsItem text="Cancel" onClick={handleCloseOptionsMenu} />
        </>
      )}
    </Dialog>
  );
}

function OptionsItem({ text, onClick }: any) {
  return (
    <>
      <Button style={{ padding: "12px 8px" }} onClick={onClick}>
        {text}
      </Button>
      <Divider />
    </>
  );
}

export default ProfilePage;