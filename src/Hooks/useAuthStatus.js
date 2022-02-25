import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState, useRef } from 'react';

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setLoggedIn(true);
        }
        setIsLoading(false);
      });
    }
    return () => {
      isMounted.current = false;
    };
  }, []);

  return { loggedIn, isLoading };
};

// Protected routes in v6
// https://stackoverflow.com/questions/65505665/protected-route-with-firebase

// Fix memory leak warning
// https://stackoverflow.com/questions/59780268/cleanup-memory-leaks-on-an-unmounted-component-in-react-hooks
