import reducerUtils from '../../core/common/reducer-utils';

export default function acquaintanceReducer(state = {}, action) {
  let myState = {};
  switch(action.type) {
    case 'LOAD_INIT_ACQUAINTANCE': {
    	if (action.responseJson != null && action.responseJson.params != null) {
    	    return Object.assign({}, state, {
    	      prefForms: Object.assign({}, state.prefForms, reducerUtils.getPrefForms(action)),
    	      prefTexts: Object.assign({}, state.prefTexts, reducerUtils.getPrefTexts(action)),
    	      prefLabels: Object.assign({}, state.prefLabels, reducerUtils.getPrefLabels(action)),
    	      prefOptions: Object.assign({}, state.prefOptions, reducerUtils.getPrefOptions(action)),
    	      columns: reducerUtils.getColumns(action),
    	      itemCount: reducerUtils.getItemCount(action),
    	      items: reducerUtils.getItems(action),
    	      pageLimit: reducerUtils.getPageLimit(action),
    	      pageStart: reducerUtils.getPageStart(action)
    	    });
    	  } else {
    	    return state;
    	  }
    }
    case 'SAVE_ACQUAINTANCE': {
      return state;
    }
    default:
      return state;
  }
}
