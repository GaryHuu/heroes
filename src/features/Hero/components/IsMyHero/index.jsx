import { Button, Container, Typography } from '@material-ui/core';
import { heroByIdSelector } from 'features/Hero/selector';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router';

function IsMyHero() {
  const history = useHistory();
  const {
    params: { heroId },
  } = useRouteMatch();
  const heroSelect = useSelector(heroByIdSelector(heroId));
  const handleButtonClick = () => {
    history.push(`/detail/${heroSelect.id}`);
  };
  const name = heroSelect.name.toUpperCase();
  return (
    <Container style={{ marginTop: '20px' }} maxWidth='md'>
      <Typography variant='h5'>{name} is my Hero</Typography>
      <Button
        style={{
          backgroundColor: '#c3c3c3',
          padding: '5px 9px',
          marginTop: '20px',
          fontSize: '12px',
          color: '#494646',
        }}
        onClick={handleButtonClick}
      >
        View Detail
      </Button>
    </Container>
  );
}

export default IsMyHero;
