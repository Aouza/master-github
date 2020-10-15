import React from 'react';
import { RiSearch2Line } from 'react-icons/ri';

import { Container } from './style';

const SearchButton: React.FC = () => {
    return (
        <Container>
            <RiSearch2Line size={24} />
        </Container>
    );
};

export default SearchButton;
