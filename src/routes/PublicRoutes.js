// PublicRoutes.js
import HomePage from 'pages/HomePage/HomePage';
import Login from 'pages/Login/Login';
import SignUp from 'pages/SignUp/SignUp';
import ForgotPassword from 'pages/ForgotPassword/ForgotPassword';
// import EventDetail from 'pages/EventDetail/EventDetail';

const PublicRoutes = [
    { path: "/", element: <HomePage /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/forgot-password", element: <ForgotPassword /> },
    // { path: '/eventDetail/:id', element: <EventDetail />, },

];

export default PublicRoutes;
