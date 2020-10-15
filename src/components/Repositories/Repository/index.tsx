import React from 'react';

import { Container } from './styles';

interface Details {
    details: any;
}

const Repository: React.FC<Details> = ({ details }) => {
    return (
        <Container href={details.html_url} target="blank">
            <h3>{details.name}</h3>
            <p>{details.description}</p>
        </Container>
    );
};

export default Repository;
