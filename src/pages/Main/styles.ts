import styled from 'styled-components';

export const Container = styled.main``;

export const Wrapper = styled.div`
    max-width: 70rem;
    width: 100%;
    padding: 0 1rem;
    margin: 0 auto;
    padding: 5rem 2rem;

    @media (max-width: 75rem) {
        max-width: 40rem;
    }

    @media (max-width: 51rem) {
        max-width: 25rem;
    }
`;

export const BoxCallingSearch = styled.div`
    max-width: 60rem;

    > h1 {
        font-size: 3.5rem;
        margin-bottom: 2rem;
    }

    > p {
        font-size: 1.2rem;
        opacity: 0.8;
    }

    @media (max-width: 75rem) {
        max-width: 40rem;

        > h1 {
            font-size: 2.5rem;
        }
    }

    @media (max-width: 51rem) {
        > h1 {
            font-size: 1.5rem;
        }

        > p {
            font-size: 0.9rem;
            opacity: 0.8;
        }
    }
`;
