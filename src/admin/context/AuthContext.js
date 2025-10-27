import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Create the context
const AuthContext = createContext(null);

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(localStorage.getItem('adminToken'));
    const navigate = useNavigate();

    // Effect to listen for changes in authToken and localStorage
    useEffect(() => {
        const handleStorageChange = () => {
            setAuthToken(localStorage.getItem('adminToken'));
        };

        window.addEventListener('storage', handleStorageChange);

        // Set initial token from localStorage
        const token = localStorage.getItem('adminToken');
        if (token) {
            setAuthToken(token);
        }

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    // The login function that will be called from the Login component
    const login = (token) => {
        localStorage.setItem('adminToken', token);
        setAuthToken(token);
        navigate('/admin'); // Navigate after setting the state
    };

    // The logout function
    const logout = () => {
        localStorage.removeItem('adminToken');
        setAuthToken(null);
        navigate('/admin/login'); // Navigate to login after logout
    };

    // The value provided to the context consumers
    const value = {
        authToken,
        isAuthenticated: !!authToken, // A boolean to easily check for authentication
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use the auth context easily in other components
export const useAuth = () => {
    return useContext(AuthContext);
};
