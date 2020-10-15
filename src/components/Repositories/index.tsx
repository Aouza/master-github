import React from 'react';
import Repository from './Repository';

import { Container } from './styles';

interface Repos {
    repos: any;
}

const Repositories: React.FC<Repos> = ({ repos }) => {
    return (
        <Container>
            {repos?.map((repo: any) => (
                <Repository key={repo.id} details={repo} />
            ))}
        </Container>
    );
};

export default Repositories;
