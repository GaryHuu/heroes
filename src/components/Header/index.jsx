import { Box, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  link: {
    fontSize: '16px',
    marginTop: '10px',
    textDecoration: 'none',
    padding: theme.spacing(0.5, 1),
    marginRight: '8px',
    backgroundColor: 'rgb(203 203 203)',
    borderRadius: '8%',
    color: '#398baa',
    fontWeight: 500,
  },
}));

const activeStyle = {
  fontWeight: 'bold',
  color: '#2929ff',
};

function Header() {
  const classes = useStyles();
  return (
    <Container maxWidth='md'>
      <Box
        style={{
          fontSize: '20px',
          marginTop: '25px',
          fontWeight: '700',
          color: 'rgb(116 116 116)',
        }}
      >
        Tour of Heroes
      </Box>
      <Box className={classes.root}>
        <NavLink
          exact
          to='/'
          className={classes.link}
          activeStyle={{
            ...activeStyle,
          }}
        >
          <Typography>Dashboard</Typography>
        </NavLink>
        <NavLink
          exact
          to='/heroes'
          className={classes.link}
          activeStyle={{
            ...activeStyle,
          }}
        >
          <Typography>Heroes</Typography>
        </NavLink>
      </Box>
    </Container>
  );
}

export default Header;
