import styled from 'styled-components';

export const Container = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:before {
        content: '';
        width: 100%;
        height: 3px;
        background-color: var(--color-main-green);
        display: block;
        margin-bottom: 2rem;
    }

    @media (max-width: 36rem) {
        &:before {
            content: none;
        }

        flex-direction: row;
        padding-bottom: 0.5rem;

        position: absolute;
    }
`;
