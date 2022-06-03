import callService from '../../core/api/api-call';
import actionUtils from '../../core/common/action-utils';


// thunk

export function init({lang}) {
  return function(dispatch) {
    let requestParams = {};
    requestParams.action = "INIT";
    requestParams.service = "ACQUAINTANCE_SVC";
    requestParams.prefTextKeys = new Array("SOCIAL_ACQUAINTANCE_PAGE");
    requestParams.prefLabelKeys = new Array("SOCIAL_ACQUAINTANCE_PAGE");
	requestParams.lang = lang;
    let params = {};
    params.requestParams = requestParams;
    params.URI = '/api/member/callService';

    return callService(params).then( (responseJson) => {
		if (responseJson != null && responseJson.protocalError == null){
      		dispatch({ type: "SOCIAL_ACQUAINTANCE_INIT", responseJson });
		} else {
			actionUtils.checkConnectivity(responseJson,dispatch);
		}
    }).catch(error => {
      throw(error);
    });

  };
}
