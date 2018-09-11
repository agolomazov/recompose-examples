import React from 'react';

const User = ({ name }) => <div className="User">{name}</div>;

const hoc = overrideProps => BaseComponent => props => <BaseComponent {...props} {...overrideProps} />;

const alwaysBob = hoc({ name: 'Bob' });
const UserBob = alwaysBob(User);
const User2 = hoc({ name: 'Vasily' })(User);

const App = () => (
	<div>
		<User name="Tim" />
		<User2 name="Anton" />
		<UserBob />
	</div>
);

export default App;
