import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import AppFormField from '../components/forms/AppFormField';
import AppForm from '../components/forms/AppForm';
import AuthContext from '../auth/context';
import SubmitButton from '../components/forms/SubmitButton';
import AppText from '../components/AppText';
import AppLargeText from '../components/AppLargeText';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import defaultStyles from '../config/styles';
import Screen from '../components/Screen';
import auth from '../api/auth';
import useAuth from '../hooks/useAuth';
import colors from '../config/colors';


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})


function LoginScreen(props) {
    const authContext = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const {logIn} = useAuth();

    const onSubmitHandler = ({email, password}) => {
        try {
            setIsLoading(true);
            auth.login({email, password}).then(userCredential => {
                 // store token
                 userCredential.user.getIdToken().then(token => {
                    logIn(token, userCredential.user);
                })

                setIsLoading(false);
            }).catch(error => {
                // console.log("ERROR", error)
                setIsLoading(false);
                if (error.code === "auth/user-not-found") {
                setError("User not found.");
                } else if (error.code === "auth/wrong-password") {
                setError("Invalid email or password.");
                } else {
                setError("Error logging you in. Please try again");
                }
            })
        } catch (error) {
            console.log("ERROR")
        }
    }  
    
    return (
        <Screen>
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <AppLargeText style={styles.title}>Vertigo</AppLargeText>
                    {!error ? <AppText style={styles.text}>
                        Please Enter Your Credentials
                    </AppText>   :
                    <AppText style={styles.errorText}>
                        {error}
                    </AppText>}
                    <View style={styles.formContainer}>
                        <AppForm 
                        initialValues={{email: '', password: ''}}
                        onSubmit={(values) => onSubmitHandler(values)}
                        validationSchema={validationSchema}
                        >
                            <AppFormField 
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="email-outline"
                            name="email"
                            keyBoardType="email-address"
                            placeholder="Enter email"
                            textContentType="emailAddress"
                            />
                            <AppFormField 
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock-outline"
                            name="password"
                            placeholder="Enter Password"
                            secureTextEntry
                            textContentType="password"
                            />
                            <View style={styles.loginBtnContainer}>
                                <SubmitButton title="Login" />
                            </View>
                        </AppForm>
                    </View>
                </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: defaultStyles.colors.dark,
        justifyContent: 'center',
    },
    contentContainer: {
        // backgroundColor: 'royalblue',
        height: '55%',
        width: '100%',
        alignItems: 'center'

    },
    errorText: {
        color: colors.danger
    },
    title: {
        color: defaultStyles.colors.primary,
        fontSize: 70,
        textAlign: 'center',
    },
    formContainer: {
        width: '90%',
        marginTop: 20
    },
    loginBtnContainer: {
        marginTop: 22
    }
})

export default LoginScreen;