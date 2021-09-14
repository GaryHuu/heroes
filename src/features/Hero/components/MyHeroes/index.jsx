import { Box, Container, Typography } from '@material-ui/core';
import MyHeroItem from 'features/Hero/components/MyHeroItem';
import React from 'react';
import { useSelector } from 'react-redux';

function MyHeroes() {
  const heroList = useSelector((state) => state.hero.heroList);
  return (
    <>
      <Container maxWidth='md'>
        <Typography style={{ marginTop: '25px' }} variant='h5'>
          My Heroes
        </Typography>
        <Box style={{ marginTop: '20px' }}>
          {heroList.map((hero) => (
            <MyHeroItem key={hero.id} hero={hero} />
          ))}
        </Box>
      </Container>
    </>
  );
}

export default MyHeroes;
