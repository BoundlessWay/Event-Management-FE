import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from '../pages/AdminDashboard/AdminDashboard';
import UserDetail from '../pages/UserDetail/UserDetail';
import AccountSetting from '../pages/AccountSettings/AccountSetting';
import ReportRevenue from '../pages/ReportRevenue/ReportRevenue';

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/user-detail" element={<UserDetail />} />
            <Route path="/account-setting" element={<AccountSetting />} />
            <Route path="/report-revenue" element={<ReportRevenue />} />
        </Routes>
    );
};

export default AdminRoutes;
