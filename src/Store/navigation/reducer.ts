import { Reducer } from 'redux'
import { NavigationState, NavigationActionTypes } from './types'

// Type-safe initialState!
const initialState: NavigationState = {
 expanded:true
}

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const reducer: Reducer<NavigationState> = (state = initialState, action) => {
  switch (action.type) {
    case NavigationActionTypes.TOGGLE_ACTION: {
      return { ...state, expanded: !state.expanded }
    }    
    default: {
      return state
    }
  }
}

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { reducer as navReducer }
