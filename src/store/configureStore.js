import { createStore } from 'redux';
import reducer from './bugs.js'

export default function configureStore() {
  return createStore(reducer);
}