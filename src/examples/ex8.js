import React from 'react';
import { compose, componentFromProp, withProps, mapProps } from 'recompose';

const Link = compose(
	withProps(
		({ type = 'a', to = '#' }) =>
			type === 'a'
				? { type, href: to }
				: {
						type,
						onClick(e) {
							window.location = to;
						},
				  }
	),
	mapProps(({ to, ...props }) => props)
)(componentFromProp('type'));

const App = () => (
	<div className="App">
		<Link to="/#page3" target="_blank">
			Third link
		</Link>
		<Link type="button" to="/confirm-data">
			Send data
		</Link>
	</div>
);

export default App;
