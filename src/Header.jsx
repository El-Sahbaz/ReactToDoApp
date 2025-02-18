import React from 'react';
import AssignmentIcon from '@mui/icons-material/Assignment';


function Header() {
    return (
        <header>
            <h1>
                <AssignmentIcon sx={{marginRight:2}}/>
                To Do App
            </h1>           
        </header>
    )
}



export default Header;