import { CHANGE_FILTER } from 'redux/types';
import { createAction } from '@reduxjs/toolkit';
const changeFilter = createAction(CHANGE_FILTER);
export default changeFilter;
