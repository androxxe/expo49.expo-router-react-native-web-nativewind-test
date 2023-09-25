import { View, Text, Button } from "react-native";
import React from "react";
import { router } from "expo-router";

const About = () => {
  return (
    <View>
      <Button title="Back" onPress={() => router.back()} />
      <Text>About</Text>
    </View>
  );
};

export default About;
