import { Dialog as MuiDialog } from '@mui/material';
import { styled } from '@mui/system';
import { DialogContent, DialogTitle } from '@mui/material';
import { useLanguage } from '../../context/useLanguage';

interface Props {
	open: boolean;
	onClose: () => void;
	title?: string;
}

export const Dialog: React.FC<Props> = ({ open, onClose, children, title }) => {
	const { locale } = useLanguage()
	return (
	<StyledDialog
		open={open}
		onClose={onClose}
		fullWidth
		maxWidth='sm'
		transitionDuration={600}
		BackdropProps={{ sx: { backdropFilter: 'blur(2px)', bgcolor: 'transparent' } }}>
		<DialogTitle dir={locale.dir}>{title}</DialogTitle>
		<DialogContent dir={locale.dir}>{children}</DialogContent>
	</StyledDialog>
)}

export const StyledDialog = styled(MuiDialog)({ flex: 1, alignItems: 'flex-start', alignContent: 'flex-start', alignSelf: 'flex-start' });
