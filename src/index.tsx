import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from './context/useTheme';
import { BrowserRouter as Router } from 'react-router-dom';
import { LanguageProvider } from './context/useLanguage';

ReactDOM.render(
	<React.StrictMode>
		<LanguageProvider>
			<ThemeProvider>
				<Router>
					<App />
				</Router>
			</ThemeProvider>
		</LanguageProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
