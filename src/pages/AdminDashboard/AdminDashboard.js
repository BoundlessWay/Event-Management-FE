import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import styles from './AdminDashboard.module.scss';
import NavBar from 'components/NavBar/NavBar';

const AdminDashboard = () => {
    const { isLoggedIn, role, getAllUsers, users, loadingUsers, fetchUsersError } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        console.log("hello")
        // console.log(users);
        if (!isLoggedIn || role !== 'admin') {
            navigate('/login');
        } else {
            getAllUsers();
        }
    }, [isLoggedIn, role, navigate, getAllUsers]);

    if (loadingUsers) {
        return <p>Loading...</p>;
    }

    if (fetchUsersError) {
        return <p>Error: {fetchUsersError}</p>;
    }

    const handleSearch = (searchTerm) => {
        navigate('/');
    }

    return (
        <React.Fragment>
            <div className={styles.topFixed}>
                <NavBar handleSearch={handleSearch} />
            </div>

            <div className={styles.adminDashboard}>

                <h2>Admin Dashboard</h2>
                <table className={styles.userTable}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
};

export default AdminDashboard;
