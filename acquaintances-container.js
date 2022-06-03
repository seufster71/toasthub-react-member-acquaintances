/*
* Author Edward Seufert
*/
'use-strict';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from './acquaintances-actions';
import fuLogger from '../../core/common/fu-logger';
import AcquaintancesView from '../../memberView/acquaintances/acquaintances-view';
import BaseContainer from '../../core/container/base-container';

function AcquaintancesContainer({navigate}) {
	const itemState = useSelector((state) => state.acquaintances);
	const session = useSelector((state) => state.session);
	const appPrefs = useSelector((state) => state.appPrefs);
	const dispatch = useDispatch();

	useEffect(() => {
			dispatch(actions.init({lang:session.selected.lang}));
	}, []);

	const onListLimitChange = (fieldName,event) => {
		BaseContainer.onListLimitChange({state:itemState,actions:actions,dispatch:dispatch,appPrefs:appPrefs,fieldName,event});
	}
	const onPaginationClick = (value) => {
		BaseContainer.onPaginationClick({state:itemState,actions:actions,dispatch:dispatch,value});
	}
	const onSearchChange = (field,event) => {
		BaseContainer.onSearchChange({state:itemState,actions:actions,dispatch:dispatch,field,event});
	}
	const onSearchClick = (fieldName,event) => {
		BaseContainer.onSearchClick({state:itemState,actions:actions,dispatch:dispatch,fieldName,event});
	}
	const inputChange = (type,field,value,event) => {
		BaseContainer.inputChange({state:itemState,actions:actions,dispatch:dispatch,appPrefs:appPrefs,type,field,value,event});
	}
	const onOrderBy = (selectedOption, event) => {
		BaseContainer.onOrderBy({state:itemState,actions:actions,dispatch:dispatch,appPrefs:appPrefs,selectedOption,event});
	}
	const onSave = () => {
		BaseContainer.onSave({state:itemState,actions:actions,dispatch:dispatch,appPrefs:appPrefs,form:"SOCIAL_ACQUAINTANCE_FORM"});
	}
	const closeModal = () => {
		BaseContainer.closeModal({actions:actions,dispatch:dispatch});
	}
	const onCancel = () => {
		BaseContainer.onCancel({state:itemState,actions:actions,dispatch:dispatch});
	}
	const goBack = () => {
		BaseContainer.goBack({navigate});
	}
	const onBlur = (field) => {
		BaseContainer.onCancel({state:itemState,actions:actions,dispatch:dispatch,field});
	}
	
	const onOption = (code,item) => {
		fuLogger.log({level:'TRACE',loc:'ProductContainer::onOption',msg:" code "+code});
		if (BaseContainer.onOptionBase({state:itemState,actions:actions,dispatch:dispatch,code:code,appPrefs:appPrefs,item:item})) {
			return;
		}
		
	}

	fuLogger.log({level:'TRACE',loc:'AcquaintancesContainer::render',msg:JSON.stringify(itemState)});
    return (
		<AcquaintancesView 
		itemState={itemState}
		appPrefs={appPrefs}
		onListLimitChange={onListLimitChange}
		onSearchChange={onSearchChange}
		onSearchClick={onSearchClick}
		onPaginationClick={onPaginationClick}
		onOrderBy={onOrderBy}
		onOption={onOption}
		closeModal={closeModal}
		inputChange={inputChange}
		goBack={goBack}
		session={session}/>
	);

}

export default AcquaintancesContainer;
