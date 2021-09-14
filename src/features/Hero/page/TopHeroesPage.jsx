import { Box, Container, Grid } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { topHeroesSelector } from 'features/Hero/selector';

import TopHeroItem from '../components/TopHeroItem.jsx/index.jsx';

function TopHeroesPage() {
  const history = useHistory();
  const topHeroes = useSelector(topHeroesSelector);
  const handleItemClick = (id) => {
    history.push(`/detail/${id}`);
  };
  return (
    <Container maxWidth='md'>
      <Box
        style={{
          fontSize: '20px',
          marginTop: '25px',
          fontWeight: '700',
          color: 'rgb(116 116 116)',
          textAlign: 'center',
        }}
      >
        Top Heroes
      </Box>
      <Grid
        style={{ marginTop: '40px', justifyContent: 'space-between' }}
        container
      >
        {topHeroes.map((hero) => (
          <TopHeroItem
            onItemClick={handleItemClick}
            key={hero.id}
            hero={hero}
          />
        ))}
      </Grid>
    </Container>
  );
}

export default TopHeroesPage;
