import { Button, Grid, Typography } from '@mui/material';
import * as React from 'react';
import { Header } from './components/Header';
import { Dialog } from './components/shared/Dialog';
import { Page } from './components/shared/Page';
import { useLanguage } from './context/useLanguage';
import { useColorScheme } from './context/useTheme';

function App() {
	const [open, setOpen] = React.useState(false);
	const { language, setLanguage } = useLanguage();
	const { colorScheme, setColorScheme } = useColorScheme();
	return (
		<>
			<Header />
			<Page>
				<Grid container spacing={2}>
					<Grid item xs={12} md={4}>
						<Button sx={{ width: '100%', fontFamily: 'Lato' }} variant='contained' onClick={() => setOpen(true)}>
							Open Test Dialog
						</Button>
					</Grid>
					<Grid item xs={12} md={4}>
						<Button sx={{ width: '100%' }} color='secondary' variant='contained' onClick={() => setLanguage(language === 'en' ? 'he' : 'en')}>
							Change Language to {language === 'en' ? 'he' : 'en'}
						</Button>
					</Grid>
					<Grid item xs={12} md={4}>
						<Button sx={{ width: '100%' }} variant='contained' onClick={() => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')}>
							Change ColorScheme to {colorScheme === 'dark' ? 'light' : 'dark'}
						</Button>
					</Grid>
				</Grid>
			</Page>
			<Dialog open={open} onClose={() => setOpen(false)} title='THIS IS A TEST'>
				<Typography variant='body1' sx={{ fontFamily: 'Lato' }}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, iusto? Officia repudiandae dolor totam neque iusto doloribus suscipit ipsum
					explicabo, necessitatibus voluptatibus qui ea perferendis obcaecati incidunt minus cupiditate quia.
				</Typography>
			</Dialog>
		</>
	);
}

export default App;
