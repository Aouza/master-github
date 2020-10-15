import styled from 'styled-components';

export const Container = styled.button`
    background-color: var(--color-main-purple);
    width: 5rem;
    height: 5rem;
    border-radius: 100%;
    margin: 2rem auto;
    box-shadow: 3px 3px 30px 9px #a700ff21;
    transition: opacity 0.4s;

    &:hover,
    &:focus {
        opacity: 0.7;
    }

    > svg > g {
        color: var(--color-main-white);
    }

    @media (max-width: 51rem) {
        width: 4rem;
        height: 4rem;
    }
`;
