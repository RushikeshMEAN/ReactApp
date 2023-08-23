import React, { useEffect, useState } from "react";
import { ScrollView, View, KeyboardAvoidingView, SafeAreaView, Platform, StyleSheet } from "react-native";
import { IndexPath, Select, SelectItem, Icon, Input, TopNavigation, TopNavigationAction, Button, Text, Layout, Divider, Datepicker } from '@ui-kitten/components';
//import { Link } from '@react-navigation/native';
//import { Input, } from '@ui-kitten/components';
const Survey = (props) => {

    const [id, setId] = useState("15");
    const [surveyNumber, setSurveyNumber] = useState("");
    const [surveyDate, setSurveyDate] = useState("")
    const [date, setDate] = React.useState(new Date());
    const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
    const [surveyTP, setSurveyTP] = useState("Select");
    const [claimId, setClaimId] = useState(" ");
    const [year, setYear] = useState("");
    const [season, setSeason] = useState("");
    const [state, setState] = useState("");
    const [district, setDistrict] = useState("");
    const [taluka, setTaluka] = useState("");
    const [revenueCircle, setRevenueCircle] = useState("");
    const [gramPanchyat, setGramPanchyat] = useState("");
    const [village, setVillage] = useState("");

    const [khasaraNo, setKhasaraNo] = useState("");
    const [totalLandArea, setTotalLandArea] = useState("");
    const [areaLossLand, setAreaLossLand] = useState("");
    const [surveyor, setSurveyor] = useState("");

    const [errtotalLandArea, setErrTotalLandArea] = React.useState(false);
    const[errAreaLossLand,setErrAreaLossLand]= React.useState(false);
    const[errKhasaraNo,setErrKhasaraNo]= React.useState(false);


    const BackIcon = (props) => (
        <Icon {...props} name='arrow-back' />
    );
    const navigateBack = () => {
        props.navigation.goBack();
        //props.navigation.navigate("Login");
       
    };
    const navigateNext = () => {
        //props.navigation.goBack();
        props.navigation.navigate("Surveyform");
       
    };

    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
    );
    const CalendarIcon = (props) => (
        <Icon
            {...props}
            name='calendar'
        />
    );

    const surveyType = ['Select', 'LC', 'PH', 'Mid Season']

    useEffect(() => {
        setId("1987");
        setSurveyNumber("2345");
        setClaimId("180 ");
        setYear("2023");
        setSeason("Rubby");
        setState("Maharashtra");
        setDistrict("Pune");
        setTaluka("Mulshi");
        setRevenueCircle("Baner");
        setGramPanchyat("Baner Gaon")
        setVillage("Nande");

    }, [])

    useEffect(() => {
        console.log(selectedIndex.row)
        setSurveyTP(surveyType[selectedIndex.row])
        //console.log("Variable value: ",surveyTP)
    }, [selectedIndex])

    useEffect(() => {

        console.log("Variable value: ", surveyTP)
    }, [surveyTP])

    const validateForm =()=>{
        setErrTotalLandArea(false)
        setErrAreaLossLand(false)
        setErrKhasaraNo(false)

        if(!totalLandArea){
            setErrTotalLandArea(true)
        }
        if(!areaLossLand){
            setErrAreaLossLand(true)
        }
        if(!khasaraNo){
            setErrKhasaraNo(true)
        }

    }

   const onSubmit =()=>{
    validateForm()
   }

    return (

        <SafeAreaView style={{ flex: 1, }}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS == "ios" ? "padding" : "height"}>
                <ScrollView >
                    <TopNavigation title=' Survey' alignment='center' accessoryLeft={BackAction} />
                    <Divider />


                    <Layout style={styles.container}>
                        <View style={{ flex: 1, }}>
                            <Text
                                style={{ alignSelf: 'center' }}
                                category='h5'
                            >Survey {surveyNumber} </Text>
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
                                    disabled={true}

                                />
                            </View>
                            <View style={styles.innerView}>
                                <Input
                                    value={surveyNumber}

                                    label={evaProps => <Text {...evaProps.style.fontSize}>Survey Number </Text>}
                                    placeholder='Place your Text'
                                    disabled={true}
                                    onChangeText={value => setSurveyNumber(value)}
                                />
                            </View>

                            <View style={styles.innerView}>

                                <Datepicker
                                    label={evaProps => <Text {...evaProps.style.fontSize}>Survey Date </Text>}
                                    //caption='Caption'
                                    placeholder='Pick Date'
                                    date={date}
                                    onSelect={nextDate => setDate(nextDate)}
                                    accessoryRight={CalendarIcon}
                                />
                            </View>
                            <View style={styles.innerView}>
                                <Select
                                    label={evaProps => <Text {...evaProps.style.fontSize}>Survey Type </Text>}
                                    selectedIndex={selectedIndex}
                                    value={surveyTP}
                                    onSelect={index => setSelectedIndex(index)}
                                >
                                    {
                                        surveyType.map((item) => {
                                            return <SelectItem key={item} title={item} />
                                        })
                                    }
                                </Select>
                            </View>
                            <View style={styles.innerView}>
                                <Input
                                    value={claimId}
                                    label={evaProps => <Text {...evaProps.style.fontSize}> Claims Id</Text>}
                                    placeholder='Place your Text'
                                    disabled={true}
                                    onChangeText={value => setClaimId(value)}
                                />
                            </View>
                            <View style={styles.innerView}>
                                <Input
                                    value={year}
                                    label={evaProps => <Text {...evaProps.style.fontSize}> Year</Text>}
                                    placeholder='Place your Text'
                                    disabled={true}
                                    onChangeText={value => setYear(value)}
                                />
                            </View>
                            <View style={styles.innerView}>
                                <Input
                                    value={season}
                                    label={evaProps => <Text {...evaProps.style.fontSize}> Season</Text>}
                                    placeholder='Place your Text'
                                    disabled={true}
                                    onChangeText={value => setSeason(value)}

                                />
                            </View>
                            <View style={styles.innerView}>
                                <Input
                                    value={state}
                                    label={evaProps => <Text {...evaProps.style.fontSize}> State</Text>}
                                    placeholder='Place your Text'
                                    disabled={true}
                                    onChangeText={value => setState(value)}
                                />
                            </View>
                            <View style={styles.innerView}>
                                <Input
                                    value={district}
                                    label={evaProps => <Text {...evaProps.style.fontSize}> District</Text>}
                                    placeholder='Place your Text'
                                    disabled={true}
                                    onChangeText={value => setDistrict(value)}
                                />
                            </View>
                            <View style={styles.innerView}>
                                <Input
                                    value={taluka}
                                    label={evaProps => <Text {...evaProps.style.fontSize}> Taluka</Text>}
                                    placeholder='Place your Text'
                                    disabled={true}
                                    onChangeText={value => setTaluka(value)}
                                />
                            </View>
                            <View style={styles.innerView}>
                                <Input
                                    value={revenueCircle}
                                    label={evaProps => <Text {...evaProps.style.fontSize}> Revenue Circle</Text>}
                                    placeholder='Place your Text'
                                    disabled={true}
                                    onChangeText={value => setRevenueCircle(value)}
                                />
                            </View>
                            <View style={styles.innerView}>
                                <Input
                                    value={gramPanchyat}
                                    label={evaProps => <Text {...evaProps.style.fontSize}> Gram Panchayat </Text>}
                                    placeholder='Place your Text'
                                    disabled={true}
                                    onChangeText={value => setGramPanchyat(value)}
                                />
                            </View>
                            <View style={styles.innerView}>
                                <Input
                                    value={village}
                                    label={evaProps => <Text {...evaProps.style.fontSize}> Village  </Text>}
                                    placeholder='Place your Text'
                                    disabled={true}
                                    onChangeText={value => setVillage(value)}
                                />
                            </View>
                            <View style={styles.innerView}>
                                <Input
                                    value={khasaraNo}
                                    label={evaProps => <Text {...evaProps.style.fontSize}> Khasara No.  </Text>}
                                    placeholder='Place your Text'
                                    disabled={false}
                                    onChangeText={value => setKhasaraNo(value)}
                                />
                                {errKhasaraNo == true ? <Text style={styles.errorStyle}>Please enter khasara no.</Text> : ""}
                            </View>
                            <View style={styles.innerView}>
                                <Input
                                    value={totalLandArea}
                                    label={evaProps => <Text {...evaProps.style.fontSize}> Total land Area </Text>}
                                    placeholder='Place your Text'
                                    disabled={false}
                                    onChangeText={value => setTotalLandArea(value)}
                                />
                                {errtotalLandArea == true ? <Text style={styles.errorStyle}>Please enter total land area</Text> : ""}
                            </View>
                            <View style={styles.innerView}>
                                <Input
                                    value={areaLossLand}
                                    label={evaProps => <Text {...evaProps.style.fontSize}> Area of loss land </Text>}
                                    placeholder='Place your Text'
                                    disabled={false}
                                    onChangeText={value => setAreaLossLand(value)}
                                />
                                {errAreaLossLand == true ? <Text style={styles.errorStyle}>Please enter area of loss land</Text> : ""}
                            </View>
                            <View style={styles.innerView}>
                                <Input
                                    value={surveyor}
                                    label={evaProps => <Text {...evaProps.style.fontSize}> Surveyor </Text>}
                                    placeholder='Place your Text'
                                    disabled={false}
                                    onChangeText={value => setSurveyor(value)}
                                />
                            </View>
                            <Button
                                style={{ marginTop: 30, }}
                                //accessoryLeft={StarIcon}
                                status='primary'
                                onPress={()=>props.navigation.navigate("Surveydetails")}
                            >
                                Next
                            </Button>
                            <Button
                                style={{ marginTop: 20, }}
                                //accessoryLeft={StarIcon}
                                status='primary'
                                onPress={onSubmit}
                            >
                                Submit
                            </Button>
                            
                            <Button
                                style={{ marginVertical: 10, backgroundColor: 'black' }}
                                appearance='outline'
                                status='control'
                                onPress={navigateBack}
                            >
                                Cancel
                            </Button>




                        </View>
                    </Layout>


                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>



    )
}

const styles = StyleSheet.create({
    innerView: {
        marginBottom: 20
    },
    txtStyle: {
        fontSize: 20,
        fontWeight: '600',

    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    layout: {
        marginHorizontal: 20,
        //borderColor: 'red',
        //borderWidth: 1,
        flex: 1,
        marginVertical: 20
    },
    textView: {
        paddingBottom: 20,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 2
    },
    errorStyle: {
        color: 'red'
    },
});
export default Survey;

