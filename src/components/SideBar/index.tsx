import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import LogoImage from '../../assets/images/logo.svg';
import AsideProfilePhotos from '../AsideProfilePhotos';

import { Container, UsersNav } from './styles';

const SideBar: React.FC = () => {
    const { lastUsers } = useContext(UserContext);

    return (
        <Container>
            <img src={LogoImage} alt="Mestres da Web" />
            <UsersNav headerHeight={!!lastUsers.length}>
                <AsideProfilePhotos />
            </UsersNav>
        </Container>
    );
};

export default SideBar;
