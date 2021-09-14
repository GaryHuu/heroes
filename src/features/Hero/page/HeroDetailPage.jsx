import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router';
import { editHero } from '../heroSlice';
import { heroByIdSelector } from '../selector';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '25px',
  },
  box: {
    marginTop: '20px',
  },
  input: {
    marginLeft: '10px',
    '& input': {
      padding: theme.spacing(1, 1.5),
    },
  },
  button: {
    backgroundColor: '#c3c3c3',
    padding: '2px 0',
    marginTop: '20px',
    fontSize: '12px',
    color: '#494646',
  },
}));

function HeroDetailPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  const {
    params: { heroId },
  } = useRouteMatch();

  const heroSelect = useSelector(heroByIdSelector(heroId));
  const [hero, setHero] = useState(heroSelect);

  const handleOnChange = (e) => {
    const value = {
      ...hero,
      name: e.target.value,
    };
    setHero(value);

    const action = editHero(value);
    dispatch(action);
  };

  const handleButtonClick = () => {
    history.push('/');
  };

  return (
    <Container className={classes.root} maxWidth='md'>
      <Typography variant='h5'>{hero.name} details!</Typography>
      <Box className={classes.box}>
        <Typography style={{ color: '#5f7d8c' }} variant='h6'>
          id:
          <Typography
            variant='caption'
            style={{ marginLeft: '13px', color: '#a4a4a4', fontSize: '20px' }}
          >
            {hero.id}
          </Typography>
        </Typography>
        <Typography style={{ color: '#5f7d8c' }} variant='h6'>
          name:
          <TextField
            onChange={handleOnChange}
            value={hero.name}
            variant='outlined'
            className={classes.input}
          />
        </Typography>
      </Box>
      <Button onClick={handleButtonClick} className={classes.button}>
        Back
      </Button>
    </Container>
  );
}

export default HeroDetailPage;
