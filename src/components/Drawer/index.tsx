import React from 'react';
import MuiDrawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';

import { Container, Link, ListItem, ListItemIcon, Title, List } from './Drawer.styles';
import { Divider, Typography } from '@mui/material';
import { useLanguage } from '../../context/useLanguage';
import { i18n } from '../../constants/i18n';

interface Props {
	open: boolean;
	toggleDrawer: () => void;
}

const routes = [
	{
		title: 'asd',
		path: '/',
		Icon: MenuIcon,
	},
];
export const Drawer: React.FC<Props> = ({ open, toggleDrawer }) => {
	const { language } = useLanguage();
	const list = () => (
		<Container role='presentation' onClick={toggleDrawer} onKeyDown={toggleDrawer}>
			<List>
				<ListItem divider>
					<Typography variant='h6'>Logo</Typography>
				</ListItem>

				<Divider />

				{routes.map(({ title, path, Icon }, i) =>
					title ? (
						<React.Fragment key={i}>
							<Link to={path}>
								<ListItem>
									{Icon && (
										<ListItemIcon>
											<Icon />
										</ListItemIcon>
									)}
									<Title variant='body1'>{title}</Title>
								</ListItem>
							</Link>
						</React.Fragment>
					) : null
				)}
			</List>
		</Container>
	);

	return (
		<MuiDrawer anchor={i18n[language].drawer} open={open} onClose={toggleDrawer}>
			{list()}
		</MuiDrawer>
	);
};
