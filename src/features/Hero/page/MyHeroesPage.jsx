import { Box, Container, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router';
import MyHeroItem from 'features/Hero/components/MyHeroItem';
import IsMyHero from 'features/Hero/components/IsMyHero';

function MyHeroesPage() {
  const history = useHistory();
  const heroList = useSelector((state) => state.hero.heroList);
  const { url } = useRouteMatch();
  const onItemClick = (id) => {
    history.push(`${url}/${id}`);
  };
  return (
    <>
      <Container maxWidth='md'>
        <Typography style={{ marginTop: '25px' }} variant='h5'>
          My Heroes
        </Typography>
        <Box style={{ marginTop: '20px' }}>
          {heroList.map((hero) => (
            <MyHeroItem onClick={onItemClick} key={hero.id} hero={hero} />
          ))}
        </Box>
      </Container>
      <Switch>
        <Route path={`${url}/:heroId`} exact>
          <IsMyHero />
        </Route>
      </Switch>
    </>
  );
}

export default MyHeroesPage;
