import React, { useState,  useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import decode from 'jwt-decode';

import AUTH_ACTION_TYPES from "../../store/authentication/authentication.types";

import memories from '../../assets/images/memories.png';
import useStyles from './navigation.styles';

const Navbar = () => {
    const classes = useStyles();
    const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('profile')));
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();

    const logout = () => {
        dispatch({ type: AUTH_ACTION_TYPES.LOGOUT });
        history.push('/auth');
        setUser(null);
    };
    
    
    useEffect(() => {
        const token = user?.token;

        if(token) {
            const decodedToken = decode(token);

            if(decodedToken.exp * 1000 < new Date().getTime()) logout()
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location, user]); // eslint-disable-line react-hooks/exhaustive-deps

    return(
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to='/' className={classes.heading} variant="h2" align="center"> Memories </Typography>
                <img className={classes.image} src={memories} alt="memories" height="60"/>
            </div>
            {user && (
                <Toolbar className={classes.toolbar}>
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} src={user.photoURL} alt={user.displayName}>
                            {user?.result ? user?.result.name[0] : user?.displayName[0]}
                        </Avatar>
                        <Typography className={classes.userName}>
                            {user?.result ? user?.result.name : user?.displayName}
                        </Typography>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                    </div>
                </Toolbar>
            )}
        </AppBar>
    );
};

export default Navbar;