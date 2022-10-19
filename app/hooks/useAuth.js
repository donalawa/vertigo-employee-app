import { useContext } from 'react';
import AuthContext from '../auth/context';
import authStorage from '../services/authentication/storage';
import { verifyBeforeUpdateEmail } from 'firebase/auth';

const useAuth = () => {
    const { user, setUser } = useContext(AuthContext);
    
    const fetchUser = (authToken) => {
        // Fetch user from firebase
        
    }

    const logOut = () => {
        setUser(null);
        authStorage.removeToken();
    }

    const logIn = (authToken, user) => {
        // const user = Fetch user from fb
        // SET USER TO CONTEXT
        authStorage.storeToken(authToken);
        setUser(user)
    }

    return { user, logOut, logIn};
}

export default useAuth;
