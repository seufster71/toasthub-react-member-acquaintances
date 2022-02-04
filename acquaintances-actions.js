import callService from '../../core/api/api-call';

// action
export function loadInitAcquaintance(responseJson) {
  return { type: "LOAD_INIT_ACQUAINTANCE", responseJson };
}


// thunk

export function init() {
  return function(dispatch) {
    let requestParams = {};
    requestParams.action = "INIT";
    requestParams.service = "ACQUAINTANCE_SVC";
    requestParams.prefFormKeys = new Array("SOCIAL_ACQUAINTANCE_FORM");
    requestParams.prefTextKeys = new Array("SOCIAL_ACQUAINTANCE_PAGE");
    requestParams.prefLabelKeys = new Array("SOCIAL_ACQUAINTANCE_TABLE");
    let params = {};
    params.requestParams = requestParams;
    params.URI = '/api/member/callService';

    return callService(params).then( (responseJson) => {
      dispatch(loadInitAcquaintance(responseJson));
    }).catch(error => {
      throw(error);
    });

  };
}
