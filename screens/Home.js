import React from "react";
import { View, Text, Button } from "react-native"

const Home = (props) => {
    return (
        <View>
            <Text>This is My Home Page</Text>
            <Button
                title="Go to Contact us Page"
                onPress={() => props.navigation.navigate("Contact")}
            ></Button>
        </View>
    )
}
export default Home;