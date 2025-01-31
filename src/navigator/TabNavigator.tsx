import React from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import TicketScreen from "../screens/TicketScreen";
import UserAccountScreen from "../screens/UserAccountScreen";
import { COLORS, FONTSIZE, SPACING } from "../theme/Theme";
import { Entypo, MaterialCommunityIcons, Feather, AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.Black,
          borderTopWidth: 0,
          height: SPACING.space_10 * 10,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={[ styles.activeTabBackground, focused ? {backgroundColor: COLORS.Orange} : {}, ]}>
              <Entypo
                name="video"
                size={FONTSIZE.size_30}
                color={focused ? COLORS.White : COLORS.White}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={[ styles.activeTabBackground, focused ? {backgroundColor: COLORS.Orange} : {}, ]}>
              <Feather
                name="search"
                size={FONTSIZE.size_30}
                color={focused ? COLORS.White : COLORS.White}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Ticket"
        component={TicketScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={[ styles.activeTabBackground, focused ? {backgroundColor: COLORS.Orange} : {}, ]}>
              <MaterialCommunityIcons
                name="ticket-confirmation-outline"
                size={FONTSIZE.size_30}
                color={focused ? COLORS.White : COLORS.White}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={UserAccountScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={[ styles.activeTabBackground, focused ? {backgroundColor: COLORS.Orange} : {}, ]}>
              <AntDesign
                name="user"
                size={FONTSIZE.size_30}
                color={focused ? COLORS.White : COLORS.White}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  activeTabBackground: {
    backgroundColor: COLORS.Black,
    padding: SPACING.space_18,
    borderRadius: SPACING.space_18 * 10,
  },
  tabBackground: {
    padding: SPACING.space_18,
  },
});

export default TabNavigator;
