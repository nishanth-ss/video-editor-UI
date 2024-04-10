import React, { useState } from 'react';
import "./styles/sidebar.scss";
import { Box } from '@mui/material';
import { PiGitlabLogoSimpleLight } from 'react-icons/pi';
import menuData from "../src/data/menudata.json";

const Sidebar: React.FC = () => {

    const [activeState, setActiveState] = useState<string>('New Videos+');
    console.log(activeState);

    const listAsActive = (e: any) => {
        setActiveState(e.target.id);
    }

    return (
        <Box className="container">
            <div className="logo"><PiGitlabLogoSimpleLight />Logo</div>
            <ul>
                {
                    menuData?.map((menu: any) => (
                        <li id={menu.name} className={activeState === menu.name ? 'active' : ''} key={menu.name} onClick={listAsActive}>
                            {menu.name}
                        </li>
                    ))
                }
            </ul>
        </Box>
    )
}

export default Sidebar