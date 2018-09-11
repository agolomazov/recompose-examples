import React from 'react';
import PropTypes from 'prop-types';
import { setDisplayName, setPropTypes, compose } from 'recompose';
import { connect } from 'redux';

const User = ({ name, status }) => (
	<div className="User">
		{name}: {status}
	</div>
);

const enhancer = compose(
	setPropTypes({
		name: PropTypes.string.isRequired,
		status: PropTypes.string.isRequired,
	}),
	setDisplayName('HeterosexualUser')
);

export default enhancer(User);
