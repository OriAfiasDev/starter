import { Dialog as MuiDialog } from '@mui/material';
import { styled } from '@mui/system';
import { DialogContent, DialogTitle } from '@mui/material';

interface Props {
	open: boolean;
	onClose: () => void;
	title?: string;
}

export const Dialog: React.FC<Props> = ({ open, onClose, children, title }) => (
	<StyledDialog
		open={open}
		onClose={onClose}
		fullWidth
		maxWidth='sm'
		transitionDuration={600}
		BackdropProps={{ sx: { backdropFilter: 'blur(2px)', bgcolor: 'transparent' } }}>
		<DialogTitle>{title}</DialogTitle>
		<DialogContent>{children}</DialogContent>
	</StyledDialog>
);

export const StyledDialog = styled(MuiDialog)({ flex: 1, alignItems: 'flex-start', alignContent: 'flex-start', alignSelf: 'flex-start' });
