import React from 'react';
import { useCookies } from '../contexts/CookieContext';

const HomePage = () => {
	const { cookies, setCookie, removeCookie, getCookie } = useCookies();

	return (
		<div className="bg-black py-5 text-3xl text-red-600">
			<h1>Hello world</h1>
		</div>
	);
};

export default HomePage;
