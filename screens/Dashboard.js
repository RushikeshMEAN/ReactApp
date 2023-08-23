import React from "react";
import { View, Text, Button } from "react-native";

const Dashboard = (props) => {
    return (
        <View>
            <Text>This Dashboard  page</Text>
            <Button
                title="Go To Login page"
                onPress={() => props.navigation.navigate("Login")}
            ></Button>
            <Button
                title="Register Me"
                onPress={()=>props.navigation.navigate("Register")}
            >

            </Button>
        </View>
    )
}
export default Dashboard;