import * as toolkitRaw from '@reduxjs/toolkit';
const { configureStore } = toolkitRaw.default ?? toolkitRaw;
import reducer from './reducer.js'

export default function () {
  return configureStore({ reducer });
}