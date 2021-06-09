import React, { useContext, useState, useEffect} from "react";

const AlertContext = React.createContext();

export function useAlert() {
  return useContext(AlertContext);
}

export default function AlertProvider({ children }) {
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState()

  useEffect( () => {
    setShowAlert(true)
    const alert_id = setInterval(() => {
      setShowAlert(false)
      setAlertMessage("")
    },7000);
  return () => {
    clearInterval(alert_id);
  }
},[alertMessage]);

  

  const value = {
    showAlert,
    alertMessage,
    setAlertMessage
  };

  return (
    <AlertContext.Provider value={value}>
      {children}
    </AlertContext.Provider>
  );
}  