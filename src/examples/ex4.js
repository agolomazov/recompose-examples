import React from 'react';
import { compose, lifecycle } from 'recompose';

const configPromise = fetchConfiguration();

const withConfig = lifecycle({
	componentDidMount() {
		configPromise.then(config =>
			this.setState({
				config,
			})
		);
	},
});

const User = ({ name, status, showStatus, canDeleteUsers }) => (
	<div className="User">
		{name}
		{showStatus && ` - ${status}`}
		{canDeleteUsers && <button>x</button>}
	</div>
);

const App = withConfig(({ config }) => (
	<div>
		<User name="Anton" status="active" {...config} />
	</div>
));

const config = {
	showStatus: true,
	canDeleteUsers: true,
};

function fetchConfiguration() {
	return new Promise(resolve => {
		setTimeout(() => resolve(config), 2500);
	});
}

export default App;
