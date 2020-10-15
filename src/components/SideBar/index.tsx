import React from 'react';
import LogoImage from '../../assets/images/logo.svg';
import AsideProfilePhotos from '../AsideProfilePhotos';

import { Container, UsersNav } from './styles';

const SideBar: React.FC = () => {
    return (
        <Container>
            <img src={LogoImage} alt="Mestres da Web" />
            <UsersNav>
                <AsideProfilePhotos />
            </UsersNav>
        </Container>
    );
};

export default SideBar;
