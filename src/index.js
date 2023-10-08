import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme } from "@mui/material/styles";
import {ThemeProvider} from '@mui/material/styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme =  createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif'
  },
  palette : {
    primary : { main: "hsl(233, 8%, 79%)" },
  }
});
root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);

reportWebVitals();
