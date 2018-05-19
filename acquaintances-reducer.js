export default function acquaintanceReducer(state = {}, action) {
  let myState = {};
  switch(action.type) {
    case 'LOAD_INIT_ACQUAINTANCE': {
      if (action.responseJson != null && action.responseJson.params != null) {
        if (state.appTexts != null) {
          myState = Object.assign({}, state);
        } else {
          myState.appTexts = {};
        }
        if (action.responseJson.params.appPageTexts.ACQUAINTANCE_PAGE != null) {
          myState.appTexts.ACQUAINTANCE_PAGE = action.responseJson.params.appPageTexts.ACQUAINTANCE_PAGE;
        }
        return Object.assign({}, state, myState);
      } else {
        return state;
      }
    }
    case 'SAVE_ACQUAINTANCE':
      return state;
    default:
      return state;
  }
}
