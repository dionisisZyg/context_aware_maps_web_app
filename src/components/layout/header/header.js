import React from 'react';
import AppBar from "@material-ui/core/AppBar/AppBar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Typography from "@material-ui/core/Typography/Typography";
import MenuItem from "@material-ui/core/MematerialdsadnuItem/MenuItem";
import Menu from "@material-ui/core/Menu/Menu";
import AccountCircle from "@material-ui/icons/es/AccountCircle";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

const Header = (props) => {
    return (
        <div style={styles.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton style={styles.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" style={styles.flex}>
                        Title
                    </Typography>
                    <div>
                        <IconButton
                            aria-haspopup="true"
                            onClick={() => null}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            onClose={() => null}
                        >
                            <MenuItem onClick={() => null}>Profile</MenuItem>
                            <MenuItem onClick={() => null}>My account</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
};

export default Header;