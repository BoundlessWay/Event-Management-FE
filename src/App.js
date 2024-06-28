import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PublicRoutes from 'routes/PublicRoutes';
import AdminRoutes from 'routes/AdminRoutes';
import GuestRoutes from 'routes/GuestRoutes';
import OrganizationRoutes from 'routes/OrganizationRoutes';
import { useAuth } from 'hooks/useAuth';


function App() {

  const { isLoggedIn, role } = useAuth();

  return (
    <Router>
      <PublicRoutes />
      {isLoggedIn && role === 'admin' && <AdminRoutes />}
      {isLoggedIn && role === 'guest' && <GuestRoutes />}
      {isLoggedIn && role === 'organization' && <OrganizationRoutes />}
    </Router>
  );
}

export default App;
