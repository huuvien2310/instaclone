import React from 'react';
import { useNProgress } from "@tanem/react-nprogress";
import { useNavbarStyles, RedTooltip } from '../../styles';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Avatar, Hidden, Zoom } from '@material-ui/core';
import logo from "../../images/logo.png";
import NotificationList from '../notification/NotificationList';
import { AddIcon, ExploreActiveIcon, ExploreIcon, HomeActiveIcon, HomeIcon, LikeActiveIcon, LikeIcon } from '../../icons';
import { defaultCurrentUser } from '../../data';
import NotificationTooltip from '../notification/NotificationTooltip';
import { Box } from '@mui/system';

function Navbar({ minimalNavbar }: any) {
    const classes = useNavbarStyles();
    const location = useLocation();
    const [isLoadingPage, setLoadingPage] = React.useState(true);
    const path = location.pathname;

    React.useEffect(() => {
      setLoadingPage(false);
    }, [path]);
    
    return (
        <div>
            <Progress isAnimating={isLoadingPage} />
            <AppBar className={classes.appBar}>
                <section className={classes.section}>
                    <Logo />
                    {!minimalNavbar && (
                        <>
                            <Links path={path} />
                        </>
                    )}
                </section>
            </AppBar>
        </div>
    );
}

function Progress({ isAnimating }: any) {
    const classes = useNavbarStyles();
    const { animationDuration, isFinished, progress } = useNProgress({
        isAnimating
    });

    return (
        <div
            className={classes.progressContainer}
            style={{
                opacity: isFinished ? 0 : 1,
                transition: `opacity ${animationDuration}ms linear`
            }}
        >
            <div
                className={classes.progressBar}
                style={{
                    marginLeft: `${(-1 + progress) * 100}%`,
                    transition: `margin-left ${animationDuration}ms linear`
                }}
            >
                <div className={classes.progressBackground} />
            </div>
        </div>
    );
}

function Logo() {
    const classes = useNavbarStyles();

    return (
        <div className={classes.logoContainer}>
            <Link to="/">
                <div className={classes.logoWrapper}>
                    <img src={logo} alt="Instagram" className={classes.logo} />
                </div>
            </Link>
        </div>
    );
}

function Links({ path }: any) {
    const classes = useNavbarStyles();
    const [showTooltip, setTooltip] = React.useState(true);
    const [showList, setList] = React.useState(false);
  
    React.useEffect(() => {
      const timeout = setTimeout(handleHideTooltip, 5000);
      return () => {
        clearTimeout(timeout);
      };
    }, []);
  
    function handleToggleList() {
      setList(prev => !prev);
    }
  
    function handleHideTooltip() {
      setTooltip(false);
    }
  
    function handleHideList() {
      setList(false);
    }
  
    return (
      <div className={classes.linksContainer}>
        {showList && <NotificationList handleHideList={handleHideList} />}
        <div className={classes.linksWrapper}>
          <Link to="/">{path === "/" ? <HomeActiveIcon /> : <HomeIcon />}</Link>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <AddIcon />
          </Box>
          <Link to="/explore">
            {path === "/explore" ? <ExploreActiveIcon /> : <ExploreIcon />}
          </Link>
          <RedTooltip
            arrow
            open={showTooltip}
            onOpen={handleHideTooltip}
            TransitionComponent={Zoom}
            title={<NotificationTooltip />}
          >
            <div className={classes.notifications} onClick={handleToggleList}>
              {showList ? <LikeActiveIcon /> : <LikeIcon />}
            </div>
          </RedTooltip>
          <Link to={`/${defaultCurrentUser.username}`}>
            <div className={path === `/${defaultCurrentUser.username}` ? classes.profileActive : ""}>
                <Avatar
                    src={defaultCurrentUser.profile_image}
                    className={classes.profileImage}
                />
            </div>
          </Link>
        </div>
      </div>
    );
  }

export default Navbar;