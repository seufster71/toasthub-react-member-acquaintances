/*
* Author Edward Seufert
*/
'use-strict';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appPrefActions from './acquaintances-actions';
import fuLogger from '../../core/common/fu-logger';
import AcquaintancesView from '../../memberView/acquaintances/acquaintances-view';

class AcquaintancesContainer extends Component {
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	componentDidMount() {
		this.props.actions.initAcquaintances();
	}

	onClick(code,index) {
		fuLogger.log({level:'TRACE',loc:'AcquaintancesContainer::onClick',msg:"clicked " + code});

	}

  render() {
			fuLogger.log({level:'TRACE',loc:'AcquaintancesContainer::render',msg:"Hi there"});
      return (
				<AcquaintancesView acquaintances={this.props.acquaintances}/>
			);
  }
}

AcquaintancesContainer.propTypes = {
	appPrefs: PropTypes.object,
	lang: PropTypes.string,
	actions: PropTypes.object,
	acquaintances: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {lang:state.lang, appPrefs:state.appPrefs, acquaintances:state.acquaintances};
}

function mapDispatchToProps(dispatch) {
  return { actions:bindActionCreators(appPrefActions,dispatch) };
}

export default connect(mapStateToProps,mapDispatchToProps)(AcquaintancesContainer);
