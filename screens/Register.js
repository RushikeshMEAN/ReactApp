import React from "react";
import { ScrollView, KeyboardAvoidingView, SafeAreaView, StyleSheet, Platform, View } from "react-native";
import { Divider, Icon, Button, Layout, Text, TopNavigation, TopNavigationAction, Input, } from '@ui-kitten/components';
import { Link } from '@react-navigation/native';
const Register = (props) => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    const [errorEmail, setErrorEmail] = React.useState(false);
    const [errPassEmpty, setErrPassEmpty] = React.useState(false);
    const [errConPassMt, setErrConPassMt] = React.useState(false);
    const [errConPasSame, setErrConPasSame] = React.useState(false);

    const [errEmailPattern, setErrEmailPattern] = React.useState(false);

    const StarIcon = (props) => (
        <Icon
            {...props}
            name='person-outline'
        />
    );
    const BackIcon = (props) => (
        <Icon {...props} name='arrow-back' />
    );

    const navigateBack = () => {
        props.navigation.goBack();
    };

    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
    );
    const validateForm = () => {
        setErrorEmail(false)
        setErrPassEmpty(false)
        setErrConPassMt(false)
        setErrConPasSame(false)
        setErrEmailPattern(false)
        let emailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        //let passRegex = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');

        if (!email) {
            setErrorEmail(true)
        } else if (!emailRegex.test(email)) {
            setErrEmailPattern(true);
        }
        if (!password) {
            setErrPassEmpty(true)
        }
        if (!confirmPassword) {
            setErrConPassMt(true)
        } else if (password != confirmPassword) {
            setErrConPasSame(true)
        }

    }
    const signUp = () => {
        validateForm()
    }
    return (

        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView enabled behavior={Platform.OS == "ios" ? "padding" : "height"}>
                <ScrollView  >

                    <TopNavigation title='Sign Up' alignment='center' accessoryLeft={BackAction} />
                    <Divider />
                    <View style={style.layout}>
                        <Text category='h1'>
                            Welcome
                        </Text>
                        <Text style={{ color: 'grey' }} category="h6">Sign Up to continue!</Text>

                        <Input
                            placeholder='Email'
                            value={email}
                            onChangeText={nextValue => setEmail(nextValue)}
                            style={{ marginTop: 40, marginHorizontal:30, }}
                        />
                        {errorEmail == true ? <Text style={style.errorStyle}>Please enter email</Text> : ""}
                        {errEmailPattern == true ? <Text style={style.errorStyle}>Please enter valid email Id eg:'xyz@abc.com'</Text> : ""}
                        <Input
                            placeholder='Password'
                            value={password}
                            secureTextEntry={true}
                            onChangeText={nextValue => setPassword(nextValue)}
                            style={{ marginTop: 40, marginHorizontal:30 }}
                        />
                        {errPassEmpty == true ? <Text style={style.errorStyle}>Please enter password</Text> : ""}
                        
                        <Input
                            placeholder='Confirm Password'
                            Value={confirmPassword}
                            secureTextEntry={true}
                            onChangeText={nextValue => setConfirmPassword(nextValue)}
                            style={{ marginTop: 40, marginHorizontal:30}}
                        />
                        {errConPassMt == true ? <Text style={style.errorStyle}>Please enter password again </Text> : ""}
                        {errConPasSame == true ? <Text style={style.errorStyle}>Password must be same</Text> : ""}

                        <Button
                            style={{ marginTop: 30, marginHorizontal:30, width: 350 }}
                            accessoryLeft={StarIcon}
                            status='primary'
                            onPress={signUp}
                        >
                            Sign Up
                        </Button>

                        <Text style={{ marginTop: 20 }} category="h6"> Already a member?<Link to={{ screen: 'Login' }}>
                            <Text
                                style={{ color: "blue", fontSize: 20, textDecorationLine: 'underline' }}
                            > Sign In</Text>
                        </Link></Text>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>

    )
}

const style = StyleSheet.create({
    errorStyle: {
        marginLeft: 30,
        alignSelf: 'flex-start',
        color: 'red'
    },
  
    layout: {

        alignItems: 'center',
        marginVertical:100
        
    },
})
export default Register;

{/*
    <Layout style={style.container}>

                    <Layout
                        style={style.layout}
                        level='1'
                    ></Layout>*/
}