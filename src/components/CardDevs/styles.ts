import styled, { css } from 'styled-components';

interface DetailsProps {
    details: boolean;
}

export const Container = styled.div<DetailsProps>`
    display: flex;
    align-items: flex-start;
    margin-top: 6rem;
    margin-left: 2.8rem;
    position: relative;
    min-height: 23rem;

    @keyframes detailsEffectEnter {
        from {
            opacity: 0;
            display: none;
        }

        to {
            opacity: 1;
            display: block;
        }
    }

    @keyframes detailsEffectOut {
        from {
            opacity: 0;
            display: none;
        }

        to {
            opacity: 1;
            display: block;
        }
    }

    > img {
        box-shadow: 1rem 1rem 6rem 1rem #21ffb514,
            -3rem -3rem 0 var(--color-dark-gray);
        width: 20rem;
        border-radius: 0.2rem;
        margin-right: 2rem;
        transition: all 0.2s;
    }

    ${props =>
        props.details &&
        css`
            > img {
                width: 0;
                display: none;
            }
        `}

    ${props =>
        props.details
            ? css`
                  animation: detailsEffectEnter 3s;
              `
            : css`
                  animation: detailsEffectOut 3s;
              `}


    @media (max-width: 75rem) {
        flex-direction: column;
        margin-left: 1rem;

        > img {
            width: 8rem;
            box-shadow: 1rem 1rem 6rem 1rem #21ffb514,
                -1rem -1rem 0 var(--color-dark-gray);
            margin-bottom: 2rem;
        }
    }

    @media (max-width: 51rem) {
        > img {
            width: 6rem;
            box-shadow: 1rem 1rem 6rem 1rem #21ffb514,
                -1rem -1rem 0 var(--color-dark-gray);
            margin-bottom: 2rem;
        }
    }
`;

export const Description = styled.div`
    flex: 1;
    transition: flex 1s;
    position: sticky;
    top: 2rem;

    > header {
        margin-bottom: 1.4rem;

        > h2 {
            margin-bottom: 0.5rem;
            font-size: 2.5rem;
        }

        > span {
            opacity: 0.9;

            &:after {
                content: '';
                background-color: var(--color-main-purple);
                height: 3px;
                display: block;
                width: 2rem;
                margin-top: 0.3rem;
            }
        }
    }

    > p {
        font-weight: 200;
        line-height: 1.3;
        margin-bottom: 1rem;
        font-size: 1.2rem;
        letter-spacing: 1px;
        opacity: 0.8;
    }

    @media (max-width: 75rem) {
        position: initial;
    }

    @media (max-width: 51rem) {
        > p {
            font-size: 0.9rem;
        }
    }
`;

export const IconsGroup = styled.div`
    display: flex;
    align-items: center;

    > p {
        display: flex;
        align-items: center;
        opacity: 0.8;
        letter-spacing: 1px;
        flex-wrap: wrap;

        &:first-child {
            svg:first-child {
                margin-left: 0;
            }
        }

        > span {
            margin-right: 0.5rem;
        }

        > svg {
            margin: 0.8rem;
            color: var(--color-main-purple);
        }
    }
`;

export const GeneralInfo = styled.div`
    > p {
        display: flex;
        align-items: center;
        margin: 0.8rem 0;
        opacity: 0.8;
        font-size: 0.8rem;
        letter-spacing: 1px;
        > svg {
            margin-right: 0.8rem;
            color: var(--color-main-purple);
            font-size: 1rem;
        }
    }
`;

export const ButtonSeeMore = styled.button<DetailsProps>`
    padding: 1rem;
    background-color: var(--color-dark-gray);
    position: absolute;
    bottom: 0rem;
    right: 0;
    border-radius: 0.2rem;
    border: 2px solid transparent;
    box-shadow: 1rem 1rem 6rem 2rem #21ffb514;
    display: flex;
    align-items: center;
    color: #21ffb5d1;
    font-weight: 800;
    font-size: 0.6rem;
    letter-spacing: 1.6px;
    transition: border-color 0.6s;

    &:hover,
    &:focus {
        border: 2px solid #21ffb5d1;
    }

    > svg * {
        color: var(--color-main-green);
    }

    > svg {
        margin-left: 2rem;
    }

    ${props =>
        props.details &&
        css`
            bottom: -5rem;
            right: 1rem;

            > svg {
                margin-left: 0;
                margin-right: 2rem;
            }
        `}

    @media (max-width: 75rem) {
        position: initial;
        margin-top: 2rem;
    }
`;

export const RepositoriesContainer = styled.div<DetailsProps>`
    overflow: hidden;
    flex: 0;
    max-height: 0;
    opacity: 0;
    transition: opacity 0.5s ease-out;
    margin-left: 4rem;

    ${props =>
        props.details &&
        css`
            flex: 1.5;
            overflow: hidden;
            opacity: 1;
            max-height: 100%;
            transition: opacity 0.5s ease-out;
        `}

    @media (max-width: 75rem) {
        margin-left: 0;
        margin-top: 4rem;
    }
`;
