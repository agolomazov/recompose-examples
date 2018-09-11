import React from 'react';
import { compose, lifecycle, branch, renderComponent, withState } from 'recompose';

const withUserData = compose(
	withState('loading', 'setLoading', true),
	lifecycle({
		componentDidMount() {
			fetchData().then(data => {
				this.setState({
					...data,
				});
				this.props.setLoading(false);
			});
		},
	})
);

const Spinner = () => (
	<div className="Spinner">
		<div className="loader">Loading...</div>
	</div>
);

const isLoading = ({ loading }) => loading;

const withSpinnerWhileLoading = branch(isLoading, renderComponent(Spinner));

const enhancer = compose(
	withUserData,
	withSpinnerWhileLoading
);

const User = enhancer(({ name, status, loading = true }) => (
	<div className="User">
		{name} - {status}
	</div>
));

const App = () => (
	<div>
		<User />
	</div>
);

function fetchData() {
	return new Promise(resolve => {
		setTimeout(
			() =>
				resolve({
					name: 'Anton',
					status: 'hypersexual',
				}),
			1000
		);
	});
}

export default App;
