import React, { useContext } from 'react';
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

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})

function LoginScreen(props) {
    const authContext = useContext(AuthContext);

    return (
        <Screen>
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <AppLargeText style={styles.title}>Vertigo</AppLargeText>
                    <View style={styles.formContainer}>
                        <AppForm 
                        initialValues={{email: '', password: ''}}
                        onSubmit={(values) => authContext.setUser(values)}
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