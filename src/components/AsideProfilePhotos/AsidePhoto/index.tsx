/* eslint-disable react/jsx-indent-props */
import React from 'react';

import { Container } from './styles';

interface ProfileProps {
    avatar: string;
    onClick(id: React.MouseEvent): void;
}

const AsidePhoto: React.FC<ProfileProps> = ({ avatar, onClick }) => (
    <Container>
        <img src={avatar} alt="Profile" onClick={onClick} />
    </Container>
);

export default AsidePhoto;
