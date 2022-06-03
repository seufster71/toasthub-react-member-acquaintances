import reducerUtils from '../../core/common/reducer-utils';

export default function acquaintanceReducer(state = {}, action) {
	let myState = {};
	switch(action.type) {
		case 'SOCIAL_ACQUAINTANCE_INIT': {
			if (action.responseJson != null && action.responseJson.params != null) {
				return Object.assign({}, state, {
 					prefForms: Object.assign({}, state.prefForms, reducerUtils.getPrefForms(action)),
					prefTexts: Object.assign({}, state.prefTexts, reducerUtils.getPrefTexts(action)),
					prefLabels: Object.assign({}, state.prefLabels, reducerUtils.getPrefLabels(action)),
					prefOptions: Object.assign({}, state.prefOptions, reducerUtils.getPrefOptions(action)),
					columns: reducerUtils.getColumns(action),
					itemCount: reducerUtils.getItemCount(action),
					items: reducerUtils.getItems(action),
 					listLimit: reducerUtils.getListLimit(action),
					listStart: reducerUtils.getListStart(action),
					orderCriteria: [{'orderColumn':'SOCIAL_ACQUAINTANCE_TABLE_NAME','orderDir':'ASC'}],
    				searchCriteria: [{'searchValue':'','searchColumn':'SOCIAL_ACQUAINTANCE_TABLE_NAME'}],
    				paginationSegment: 1,
					selected: null,
					inputFields:null,
					view: "MAIN",
					pageName:"PMPRODUCT",
					isDeleteModalOpen: false,
					errors:null, 
					warns:null, 
					successes:null,
					searchValue:""
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
