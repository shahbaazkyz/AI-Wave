import React , {useState} from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Fab,
  Link,
} from "@mui/material";
import {
  Menu as MenuIcon,
  MailOutline as MailIcon,
  NotificationsNone as NotificationsIcon,
  Person as AccountIcon,
  Search as SearchIcon,
  Send as SendIcon,
  ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";

const Header = () => {
      var [profileMenu, setProfileMenu] = useState(null);

    return (
      <AppBar position="fixed"  >
        <Toolbar >

          <IconButton
            aria-haspopup="true"
            color="inherit"
            aria-controls="profile-menu"
            onClick={(e) => setProfileMenu(e.currentTarget)}
          >
            <AccountIcon  />
          </IconButton>

          <Menu
            id="profile-menu"
            open={Boolean(profileMenu)}
            anchorEl={profileMenu}
            onClose={() => setProfileMenu(null)}
           
            disableAutoFocusItem
          >
            <div >
              
              <h1>Hello</h1>
            </div>

            <div >
              <h1 >
                Sign Out
                </h1>
           
            </div>
          </Menu>
        </Toolbar>
      </AppBar>
    );
}

export default Header
