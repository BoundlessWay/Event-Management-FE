
import AdminDashboard from 'pages/AdminDashboard/AdminDashboard';
import UserDetail from 'pages/UserDetail/UserDetail';
import AccountSetting from 'pages/AccountSettings/AccountSetting';
import ReportRevenue from 'pages/ReportRevenue/ReportRevenue';

const AdminRoutes = [
    { path: "/dashboard", element: <AdminDashboard /> },
    { path: "/user-detail", element: <UserDetail /> },
    { path: "/account-setting", element: <AccountSetting /> },
    { path: "/report-revenue", element: <ReportRevenue /> },
];

export default AdminRoutes;
