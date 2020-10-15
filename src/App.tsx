import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SideBar from './components/SideBar';
import GlobalStyle from './styles';
import { UserProvider } from './context/UserContext';

import Routes from './routes';

const App: React.FC = () => (
    <BrowserRouter>
        <UserProvider>
            <SideBar />
            <Routes />
        </UserProvider>

        <GlobalStyle />
    </BrowserRouter>
);

export default App;
