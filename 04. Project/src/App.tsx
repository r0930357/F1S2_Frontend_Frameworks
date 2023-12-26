import {FunctionComponent, useState} from 'react'
import {BrowserRouter} from 'react-router-dom'
import Routing from './routing.tsx'
import NavigatieMenu from './pages/navigationMenu.tsx'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const App: FunctionComponent = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
        },
    });

    return (
        <BrowserRouter>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavigatieMenu darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <Routing/>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App
