import { createSelector } from '@reduxjs/toolkit';

const heroList = (state) => state.hero.heroList;

const LIST_TOP_HEROES_DEFAUlT = [12, 13, 14, 15];

export const topHeroesSelector = createSelector(heroList, (heroes) =>
  heroes.filter((hero) => LIST_TOP_HEROES_DEFAUlT.includes(hero.id))
);

export const heroByIdSelector = (id) => {
  return createSelector(heroList, (heroes) =>
    heroes.find((hero) => hero.id === parseInt(id))
  );
};
