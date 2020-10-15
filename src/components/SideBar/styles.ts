import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--color-dark-gray);
    padding: 2rem 1rem;

    > img {
        width: 5rem;
        margin: 0 auto 2rem auto;
        display: block;
    }

    @media (max-width: 36rem) {
        padding: 1rem;
    }
`;
