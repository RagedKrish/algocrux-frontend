"use client";
import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';

const useAuth = () => {
    const [auth, setAuth] = useState(false);
    
    useEffect(() => {
        const token = Cookies.get('token')
        if (token) {
            setAuth(true);
        }
    }, []);
    
    return auth;
};

export default useAuth;