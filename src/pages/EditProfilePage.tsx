import React from "react";

import Layout from "../components/shared/Layout";
import {
  IconButton,
  Button,
  Drawer,
  List,
  ListItemText,
  Typography,
  TextField,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { Box } from "@mui/system";
import { defaultCurrentUser } from "../data";
import ProfilePicture from "../components/shared/ProfilePicture";
import { useEditProfilePageStyles } from "./styles/useEditProfilePageStyles";
import { ListItemButton } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";

function EditProfilePage() {
  const classes = useEditProfilePageStyles();
  const location = useLocation();
  const navigate = useNavigate();
  const [showDrawer, setDrawer] = React.useState(false);

  function handleToggleDrawer() {
    setDrawer((prev) => !prev);
  }

  const optionsItems = [
    {
      text: "Edit Profile",
      link: "/accounts/edit",
    },
    {
      text: "Change Password",
      link: "/accounts/password/change",
    },
    {
      text: "Apps and Websites",
      link: "/accounts/manage_access",
    },
    {
      text: "Email and SMS",
      link: "/accounts/emails_and_sms",
    },
    {
      text: "Push Notifications",
      link: "/accounts/push_notifications",
    },
    {
      text: "Manage Contacts",
      link: "/accounts/manage_contacts",
    },
    {
      text: "Privacy and Security",
      link: "/accounts/privacy_and_security",
    },
    {
      text: "Login Activity",
      link: "/accounts/login_activity",
    },
    {
      text: "Emails from Instagram",
      link: "/accounts/emails_from_instagram",
    },
  ];

  const drawer = (
    <List>
      {optionsItems.map((optionsItem) => (
        <ListItemButton
          key={optionsItem.text}
          onClick={() => navigate(optionsItem.link)}
          className={
            location.pathname == optionsItem.link
              ? classes.listItemButtonSelected
              : classes.listItemButton
          }
        >
          <ListItemText primary={optionsItem.text} />
        </ListItemButton>
      ))}
    </List>
  );

  return (
    <Layout title="Edit Profile">
      <section className={classes.section}>
        <IconButton
          edge="start"
          onClick={handleToggleDrawer}
          className={classes.menuButton}
        >
          <Menu />
        </IconButton>
        <nav>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <Drawer
              variant="temporary"
              anchor="left"
              open={showDrawer}
              onClose={handleToggleDrawer}
              classes={{ paperAnchorLeft: classes.temporaryDrawer }}
            >
              {drawer}
            </Drawer>
          </Box>
          <Box
            sx={{ display: { xs: "none", sm: "block" } }}
            className={classes.permanentDrawerRoot}
          >
            <Drawer
              variant="permanent"
              open
              classes={{
                paper: classes.permanentDrawerPaper,
                root: classes.permanentDrawerRoot,
              }}
            >
              {drawer}
            </Drawer>
          </Box>
        </nav>
        <main>
          <EditUserInfo user={defaultCurrentUser} />
        </main>
      </section>
    </Layout>
  );
}

function EditUserInfo({ user }: any) {
  const classes = useEditProfilePageStyles();

  return (
    <section className={classes.container}>
      <div className={classes.pictureSectionItem}>
        <ProfilePicture size={38} user={user} />
        <div className={classes.justifySelfStart}>
          <Typography className={classes.typography}>
            {user.username}
          </Typography>
          <Typography
            color="primary"
            variant="body2"
            className={classes.typographyChangePic}
          >
            Change Profile Photo
          </Typography>
        </div>
      </div>
      <form className={classes.form}>
        <SectionItem text="Name" formItem={user.name} />
        <SectionItem text="Username" formItem={user.username} />
        <SectionItem text="Website" formItem={user.website} />
        <div className={classes.sectionItem}>
          <aside>
            <Typography className={classes.bio}>Bio</Typography>
          </aside>
          <TextField
            variant="outlined"
            multiline
            rowsMax={3}
            rows={3}
            fullWidth
            value={user.bio}
          />
        </div>
        <div className={classes.sectionItem}>
          <div />
          <Typography
            color="textSecondary"
            className={classes.justifySelfStart}
          >
            Personal information
          </Typography>
        </div>
        <SectionItem text="Email" formItem={user.email} type="email" />
        <SectionItem text="Phone Number" formItem={user.phone_number} />
        <div className={classes.sectionItem}>
          <div />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.justifySelfStart}
          >
            Submit
          </Button>
        </div>
      </form>
    </section>
  );
}

function SectionItem({ type = "text", text, formItem }: any) {
  const classes = useEditProfilePageStyles();

  return (
    <div className={classes.sectionItemWrapper}>
      <aside>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Typography className={classes.typography} align="right">
            {text}
          </Typography>
        </Box>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <Typography className={classes.typography}>{text}</Typography>
        </Box>
      </aside>
      <TextField
        variant="outlined"
        fullWidth
        value={formItem}
        type={type}
        className={classes.textField}
        inputProps={{
          className: classes.textFieldInput,
        }}
      />
    </div>
  );
}

export default EditProfilePage;
