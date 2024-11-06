import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from '../../pages/SignIn/SignIn';
import SignUp from '../../pages/SignUp/SignUp';

function AuthLayout() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/signin" />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
        </Routes>
    )
}

export default AuthLayout