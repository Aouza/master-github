import React, { FormEvent, ChangeEvent, useContext, useState } from 'react';
import api from '../../services/api';
import { UserContext } from '../../context/UserContext';
import SearchButton from './SearchButton';
import SearchInput from './SearchInput';

import { Container } from './styles';
import HelpError from '../Helper/HelpError';

const Form: React.FC = () => {
    const { userData, lastUserData, setIsDetails, setIsLoading } = useContext(
        UserContext,
    );
    const [search, setSearch] = useState('');
    const [error, setError] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setSearch(e.target.value);
    };

    const handleSubmit = async (
        e: FormEvent<HTMLFormElement>,
    ): Promise<void> => {
        try {
            e.preventDefault();
            setIsLoading(true);
            setSearch('');
            window.scrollTo(0, 400);
            setIsDetails(false);
            const response = await api.get(`users/${search}`);

            if (response.status === 200) {
                userData(response.data);
                lastUserData(response.data);

                setError(false);
            }
        } catch (err) {
            console.log('Error: nenhum dev encontrado');
            userData(null);
            setError(true);
        } finally {
            setIsLoading(false);
        }
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

            {error && <HelpError>NENHUM DESENVOLVEDOR ENCONTRADO.</HelpError>}
        </Container>
    );
};

export default Form;
