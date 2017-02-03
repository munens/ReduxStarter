// state here is not application state - this is only the state
// this reducer is responsible for.
export default function(state = null, action){

  // depending on the type of action, we need to recive it here:
  switch(action.type){
      case 'BOOK_SELECTED':
        return action.payload;
  }

  // we need to take into acount actions that this reducer will
  // get that we dont want an action to be linked towards.
  // therefore for our base case, we just return the state.  
  return state;
}