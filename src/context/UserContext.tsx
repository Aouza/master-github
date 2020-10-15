import React, { createContext, useEffect, useState } from 'react';

interface User {
    id: number;
    login: string;
    name: string;
    avatar_url: string;
    location: string;
    email: string;
    bio: string;
    followers: number;
    following: number;
}

interface UserContextData {
    user: User | null;
    setLastUsers(data: object): void;
    lastUsers: User[];
    userData(data: object | null): void;
    lastUserData(data: object): void;
    isDetails: boolean;
    setIsDetails(data: boolean): void;
    isLoading: boolean;
    setIsLoading(data: boolean): void;
}

export const UserContext = createContext<UserContextData>(
    {} as UserContextData,
);

export const UserProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isDetails, setIsDetails] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [lastUsers, setLastUsers] = useState<User[]>(() => {
        const storagedRepositories = localStorage.getItem(
            '@GitHubMaster: repositories',
        );

        if (storagedRepositories) {
            return JSON.parse(storagedRepositories);
        } else {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem(
            '@GitHubMaster: repositories',
            JSON.stringify(lastUsers),
        );
    }, [lastUsers]);

    const userData = (data: any | null) => {
        if (data) {
            setUser(data);
        } else {
            setUser(null);
        }
    };

    const lastUserData = (data: any) => {
        const index = lastUsers.findIndex(index => index.id === data.id);

        if (index < 0) {
            setLastUsers([...lastUsers, data]);
        } else {
            lastUsers.splice(index, 1);
            setLastUsers([...lastUsers, data]);
        }
    };

    return (
        <UserContext.Provider
            value={{
                isDetails,
                setIsDetails,
                lastUsers,
                setLastUsers,
                user,
                userData,
                lastUserData,
                setIsLoading,
                isLoading,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
