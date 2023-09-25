import { Text, View, ScrollView } from "react-native";
import React from "react";
import { withExpoSnack } from "nativewind";
import { StatusBar } from "expo-status-bar";
import colors from "tailwindcss/colors";
import { Link } from "expo-router";

const Index = () => {
  return (
    <>
      <StatusBar style="light" backgroundColor={colors.blue[500]} />
      <ScrollView className="maxga-w-xl bg-white py-5">
        <Link href={"/"}>test</Link>
        <View className="px-4">
          <Text className="text-base font-semibold leading-7 text-gray-900">
            Applicant Information
          </Text>
          <Text className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            Personal details and application.
          </Text>
        </View>
        <View className="mt-6 gap-4">
          <View className="divide-y divide-gray-100">
            <View className="px-4 py-6 gap-4">
              <Text className="text-sm font-medium leading-6 text-gray-900">
                Full name
              </Text>
              <Text className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                Margot Foster
              </Text>
            </View>
            <View className="px-4 py-6 gap-4">
              <Text className="text-sm font-medium leading-6 text-gray-900">
                Application for
              </Text>
              <Text className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                Backend Developer
              </Text>
            </View>
            <View className="px-4 py-6 gap-4">
              <Text className="text-sm font-medium leading-6 text-gray-900">
                Email Address
              </Text>
              <Text className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                margotfoster@example.com
              </Text>
            </View>
            <View className="px-4 py-6 gap-4">
              <Text className="text-sm font-medium leading-6 text-gray-900">
                Salary expectation
              </Text>
              <Text className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                $120,000
              </Text>
            </View>
            <View className="px-4 py-6 gap-4">
              <Text className="text-sm font-medium leading-6 text-gray-900">
                About
              </Text>
              <Text className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                consequat sint. Sit id mollit nulla mollit nostrud in ea officia
                proident. Irure nostrud pariatur mollit ad adipisicing
                reprehenderit deserunt qui eu.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default withExpoSnack(Index);
