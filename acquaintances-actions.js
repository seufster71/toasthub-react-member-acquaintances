import callService from '../../core/api/api-call';

// action
export function loadInitAcquaintance(responseJson) {
  return { type: "LOAD_INIT_ACQUAINTANCE", responseJson };
}


// thunk

export function initAcquaintances() {
  return function(dispatch) {
    let requestParams = {};
    requestParams.action = "INIT";
    requestParams.service = "ACQUAINTANCE_SVC";
    requestParams.prefForms = new Array("SOCIAL_ACQUAINTANCE_FORM");
    requestParams.prefTexts = new Array("SOCIAL_ACQUAINTANCE_PAGE");
    requestParams.prefLabels = new Array("SOCIAL_ACQUAINTANCE_TABLE");
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
