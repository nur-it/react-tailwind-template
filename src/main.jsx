import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import CookieProvider from './contexts/CookieContext';
import Layout from './layouts';
import { router } from './routes';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<CookieProvider>
			<Layout>
				<RouterProvider router={router} />
			</Layout>
		</CookieProvider>
	</React.StrictMode>,
);
