import { createReducer } from '@reduxjs/toolkit';
import changeFilter from './filter-Actions';
const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default filter;
