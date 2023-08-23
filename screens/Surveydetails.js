import React, { useEffect, useState } from "react";
import { SafeAreaView, KeyboardAvoidingView, ScrollView, StyleSheet, View } from "react-native"
import { TopNavigation, Icon, Divider, TopNavigationAction,Input, Layout, Text,Datepicker,Button } from '@ui-kitten/components';


const Surveydetails = (props) => {

    const [id, setId] = useState("");
    const [surveyNumber, setSurveyNumber] = useState("");
    const [crop,setCrop] = useState("")
    const[croppingPattern ,setCroppingPattern]=useState("")
    const[cropStage,setcropStage]=useState("")
    const [date, setDate] = React.useState();
    const[harvastingDate,setHarvastingDate]=useState("")
    const[dateOfLoss,setDateOfLoss]=useState("")
    const[causeOfLoss,setCauseOfLoss]=useState("")
    const[insuredArea,setInsuredArea]=useState("")
    const[cropLoss,setCropLoss] =useState("")
    const[recoveryRate,setRecoveryRate]=useState("")

    const[errCrop,setErrCrop]= React.useState(false);
    const[errCroppingPtrn,setErrCroppingPtrn] = React.useState(false);
    const[errCropStage,setErrCropStage] = React.useState(false);
    const[errDate,setErrDate]= React.useState(false);
    const[errHarvastingDate,setErrHarvastingDate]= React.useState(false);
    const[errDateOfLoss,setErrDateOfLoss]=  React.useState(false);
    const[errCauseOfLoss,setErrCauseOfLoss]=  React.useState(false);
    const[errInsuredArea,setErrInsuredArea]=  React.useState(false);
    const[errCropLoss,setErrCropLoss]= React.useState(false);
    const[errRecoveryRate,setErrRecoveryRate]= React.useState(false);


    const navigateBack = () => {
        props.navigation.goBack();
    };
    const BackIcon = (props) => (
        <Icon {...props} name='arrow-back' />
    );

    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
    );
    const CalendarIcon = (props) => (
        <Icon
            {...props}
            name='calendar'
        />
    );
    const validateForm =()=>{
        setErrCrop(false) 
        setErrCroppingPtrn(false)
        setErrCropStage(false)
        setErrDate(false)
        setErrHarvastingDate(false)
        setErrDateOfLoss(false) 
        setErrCauseOfLoss(false)
        setErrInsuredArea(false)
        setErrCropLoss(false)
        setErrRecoveryRate(false)
        
        if(!crop){
            setErrCrop(true) 
        }
        if(!croppingPattern){
         setErrCroppingPtrn(true) 
        }
        if(!cropStage){
            setErrCropStage(true) 
        }
        if(!date){
            setErrDate(true) 
        }
        if(!harvastingDate){
            setErrHarvastingDate(true)
        }
        if(!dateOfLoss){
            setErrDateOfLoss(true) 
        }
        if(!causeOfLoss){
            setErrCauseOfLoss(true)

        }
        if(!insuredArea){
            setErrInsuredArea(true)
        }
        if(!cropLoss){
            setErrCropLoss(true) 
        }
        if(!recoveryRate){
            setErrRecoveryRate(true)
        }

    }
    const onSubmit =()=>{
        console.warn("Hi")
        validateForm()

    }
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS == "ios" ? "padding" : "height"}>
                <ScrollView >
                    <TopNavigation title=' Survey Details' alignment='center' accessoryLeft={BackAction} />
                    <Divider />
                    <Layout style={styles.container}>
                        <View style={{ flex: 1, }}>
                            <Text
                                style={{ alignSelf: 'center' }}
                                category='h5'
                            >Survey Detail Form </Text>
                        </View>

                        <Divider />
                    </Layout>
                    <Layout style={styles.container}>
                    <View style={styles.layout}>
                    <View style={styles.innerView}>
                                <Input
                                    value={id}
                                    label={evaProps => <Text {...evaProps.style.fontSize}> ID</Text>}
                                    placeholder='Place your Text'
                                    disabled={false}

                                />
                            </View>
                            <View style={styles.innerView}>
                                <Input
                                    value={surveyNumber}
                                    label={evaProps => <Text {...evaProps.style.fontSize}>Survey Number </Text>}
                                    placeholder='Place your Text'
                                    disabled={false}

                                />
                            </View>
                            <View style={styles.innerView}>
                                <Input
                                    value={crop}
                                    label={evaProps => <Text {...evaProps.style.fontSize}>Crop </Text>}
                                    placeholder='Place your Text'
                                    disabled={false}

                                />
                                {errCrop == true ? <Text style={styles.errorStyle}>Please enter your crop.</Text> : ""}
                            </View>
                            <View style={styles.innerView}>
                                <Input
                                    value={croppingPattern}
                                    label={evaProps => <Text {...evaProps.style.fontSize}>Cropping Pattern </Text>}
                                    placeholder='Place your Text'
                                    disabled={false}

                                />
                                {errCroppingPtrn == true ? <Text style={styles.errorStyle}>Please enter your croppig pattern.</Text> : ""}
                            </View>
                            <View style={styles.innerView}>
                                <Input
                                    value={cropStage}
                                    label={evaProps => <Text {...evaProps.style.fontSize}>Crop Stage </Text>}
                                    placeholder='Place your Text'
                                    disabled={false}

                                />
                                {errCropStage == true ? <Text style={styles.errorStyle}>Please enter your crop stage.</Text> : ""}
                            </View>
                            <View style={styles.innerView}>

                                <Datepicker
                                    label={evaProps => <Text {...evaProps.style.fontSize}>Sowing Date  </Text>}
                                    //caption='Caption'
                                    placeholder='Pick Date'
                                    date={date}
                                    onSelect={nextDate => setDate(nextDate)}
                                    accessoryRight={CalendarIcon}
                                />
                                {errDate == true ? <Text style={styles.errorStyle}>Please select the sowing date.</Text> : ""}
                            </View>
                            <View style={styles.innerView}>

                                <Datepicker
                                    label={evaProps => <Text {...evaProps.style.fontSize}>Expected Date of Harvesting   </Text>}
                                    //caption='Caption'
                                    placeholder='Pick Date'
                                    date={harvastingDate}
                                    onSelect={nextDate => setHarvastingDate(nextDate)}
                                    accessoryRight={CalendarIcon}
                                />
                                {errHarvastingDate == true ? <Text style={styles.errorStyle}>Please select the Harvesting date.</Text> : ""}
                            </View>
                            <View style={styles.innerView}>

                                <Datepicker
                                    label={evaProps => <Text {...evaProps.style.fontSize}> Date of loss   </Text>}
                                    //caption='Caption'
                                    placeholder='Pick Date'
                                    date={dateOfLoss}
                                    onSelect={nextDate => setDateOfLoss(nextDate)}
                                    accessoryRight={CalendarIcon}
                                />
                                {errDateOfLoss == true ? <Text style={styles.errorStyle}>Please select the date of Loss.</Text> : ""}
                            </View>
                            <View style={styles.innerView}>
                                <Input
                                    value={causeOfLoss}
                                    label={evaProps => <Text {...evaProps.style.fontSize}>Cause Of Loss </Text>}
                                    placeholder='Place your Text'
                                    disabled={false}

                                />
                                {errCauseOfLoss == true ? <Text style={styles.errorStyle}>Please enter your cause of loss.</Text> : ""}
                            </View>
                            <View style={styles.innerView}>
                                <Input
                                    value={insuredArea}
                                    label={evaProps => <Text {...evaProps.style.fontSize}>Insured Area </Text>}
                                    placeholder='Place your Text'
                                    disabled={false}

                                />
                                {errInsuredArea == true ? <Text style={styles.errorStyle}>Please enter your insured area.</Text> : ""}
                            </View>
                            <View style={styles.innerView}>
                                <Input
                                    value={cropLoss}
                                    label={evaProps => <Text {...evaProps.style.fontSize}> Crop loss % </Text>}
                                    placeholder='Place your Text'
                                    disabled={false}

                                />
                                {errCropLoss == true ? <Text style={styles.errorStyle}>Please enter your crop loss %.</Text> : ""}
                            </View>
                            <View style={styles.innerView}>
                                <Input
                                    value={recoveryRate}
                                    label={evaProps => <Text {...evaProps.style.fontSize}> Recovery rate % </Text>}
                                    placeholder='Place your Text'
                                    disabled={false}

                                />
                                {errRecoveryRate == true ? <Text style={styles.errorStyle}>Please enter your recovery rate %.</Text> : ""}
                            </View>
                            <Button
                                style={{ marginVertical: 10, backgroundColor: 'blue' }}
                                appearance='outline'
                                status='control'
                                onPress={onSubmit}
                            >
                                Submit
                            </Button>
                        </View>
                    </Layout>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 2
    },
    innerView: {
        marginBottom: 20
    },
    layout: {
        marginHorizontal: 20,
        //borderColor: 'red',
        //borderWidth: 1,
        flex: 1,
        marginVertical: 20
    },
    errorStyle: {
        color: 'red'
    },
})

export default Surveydetails;