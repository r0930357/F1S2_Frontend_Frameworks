import { FunctionComponent } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Footer: FunctionComponent = () => {
    return (
        <Box sx={{ position: 'bottom' }}>
            <AppBar sx={{ top: 'auto', bottom: 0 }}>
                <Toolbar>
                    <Typography variant="body1" color="white">
                        &copy; {new Date().getFullYear()} Tom Belmans - r0930357
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Footer;
