import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import CardDevs from '../../components/CardDevs';
import Form from '../../components/Form';
import Loading from '../../components/Loading';

import { Container, Wrapper, BoxCallingSearch } from './styles';

const Main: React.FC = () => {
    const { isLoading } = useContext(UserContext);
    return (
        <Container>
            <Wrapper>
                <BoxCallingSearch>
                    <h1>
                        Busque as informações de um novo desenvolvedor no
                        Github.
                    </h1>
                    <p>
                        Basta inserir o nome de usuário do desenvolvedor a ser
                        buscado.
                    </p>
                    <Form />
                </BoxCallingSearch>
                <CardDevs />
            </Wrapper>
            {isLoading && <Loading>CARREGANDO...</Loading>}
        </Container>
    );
};

export default Main;
