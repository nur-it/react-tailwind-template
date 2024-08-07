import Cookies from 'js-cookie';
import React, { createContext, useContext, useState } from 'react';

const CookieContext = createContext();

export const useCookies = () => useContext(CookieContext);

const CookieProvider = ({ children }) => {
	const [cookies, setCookies] = useState(() => ({
		// Initial cookie state, e.g.,
		// user: null,
		// theme: 'light',
	}));

	const setCookie = (name, value, options) => {
		Cookies.set(name, value, options);
		setCookies(prevCookies => ({ ...prevCookies, [name]: value }));
	};

	const removeCookie = name => {
		Cookies.remove(name);
		setCookies(prevCookies => ({ ...prevCookies, [name]: undefined }));
	};

	const getCookie = name => Cookies.get(name);

	return (
		<CookieContext.Provider
			value={{ cookies, setCookie, removeCookie, getCookie }}
		>
			{children}
		</CookieContext.Provider>
	);
};

export default CookieProvider;
