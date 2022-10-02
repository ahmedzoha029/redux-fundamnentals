const toast = store => next => action => {
  if(action.type === 'error') {
    console.log("Toast Notification:", action.message);
  } else next(action);
}

export default toast;