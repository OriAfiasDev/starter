import { Typography } from '@mui/material';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Box, styled } from '@mui/system';
import MuiListItem from '@mui/material/ListItem';
import MuiListItemIcon from '@mui/material/ListItemIcon';
import MuiList from '@mui/material/List';

export const Container = styled(Box)({
	width: 250,
	padding: 0,
});

export const Logo = styled('p')({
	margin: 0,
	width: '100%',
	textAlign: 'center',
	padding: '2px 0',
});

export const Link = styled(ReactRouterLink)({ textDecoration: 'unset', color: 'inherit' });

export const List = styled(MuiList)(({ theme }) => ({ backgroundColor: theme.palette.primary }));

export const ListItem = styled(MuiListItem)({
	paddingRight: 40,
	fontSize: 25,
});

export const ListItemIcon = styled(MuiListItemIcon)(({ theme }) => ({ color: theme.palette.primary }));

export const Title = styled(Typography)(({ theme }) => ({ margin: 0, color: theme.palette.background, borderColor: theme.palette.secondary, borderWidth: 1 }));
