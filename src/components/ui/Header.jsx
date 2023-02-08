import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
function Header() {
    return (
        <div>
            <AppBar position='fixed' color='secondary'>
                <Toolbar>
                    <Typography variant='h6'>Sabzlearn.ir</Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;
