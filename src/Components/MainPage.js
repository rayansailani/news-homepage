
import React from 'react';
import { mainPage } from '../styles';
import BlogSection from './BlogsSection';
import MainContent from './MainContent';
import ResponsiveAppBar from './Navbar';

const MainPage = () =>{
    return <div style={{...mainPage}}>
        <ResponsiveAppBar />
        <MainContent />
    </div>
}

export default MainPage;