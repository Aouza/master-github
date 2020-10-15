import React, { InputHTMLAttributes } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: string;
    id: string;
    name: string;
    label: string;
    value: string;
    onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

const SearchInput: React.FC<SearchInputProps> = ({
    id,
    name,
    label,
    type,
    value,
    onChange,
}) => {
    return (
        <Container empty={value}>
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                name={name}
                id={id}
                value={value}
                onChange={onChange}
                required
            />
        </Container>
    );
};

SearchInput.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};
export default SearchInput;
