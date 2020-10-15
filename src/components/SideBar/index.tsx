import React from 'react';
import LogoImage from '../../assets/images/logo.svg';
import AsideProfilePhotos from '../AsideProfilePhotos';

import { Container } from './styles';

const SideBar: React.FC = () => {
    return (
        <Container>
            <img src={LogoImage} alt="Mestres da Web" />
            <AsideProfilePhotos />
        </Container>
    );
};

export default SideBar;
