// PublicRoutes.js
import HomePage from 'pages/HomePage/HomePage';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import ForgotPassword from 'pages/ForgotPassword/ForgotPassword';

const PublicRoutes = [
    { path: "/", element: <HomePage /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/forgot-password", element: <ForgotPassword /> },
];

export default PublicRoutes;
