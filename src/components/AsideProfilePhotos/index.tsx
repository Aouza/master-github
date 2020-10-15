import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import AsidePhoto from './AsidePhoto';

import { Container } from './styles';

const AsideProfilePhotos: React.FC = () => {
    const {
        userData,
        lastUsers,
        lastUserData,
        setIsDetails,
        setIsLoading,
    } = useContext(UserContext);

    const handleSetLastUser = (user: object) => {
        window.scrollTo(0, 400);
        setIsLoading(true);
        userData(user);
        lastUserData(user);
        setIsDetails(false);
        setIsLoading(false);
    };

    var reverseLastUsers = lastUsers.slice(0).reverse();

    return (
        <Container>
            {reverseLastUsers?.map(user => (
                <AsidePhoto
                    key={user.id}
                    avatar={user.avatar_url}
                    onClick={() => handleSetLastUser(user)}
                />
            ))}
        </Container>
    );
};

export default AsideProfilePhotos;
