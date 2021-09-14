import Header from 'components/Header';
import HeroDetailPage from 'features/Hero/page/HeroDetailPage';
import MyHeroesPage from 'features/Hero/page/MyHeroesPage';
import TopHeroesPage from 'features/Hero/page/TopHeroesPage';
import React from 'react';
import { Route, Switch } from 'react-router';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/' exact>
          <TopHeroesPage />
        </Route>
        <Route path='/heroes'>
          <MyHeroesPage />
        </Route>
        <Route path='/detail/:heroId' exact>
          <HeroDetailPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
