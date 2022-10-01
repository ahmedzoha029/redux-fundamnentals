import { combineReducers } from 'redux';
import bugReducer from './bugs.js';
import projectReducer from './projects.js';

export default combineReducers({
  bugs: bugReducer,
  projects: projectReducer
})