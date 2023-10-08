import { Container } from '@mui/material';
import React from 'react';
import { mainPage } from '../styles';
import ResponsiveAppBar from './Navbar';

const MainPage = () =>{
    return <div style={{...mainPage}}>
        <ResponsiveAppBar />
    </div>
}

export default MainPage;