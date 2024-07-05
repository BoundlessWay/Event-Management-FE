import React, { useState } from 'react';
import styles from './SignUp.module.scss';
import GuestForm from 'components/GuestForm/GuestForm';
import OrganizationForm from 'components/OrganizationForm/OrganizationForm';
import GoBackButton from 'components/GoBackButton/GoBackButton';

const SignUp = () => {
    const [selectedRole, setSelectedRole] = useState('guest');
    const handleRoleClick = (role) => {
        setSelectedRole(role);
    };

    return (
        <div className={styles.signUpContainer}>
            <GoBackButton />
            <main className={styles.signUpForm}>
                <div className={styles.roleSelector}>
                    <span
                        className={selectedRole === 'guest' ? styles.selected : ''}
                        onClick={() => handleRoleClick('guest')}
                    >
                        Guest
                    </span>
                    <span className={styles.separator}>|</span>
                    <span
                        className={selectedRole === 'organization' ? styles.selected : ''}
                        onClick={() => handleRoleClick('organization')}
                    >
                        Organization
                    </span>
                </div>
                {selectedRole === 'guest' ? <GuestForm /> : <OrganizationForm />}
            </main>
        </div>
    );
};

export default SignUp;
