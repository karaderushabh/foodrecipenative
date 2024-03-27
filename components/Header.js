import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Header = ({ isLoggedIn, onLogout }) => {
  const navigation = useNavigation();

  const handleLogout = () => {
    onLogout();
    navigation.navigate("Login");
  };

  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <Text style={styles.title}>My React App</Text>
        {isLoggedIn ? (
          <TouchableOpacity onPress={handleLogout} style={styles.buttonLink}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={styles.buttonLink}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Register")}
              style={styles.buttonLink}
            >
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = {
  header: {
    backgroundColor: "#333",
    padding: 10,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginHorizontal: "auto",
  },
  title: {
    color: "white",
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  buttonLink: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 4,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "white",
  },
};

export default Header;
