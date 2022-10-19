import { signInWithEmailAndPassword } from "firebase/auth";
import { authentication } from '../services/firebase/index';

const login = ({email, password}) => signInWithEmailAndPassword(authentication, email, password);


export default { 
    login
}
