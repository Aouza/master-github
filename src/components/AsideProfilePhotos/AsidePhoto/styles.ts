import styled from 'styled-components';

export const Container = styled.li`
    cursor: pointer;

    & + li {
        margin-top: 1rem;
    }
    > img {
        width: 4rem;
        border-radius: 100%;
        box-shadow: 1px 1px 7px #21ffb51c, 8px 8px 10px #0004;
    }

    @media (max-width: 36rem) {
        & + li {
            margin-top: 0;
        }

        margin-right: 2rem;
    }
`;
