import { useState, useEffect } from "react";

export function useOnlineStatus() {
    
    let [userOnline, setUserOnline] = useState(true); 
    
    useEffect(()=>{
        function handleOnline() {
            setUserOnline(true);
          }
          function handleOffline() {
            setUserOnline(false);
          }
        window.addEventListener('online',handleOnline);
        window.addEventListener('offline',handleOffline);
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
          };
    },[])
    return userOnline;
}