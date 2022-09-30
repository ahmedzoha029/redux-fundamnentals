import configureStore from './store/configureStore.js';
import { bugAdded, bugRemoved, bugResolved} from './store/bugs.js';

const store = configureStore();

const unsubscribe = store.subscribe(()=> {
  console.log('store changed', store.getState());
})

store.dispatch(bugAdded({description :"Bug 1 Added" }));
store.dispatch(bugResolved( { id: 1 }));
