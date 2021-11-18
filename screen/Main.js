import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from './HomeScreen';
import FacilitiesScreen from './FacilitiesScreen';
import ProgressScreen from './ProgressScreen';
import SocialScreen from './SocialScreen';
import SettingScreen from "./SettingsScreen";
import RoutineScreen from "./RoutineScreen";
import {
    MaterialIcons,
    Ionicons,
    MaterialCommunityIcons,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default Main = () => {
  
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "#06b6d4",
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: "Welcome",
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="home"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Facilities"
                component={FacilitiesScreen}
                options={{
                    title: "Facilities Booking",
                    tabBarLabel: "Facility",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="sports-tennis"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Progress"
                component={ProgressScreen}
                options={{
                    title: "Progress Monitoring",
                    tabBarLabel: "Progress",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="checkmark-circle-outline"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Social"
                component={SocialScreen}
                options={{
                    title: "Social",
                    tabBarLabel: "Social",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="people" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Routine"
                component={RoutineScreen}
                options={{
                    title: "Routine",
                    tabBarLabel: "Routine",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="barbell" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingScreen}
                options={{
                    title: "Settings",
                    tabBarLabel: "Settings",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="settings" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );

}
