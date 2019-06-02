import React from 'react';
import { Easing, Animated } from 'react-native';
import { createAppContainer, createStackNavigator, createDrawerNavigator } from 'react-navigation';

import MainScreen from './screens/MainScreen';
import LangFormScreen from './screens/LangFormScreen';
import NumbFormScreen from './screens/NumbFormScreen';
import PassFormScreen from './screens/PassFormScreen';
import NameFormScreen from './screens/NameFormScreen';
import CompleteFormScreen from './screens/CompleteFormScreen';
import DobScreen from './screens/DobScreen';
import GenderScreen from './screens/GenderScreen';
import PregScreen from './screens/PregScreen';
import NewPatientScreen from './screens/NewPatientScreen';
import PatientTypeScreen from './screens/PatientTypeScreen';

let RootStack = createDrawerNavigator(
  {
    MainScreen:{
      screen: MainScreen,
      navigationOptions: ({ navigation }) => ({
        header: null
      }),
    },
    LangFormScreen:{
      screen: LangFormScreen,
      navigationOptions: ({ navigation }) => ({
        header: null
      }),
    },
    NumbFormScreen:{
      screen: NumbFormScreen,
      navigationOptions: ({ navigation }) => ({
        header: null
      }),
    },
    PassFormScreen:{
      screen: PassFormScreen,
      navigationOptions: ({ navigation }) => ({
        header: null
      }),
    },
    NameFormScreen:{
      screen: NameFormScreen,
      navigationOptions: ({ navigation }) => ({
        header: null
      }),
    },
    CompleteFormScreen:{
      screen: CompleteFormScreen,
      navigationOptions: ({ navigation }) => ({
        header: null
      }),
    },
    GenderScreen:{
      screen: GenderScreen,
      navigationOptions: ({ navigation }) => ({
        header: null
      }),
    },
    DobScreen:{
      screen: DobScreen,
      navigationOptions: ({ navigation }) => ({
        header: null
      }),
    },
    PregScreen:{
      screen: PregScreen,
      navigationOptions: ({ navigation }) => ({
        header: null
      }),
    },
    NewPatientScreen:{
      screen: NewPatientScreen,
      navigationOptions: ({ navigation }) => ({
        header: null
      }),
    },
    PatientTypeScreen:{
      screen: PatientTypeScreen,
      navigationOptions: ({ navigation }) => ({
        header: null
      }),
    }
  },
  {
    initialRouteName: 'MainScreen'
  },
  {
    headerMode: 'none',
    mode: 'modal',
    defaultNavigationOptions: {
      gesturesEnabled: false
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0]
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1]
        });

        return { opacity, transform: [{ translateY }] };
      }
    })
  }
);

export default createAppContainer(RootStack);
