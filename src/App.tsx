import { Button, Grid, TextField, Typography } from '@mui/material';
import * as React from 'react';
import { Header } from './components/Header';
import { Dialog } from './components/shared/Dialog';
import { Page } from './components/shared/Page';
import { useLanguage } from './context/useLanguage';
import { useColorScheme } from './context/useTheme';
import { useArray } from './hooks/useArray';
import { useDebounce } from './hooks/useDebounce';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useScreenSize } from './hooks/useScreenSize';
import { useToggle } from './hooks/useToggle';

function App() {
	const [open, setOpen] = React.useState(false);
	const { language, setLanguage,  locale } = useLanguage();
	const { colorScheme, setColorScheme } = useColorScheme();
	const [val, toggleVal] = useToggle(true);
	const { arr, push, pop, filter, sort } = useArray<number>([4, 6, 7, 0, 3, 2, 5, 8]);
	const [getLocal, setLocal] = useLocalStorage('test');
	const [input, setInput] = React.useState<string>('');
	const debounced = useDebounce(input, 800);
	const { height, width} = useScreenSize()

	return (
		<>
			<Header />
			<Page>
				<Typography color='secondary' sx={{my: 4}} variant='h5' align='center'>Context</Typography>
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

					<Typography color='secondary' sx={{my: 4}} variant='h5' align='center'>Hooks</Typography>
				<Grid container spacing={2}>

					<Grid item xs={12}>
						<Button sx={{ width: '100%' }} variant='contained' onClick={toggleVal}>
							useToggle: {val.toString()}
						</Button>
					</Grid>

					<Grid item xs={12}>
					<Button sx={{ width: '100%' }} variant='contained' onClick={console.log}>
							useArray: [{arr.join(',')}]
						</Button>
						
					</Grid>
					<Grid item xs={12} md={3}>
						<Button sx={{ width: '100%' }} variant='contained' onClick={() => push(4)}>
							useArray: push
						</Button>
					</Grid>
					<Grid item xs={12} md={3}>
						<Button sx={{ width: '100%' }} variant='contained' onClick={pop}>
							useArray: pop
						</Button>
					</Grid>
					<Grid item xs={12} md={3}>
						<Button sx={{ width: '100%' }} variant='contained' onClick={() => filter(val => val !== 2)}>
							useArray: filter
						</Button>
					</Grid>
					<Grid item xs={12} md={3}>
						<Button sx={{ width: '100%' }} variant='contained' onClick={() => sort((a, b) => a - b)}>
							useArray: sort
						</Button>
					</Grid>

					<Grid item xs={12} md={6}>
						<Button sx={{ width: '100%' }} variant='contained' onClick={() => alert(getLocal())}>
							useLocalStorage: getvalue
						</Button>
					</Grid>
					<Grid item xs={12} md={6}>
						<Button sx={{ width: '100%' }} variant='contained' onClick={() => setLocal('asdasd')}>
							useLocalStorage: setValue
						</Button>
					</Grid>

					<Grid item xs={12} md={6}>
						<TextField sx={{width: '100%'}} variant='standard' value={input} onChange={e => setInput(e.target.value)} />
					</Grid>
					<Grid item xs={12} md={6}>
						<Button sx={{ width: '100%' }} variant='contained' onClick={console.log}>
							useDebounce {debounced}
						</Button>
					</Grid>

					<Grid item xs={12}>
						<Button sx={{ width: '100%' }} variant='contained' onClick={console.log}>
							useScreenSize: width - {width}px, height - {height}px
						</Button>
					</Grid>
</Grid>
			</Page>
			<Dialog open={open} onClose={() => setOpen(false)} title={locale.title}>
				<Typography variant='body1' sx={{ fontFamily: 'Lato' }}>{locale.lorem}</Typography>
			</Dialog>
		</>
	);
}

export default App;
