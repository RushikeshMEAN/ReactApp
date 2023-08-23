import React, { useCallback, useEffect } from "react";
import { SafeAreaView, StyleSheet, ScrollView, KeyboardAvoidingView, View } from "react-native";
import { Divider, Icon, Button, Layout, Text, TopNavigation, Input, ButtonGroup } from '@ui-kitten/components';
import { Link, useFocusEffect } from '@react-navigation/native';

const Login = (props) => {
    const [value, setValue] = React.useState('');
    const [password, setpassword] = React.useState('');

    const [errorEmail, setErrorEmail] = React.useState(false);
    const [errPassEmpty, setErrPassEmpty] = React.useState(false);

    const [errEmailPattern, setErrEmailPattern] = React.useState(false);
    const [errPassPattern, setErrPassPattern] = React.useState(false);

    //const [isValid, setIsValid] = React.useState(true);

    const StarIcon = (props) => (
        <Icon
            {...props}
            name='person-outline'
        />
    );

    const googleIcon = (props) => (
        <Icon
            {...props}
            name='google-outline'
        />
    );

    const faceBookIcon = (props) => (
        <Icon
            {...props}
            name='facebook-outline'
        />
    );
    const twitterIcon = (props) => (
        <Icon
            {...props}
            name='twitter-outline'
        />
    );

    useFocusEffect(
        React.useCallback(() => {
            setErrorEmail(false)
            setErrPassEmpty(false)
            setErrEmailPattern(false)
            setErrPassPattern(false)
            console.log("UseFocus Called...")

        },[])

    )
    const validateForm = () => {
        let bool = true;
        setErrorEmail(false)
        setErrPassEmpty(false)
        setErrEmailPattern(false)
        setErrPassPattern(false)

        let emailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        let passRegex = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');

        if (!value) {
            setErrorEmail(true)
            //setIsValid(false)
            bool = false;
        } else if (!emailRegex.test(value)) {
            setErrEmailPattern(true)
            //setIsValid(false)
            bool = false;
        }
        if (!password) {
            setErrPassEmpty(true)
            //setIsValid(false)
            bool = false;
        } else if (!passRegex.test(password)) {
            setErrPassPattern(true)
            //setIsValid(false)
            bool = false;
        }
        //console.warn(bool)
        return bool;

    }

    const signIn = () => {

        if (validateForm()) {
            console.warn("logged in successfully...!")
        } else {
            console.warn("Please check error")
        }

    }


    return (

        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView enabled behavior={Platform.OS == "ios" ? "padding" : "height"}>
                <ScrollView >
                    <TopNavigation title='Sign In' alignment='center' />
                    <Divider />


                    <View
                        style={styles.layout}
                        level='1'
                    >
                        <Text category='h1'>
                            Welcome
                        </Text>
                        <Text style={{ color: 'grey' }} category="h6">Sign in to continue!</Text>


                        <Input
                            placeholder='Email Id'
                            value={value}
                            onChangeText={nextValue => setValue(nextValue)}
                            style={{ marginTop: 40, marginLeft: 30, marginRight: 30 }}
                        />
                        {errorEmail == true ? <Text style={styles.errorStyle}>Please enter email</Text> : ""}
                        {errEmailPattern === true ? <Text style={styles.errorStyle}>Please enter valid email Id eg:'xyz@abc.com'</Text> : ""}
                        <Input
                            placeholder='Password'
                            value={password}
                            secureTextEntry={true}
                            onChangeText={nextValue => setpassword(nextValue)}
                            style={{ marginTop: 30, marginLeft: 30, marginRight: 30 }}
                        />
                        {errPassEmpty === true ? <Text style={styles.errorStyle}>Please enter password again</Text> : ""}

                        {errPassPattern === true ? <Text style={styles.errorStyle}>Password must have 8 charcters,1 special charcter,1 uppercase,1 lowercase and 1 numeric value</Text> : ""}
                        <Text style={{ marginTop: 10, marginEnd: 30, alignSelf: "flex-end" }} category="h6">
                            <Link to={{ screen: 'Survey' }}>
                                <Text
                                    style={{ color: "blue", fontSize: 15, textDecorationLine: 'underline' }}
                                > forgot password?</Text>
                            </Link>
                        </Text>

                        <Button
                            style={{ marginTop: 30, marginLeft: 30, marginRight: 30, width: 350 }}
                            accessoryLeft={StarIcon}
                            status='primary'
                            onPress={signIn}
                        >
                            Sign In
                        </Button>

                        <Text style={{ marginTop: 20 }} category="h6">I'm a new user.<Link to={{ screen: 'Register' }}>
                            <Text
                                style={{ color: "blue", fontSize: 20, textDecorationLine: 'underline' }}
                            > Sign Up</Text>
                        </Link></Text>



                        {/*<Text style={{ marginTop: 20 }}>-------------------- Or ------------------</Text>

                            <ButtonGroup style={styles.buttonGroup}>
                                <Button accessoryLeft={googleIcon} />
                                <Button style={{ marginLeft: 2 }} accessoryLeft={faceBookIcon} />
                                <Button style={{ marginLeft: 2 }} accessoryLeft={twitterIcon} />
                            </ButtonGroup>
                            <Divider />*/}

                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    buttonGroup: {
        margin: 20,
        justifyContent: "space-between"
    },
    errorStyle: {
        marginLeft: 30,
        alignSelf: 'flex-start',
        color: 'red'
    },

    container: {
        //flex: 1,
        //flexDirection: 'row',
    },
    layout: {

        alignItems: 'center',
        marginVertical: 100,
        justifyContent: "space-evenly",
        color: 'white'

    },

});

export default Login;