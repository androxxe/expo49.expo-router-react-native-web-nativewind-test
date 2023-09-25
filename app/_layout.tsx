import React from "react";
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native";

const Layout = () => {
  return (
    <SafeAreaView className="flex-1 w-full mx-auto bg-slate-200 flex items-center justify-center">
      <Slot />
    </SafeAreaView>
  );
};

export default Layout;
