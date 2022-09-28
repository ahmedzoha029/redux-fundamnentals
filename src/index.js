import store from './store.js';
import { bugAdded, bugRemoved, bugResolved} from './actions.js';

const unsubscribe = store.subscribe(()=> {
  console.log('store changed', store.getState());
})

store.dispatch(bugAdded("Bug 1 Added"));
store.dispatch(bugResolved(1));
