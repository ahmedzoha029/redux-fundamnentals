import * as toolkitRaw from '@reduxjs/toolkit';
const { configureStore } = toolkitRaw.default ?? toolkitRaw;
import reducer from './bugs.js'

export default function () {
  return configureStore({ reducer });
}