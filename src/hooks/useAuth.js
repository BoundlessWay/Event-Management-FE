import { useState, useCallback, useContext } from 'react';
import AuthService from 'services/AuthService';
import { AuthContext } from 'contexts/AuthContext';

const useAuth = () => {
    const context = useContext(AuthContext);
    const { username, password } = context;
    const [users, setUsers] = useState([]);
    const [loadingUsers, setLoadingUsers] = useState(false);
    const [fetchUsersError, setFetchUsersError] = useState(null);

    const getAllUsers = useCallback(async () => {
        setLoadingUsers(true);
        setFetchUsersError(null);
        try {
            const data = await AuthService.getAllUsers(username, password);
            setUsers(data);
        } catch (err) {
            setFetchUsersError(err.message);
        } finally {
            setLoadingUsers(false);
        }
    }, [username, password]);

    return {
        ...context,
        users,
        loadingUsers,
        fetchUsersError,
        getAllUsers,
    };
};

export default useAuth;
