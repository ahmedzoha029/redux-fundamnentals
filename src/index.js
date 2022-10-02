import configureStore from './store/configureStore.js';
import { bugAdded, bugRemoved, bugResolved} from './store/bugs.js';
import { addProject} from './store/projects.js'
import { getUnresolvedBugs } from './store/bugs.js';

const store = configureStore();

const unsubscribe = store.subscribe(()=> {
  console.log('store changed', store.getState());
})

store.dispatch((dispatch, getState) => {
  dispatch({ type: "error", message: "error"});
  console.log('state after api call', getState());
})

//store.dispatch(bugAdded({description :"Bug 1 Added" }));
// store.dispatch(bugAdded({description :"Bug 2 Added" }));
// store.dispatch(bugAdded({description :"Bug 3 Added" }));
// store.dispatch(bugResolved( { id: 1 }));

// store.dispatch(addProject({ projectName: "Redux Project"}));
//getUnresolvedBugs(store.getState());

