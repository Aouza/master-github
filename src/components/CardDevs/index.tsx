import React, { useState, useContext } from 'react';
import api from '../../services/api';
import { UserContext } from '../../context/UserContext';
import { FaUsers } from 'react-icons/fa';
import { BsDot } from 'react-icons/bs';
import {
    HiLocationMarker,
    HiOutlineArrowNarrowRight,
    HiOutlineArrowNarrowLeft,
} from 'react-icons/hi';

import {
    Container,
    Description,
    IconsGroup,
    GeneralInfo,
    ButtonSeeMore,
    RepositoriesContainer,
} from './styles';
import Repositories from '../Repositories';

interface ReposItems {
    name: string;
    id: number;
}

const CardDevs: React.FC = () => {
    const [repos, setRepos] = useState<ReposItems[]>([]);

    const { user, isDetails, setIsDetails } = useContext(UserContext);

    const handDetailsClick = async () => {
        setIsDetails(!isDetails);

        const response = await api.get(`/users/${user?.login}/repos`);

        if (response.status === 200) setRepos(response.data);
    };

    return (
        <Container details={isDetails}>
            {user && (
                <>
                    <img src={user.avatar_url} alt={user.name} />

                    <Description>
                        <header>
                            <h2>{user.name}</h2>
                            <span>{user.login}</span>
                        </header>
                        <p>{user.bio}</p>
                        <IconsGroup>
                            <p>
                                <FaUsers />
                                <span>{user.followers}</span>
                                seguidores
                                <BsDot />
                                <span>{user.following}</span>
                                seguindo
                            </p>
                        </IconsGroup>
                        <GeneralInfo>
                            <p>
                                <HiLocationMarker />
                                <span>{user.location}</span>
                            </p>

                            {isDetails ? (
                                <ButtonSeeMore
                                    details={isDetails}
                                    onClick={handDetailsClick}
                                >
                                    <HiOutlineArrowNarrowLeft size={20} />{' '}
                                    <span>VOLTAR</span>
                                </ButtonSeeMore>
                            ) : (
                                <ButtonSeeMore
                                    details={isDetails}
                                    onClick={handDetailsClick}
                                >
                                    <span>REPOSITÓRIOS</span>{' '}
                                    <HiOutlineArrowNarrowRight size={20} />
                                </ButtonSeeMore>
                            )}
                        </GeneralInfo>
                    </Description>
                    <RepositoriesContainer details={isDetails}>
                        <Repositories repos={repos} />
                    </RepositoriesContainer>
                </>
            )}
        </Container>
    );
};

export default CardDevs;
