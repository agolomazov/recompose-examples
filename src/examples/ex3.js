import React from 'react';
import { compose, withState, withHandlers, setDisplayName, withReducer } from 'recompose';

const StatusList = () => (
	<div className="StatusList">
		<div>pending</div>
		<div>inactive</div>
		<div>active</div>
	</div>
);

const withToggle = compose(
	setDisplayName('withToggle'),
	withReducer(
		'switcherOn',
		'dispatch',
		(state, action) => {
			switch (action.type) {
				case 'SHOW':
					return true;
				case 'HIDE':
					return false;
				case 'TOGGLE':
					return !state;
				default:
					return state;
			}
		},
		false
	),
	withState('toggledOn', 'toggle', false),
	withHandlers({
		show: ({ toggle }) => e => toggle(true),
		hide: ({ toggle }) => e => toggle(false),
		toggle: ({ toggle }) => e => toggle(current => !current),
		switched: ({ dispatch }) => e => dispatch({ type: 'TOGGLE' }),
	})
);

const Status = withToggle(({ status, switched, switcherOn }) => (
	<div onClick={switched}>
		{status}
		{switcherOn && <StatusList />}
	</div>
));

const Tooltip = withToggle(({ text, children, show, hide, toggledOn }) => (
	<span onMouseEnter={show} onMouseLeave={hide}>
		{toggledOn && <div className="Tooltip">{text}</div>}
		<span>{children}</span>
	</span>
));

const User = ({ name, status }) => (
	<div className="User">
		<Tooltip text="Cool Dude!">{name}</Tooltip>
		<Status status={status} />
	</div>
);

export default User;
