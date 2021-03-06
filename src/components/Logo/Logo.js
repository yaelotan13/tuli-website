import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import logo from '../../assets/icons/tulis-logo.jpg';

const useStyle = makeStyles(theme => ({
    container: {
        marginBottom: '10vh',
        width: '100vw',
        height: '25vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            height: '22vh',
        }
    },
    logo: {
        marginTop: '4vh',
        height: '25vh',
        width: '65vw',
        backgroundImage: `url(${logo})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        [theme.breakpoints.down('xs')]: {
            marginTop: '20vh', 
            width: '50vw',
        }
    }
}));

const Logo = (props) => {
    const classes = useStyle();

    return (
        <Box className={classes.container}>
            <Box className={classes.logo} />
        </Box>
    )
};

export default Logo;
