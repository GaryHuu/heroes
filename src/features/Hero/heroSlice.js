import { createSlice } from '@reduxjs/toolkit';
import { StorageKeys } from 'constant';

const initialStateHero = [
  { id: 11, name: 'Dr Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' },
];

const heroSlice = createSlice({
  name: 'hero',
  initialState: {
    heroList:
      JSON.parse(localStorage.getItem(StorageKeys.HERO)) || initialStateHero,
  },
  reducers: {
    editHero(state, action) {
      const newHero = action.payload;
      const index = state.heroList.findIndex(
        (hero) => hero.id === parseInt(newHero.id)
      );
      state.heroList[index].name = newHero.name;
      localStorage.setItem(StorageKeys.HERO, JSON.stringify(state.heroList));
    },
  },
});

const { actions, reducer } = heroSlice;
export const { editHero } = actions;
export default reducer;
