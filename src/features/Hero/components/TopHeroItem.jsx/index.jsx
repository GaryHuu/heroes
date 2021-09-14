import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    height: '140px',
    width: '140px',
    backgroundColor: '#5f7d8c',
    fontSize: '17px',
    fontWeight: 500,
    lineHeight: '140px',
    cursor: 'pointer',
    color: '#fff',
    borderRadius: '4%',
    transition: '.3s linear',
    '&:hover': {
      backgroundColor: '#ccc',
      color: '#000000',
    },
    padding: '0 4px',
    overflow: 'hidden',
  },
}));

function TopHeroItem({ onItemClick, hero }) {
  const classes = useStyles();
  const handleClick = () => {
    if (!onItemClick) return;
    onItemClick(hero.id);
  };
  return (
    <Grid className={classes.root} item onClick={handleClick}>
      {hero.name}
    </Grid>
  );
}

export default TopHeroItem;
