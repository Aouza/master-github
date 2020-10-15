import styled, { css } from 'styled-components';

interface ValueProps {
    empty: string;
}

export const Container = styled.div<ValueProps>`
    padding: 0.5rem 1.5rem;
    background: var(--color-dark-gray);
    width: 100%;
    border-radius: 10rem;
    position: relative;
    transition: border-color 0.5s;
    border: 2px solid transparent;
    box-shadow: 4px 4px 50px 9px #100f0f96;

    &:focus-within {
        border: 2px solid var(--color-main-green);
        box-shadow: 7px 6px 50px 9px #21ffb51c;

        > label {
            top: -20px;
            font-size: 0.7rem;
        }
    }

    > label {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 3rem;
        font-size: 0.8rem;
        opacity: 0.2;
        letter-spacing: 3px;
        cursor: text;
        transition: all 0.5s;

        ${props =>
            props.empty &&
            css`
                top: -20px;
                font-size: 0.7rem;
            `}
    }

    > input {
        width: 100%;
        height: 100%;
        padding: 1rem;
        color: var(--color-main-white);
        font-weight: bold;
        letter-spacing: 2px;
        font-size: 0.8rem;

        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus {
            -webkit-box-shadow: 0 0 0 1000px var(--color-dark-gray) inset;
            -webkit-text-fill-color: var(--color-main-white);
            transition: background-color 5000s ease-in-out 0s;
        }
    }
`;
