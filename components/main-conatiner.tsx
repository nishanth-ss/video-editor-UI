import { Box } from '@mui/material'
import React, { ReactNode } from 'react';
import "./styles/main-container.scss";

interface MyComponentProps {
    children: ReactNode;
  }

const MainConatiner: React.FC<MyComponentProps> = ({children}) => {
  return (
    <Box className='main-container'>
        {children}
    </Box>
  )
}

export default MainConatiner