import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/Home";
import Login from "./screens/Login";
//import Contact from "./screens/ContactUs";
import Register from "./screens/Register";
import Dashboard from "./screens/Dashboard"

import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';

import Surveydetails from "./screens/Surveydetails";
import Survey from "./screens/Survey";



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Dashboard" component={Dashboard} />

            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Survey" component={Survey} />
            <Stack.Screen name="Surveydetails" component={Surveydetails} />

            
            <Stack.Screen name="Register" component={Register} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>


  )
}
export default App;