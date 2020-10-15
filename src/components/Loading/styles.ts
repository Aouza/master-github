import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: var(--color-main-black);
    opacity: 0.95;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 6px;

    @media (max-width: 36rem) {
        font-size: 1.4rem;
    }
`;
