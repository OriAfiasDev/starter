import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Avatar, Divider } from '@mui/material';
import { Drawer } from '../Drawer';
import { useLanguage } from '../../context/useLanguage';

export const Header = () => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const [drawerOpen, setDrawerOpen] = React.useState(false);
	const { locale } = useLanguage();

	const toggleDrawer = () => {
		setDrawerOpen(cur => !cur);
	};

	const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Box sx={{ flexGrow: 1 }} color='Background' dir={locale.dir}>
			<AppBar position='fixed' color='primary'>
				<Toolbar>
					<IconButton style={{ borderRadius: 10 }} size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }} onClick={toggleDrawer}>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' sx={{ flexGrow: 1, fontSize: 28 }}>
						{locale.title}
					</Typography>

					<div>
						<Avatar
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleMenu}
							style={{ borderRadius: 10, cursor: 'pointer' }}
							src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
						/>
						<Menu
							id='menu-appbar'
							anchorEl={anchorEl}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorEl)}
							onClose={handleClose}>
							<MenuItem onClick={handleClose}>Profile</MenuItem>
							<MenuItem onClick={handleClose}>My account</MenuItem>
							<Divider />
							<MenuItem onClick={handleClose}>Log out</MenuItem>
						</Menu>
					</div>
				</Toolbar>
			</AppBar>
			<Drawer open={drawerOpen} toggleDrawer={toggleDrawer} />
		</Box>
	);
};
