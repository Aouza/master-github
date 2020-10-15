import React, { FormEvent, ChangeEvent, useContext, useState } from 'react';
import api from '../../services/api';
import { UserContext } from '../../context/UserContext';
import SearchButton from './SearchButton';
import SearchInput from './SearchInput';

import { Container } from './styles';

const Form: React.FC = () => {
    const { userData, lastUserData, setIsDetails, setIsLoading } = useContext(
        UserContext,
    );
    const [search, setSearch] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setSearch(e.target.value);
    };

    const handleSubmit = async (
        e: FormEvent<HTMLFormElement>,
    ): Promise<void> => {
        e.preventDefault();
        window.scrollTo(0, 400);
        setIsLoading(true);
        setSearch('');
        setIsDetails(false);
        const response = await api.get(`users/${search}`);

        userData(response.data);

        if (response.data.id) lastUserData(response.data);
        setIsLoading(false);
    };

    return (
        <Container onSubmit={handleSubmit}>
            <SearchInput
                type="text"
                label="BUSQUE O DEV"
                id="search"
                name="search"
                value={search}
                onChange={handleChange}
            />
            <SearchButton />
        </Container>
    );
};

export default Form;
