import React from 'react';
import { mapProps } from 'recompose';

const User = ({ name, status }) => (
	<div className="User">
		{name} - {status}
	</div>
);

const UserList = ({ users, status }) => (
	<div className="UserList">
		<h3>{status} users</h3>
		{users && users.map((user, index) => <User key={index} {...user} />)}
	</div>
);

const users = [
	{ name: 'Tim', status: 'active' },
	{ name: 'Bob', status: 'active' },
	{ name: 'Joe', status: 'active' },
	{ name: 'Jim', status: 'inactive' },
];

const filterByStatus = status =>
	mapProps(({ users }) => ({
		status,
		users: users.filter(u => u.status === status),
	}));

const ActiveUsers = filterByStatus('active')(UserList);
const InActiveUsers = filterByStatus('inactive')(UserList);
const PendingUsers = filterByStatus('pending')(UserList);

const App = () => (
	<div className="App">
		<ActiveUsers users={users} />
		<InActiveUsers users={users} />
		<PendingUsers users={users} />
	</div>
);

export default App;
