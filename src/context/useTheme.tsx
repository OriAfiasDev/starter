import { createContext, useContext, useState } from 'react';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider as MuiProvider } from '@mui/material/styles';
import { ColorScheme } from '../models/types';

interface Props {
	colorScheme: ColorScheme;
	setColorScheme: (scheme: ColorScheme) => void;
}

const ColorSchemeContext = createContext<Props>(null!);

export const ThemeProvider: React.FC = ({ children }) => {
	const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');

	const themes = {
		dark: createTheme({
			palette: {
				mode: 'dark',
				primary: { main: '#286f6c' },
				secondary: { main: '#f6c90e' },
				success: { main: '#2bb032' },
				background: {
					default: '#252c33',
					paper: '#0a1929',
				},
				text: { primary: '#eee', secondary: '#252c33' },
			},
			typography: {
				fontFamily: 'Lato',
				h6: {
					fontFamily: 'Lobster Two',
				},
			},
		}),

		light: createTheme({
			palette: {
				mode: 'light',
				primary: { main: '#286f6c' },
				secondary: { main: '#0d2f3f' },
				success: { main: '#2bb032' },
				background: {
					default: '#f8f7f1',
					paper: '#fff',
				},
			},
			typography: {
				fontFamily: 'Lato',
				h6: {
					fontFamily: 'Lobster Two',
				},
			},
		}),
	};

	return (
		<ColorSchemeContext.Provider value={{ colorScheme, setColorScheme }}>
			<MuiProvider theme={themes[colorScheme]}>{children}</MuiProvider>
		</ColorSchemeContext.Provider>
	);
};

export const useColorScheme = () => useContext(ColorSchemeContext);
