"use client"
import { createContext, useContext, useState, useCallback } from 'react';

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(null);
  const [show, setShow] = useState(false);

  const hideAlert = useCallback(() => {
    setShow(false);
    setTimeout(() => setAlert(null), 300);
  }, []);

  const showAlert = useCallback((message, type = 'info', duration = 5000) => {
    setAlert({ message, type });
    setShow(true);
    
    if (duration > 0) {
      setTimeout(hideAlert, duration);
    }
  }, [hideAlert]);

  const value = {
    alert,
    show,
    showAlert,
    hideAlert
  };

  return (
    <AlertContext.Provider value={value}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useAlert must be used within an AlertProvider');
  }
  return context;
};