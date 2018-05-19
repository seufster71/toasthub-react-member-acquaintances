import callService from '../../core/api/api-call';

// action
export function loadInitAcquaintance(responseJson) {
  return { type: "LOAD_INIT_ACQUAINTANCE", responseJson };
}


// thunk

export function initAcquaintance() {
  return function(dispatch) {
    let requestParams = {};
    requestParams.action = "INIT";
    requestParams.service = "ACQUAINTANCE_SVC";
    //requestParams.appForms = new Array("LOGIN_FORM","REGISTRATION_FORM","FORGOTPASSWORD_FORM","PASSWORD_CHANGE_FORM");
    requestParams.appTexts = new Array("ACQUAINTANCE_PAGE");
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
