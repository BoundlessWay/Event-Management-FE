import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicRoutes from 'routes/PublicRoutes';
import AdminRoutes from 'routes/AdminRoutes';
import GuestRoutes from 'routes/GuestRoutes';
import OrganizationRoutes from 'routes/OrganizationRoutes';
import NotFound from 'pages/NotFound/NotFound';
import useAuth from 'hooks/useAuth';


function App() {

  const { isLoggedIn, role } = useAuth();

  return (
    <Router>
      <Routes>
        {isLoggedIn && role === 'admin' && AdminRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}

        {isLoggedIn && role === 'guest' && GuestRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}

        {isLoggedIn && role === 'organization' && OrganizationRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}

        {PublicRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}

        <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
  );
}

export default App;
