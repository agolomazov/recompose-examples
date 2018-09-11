import React from 'react';
import { withProps, compose } from 'recompose';

const HomeLink = withProps({
	href: '/',
})('a');

const ProductsLink = withProps({
	href: '#/products',
})('a');

const CheckoutLink = withProps({
	href: '#/checkout',
})('a');

const App = () => (
	<div className="App">
		<header>
			<HomeLink>Logo</HomeLink>
		</header>
		<nav>
			<HomeLink>Home</HomeLink>
			<ProductsLink>Products</ProductsLink>
			<CheckoutLink>Checkout</CheckoutLink>
		</nav>
	</div>
);

export default App;
