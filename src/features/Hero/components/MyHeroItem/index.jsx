import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: '10px',
    borderRadius: '4px',
    overflow: 'hidden',
    display: 'flex',
    width: '158px',
    cursor: 'pointer',
    transition: '.1s linear',
    '&:hover': {
      transform: 'translateX(-10%)',
      '& $name': {
        color: '#fff',
        backgroundColor: '#b6bfc3',
      },
    },
  },
  id: {
    padding: '6px',
    backgroundColor: '#5f7d8c',
    color: '#fff',
  },
  name: {
    padding: '6px 6px 6px 15px',
    backgroundColor: '#eeeeee',
    overflow: 'hidden',
    width: '130px',
    color: '#747474',
  },
}));

function MyHeroItem({ hero, onClick }) {
  const classes = useStyles();
  const handleClick = () => {
    if (!onClick) return;
    onClick(hero.id);
  };

  return (
    <Grid onClick={handleClick} className={classes.root}>
      <Box className={classes.id}>{hero.id}</Box>
      <Box className={classes.name}>{hero.name}</Box>
    </Grid>
  );
}

export default MyHeroItem;
