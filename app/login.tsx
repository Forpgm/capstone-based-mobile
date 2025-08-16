import { Button } from "@/components/nativewindui/Button";
import { Text } from "@/components/nativewindui/Text";
import { COLORS } from "@/theme/colors";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TextInputInteractive from "react-native-text-input-interactive";

// Google Icon Component
const GoogleIcon = () => (
  <View style={{ marginRight: 8 }}>
    <Ionicons name="logo-google" size={20} color="black" />
  </View>
);
export default function Login() {
  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaView className="flex flex-1 bg-white px-5">
      <View className="flex-1 justify-center">
        {/* Welcome */}
        <View>
          <Text className="font-bold text-4xl">Hello</Text>
          <Text className="font-bold text-4xl">Welcome back</Text>
        </View>

        <View className="flex flex-row items-center mb-10 mt-2">
          <Text className="text-lg" style={{ color: COLORS.light.grey3 }}>
            If you are new /{" "}
          </Text>
          <TouchableOpacity>
            <Text
              className="font-semibold text-lg"
              style={{ color: COLORS.light.grey3 }}
            >
              Sign Up here
            </Text>
          </TouchableOpacity>
        </View>

        <TextInputInteractive
          placeholder="Email/Phone Number"
          className="my-2"
        />

        <View className="my-4">
          <TextInputInteractive
            placeholder="Password"
            secureTextEntry={!visible}
            style={{ paddingRight: 40 }}
          />
          <TouchableOpacity
            onPress={() => setVisible(!visible)}
            style={{
              position: "absolute",
              right: 20,
              top: 15,
            }}
          >
            <Ionicons name={visible ? "eye" : "eye-off"} size={20} />
          </TouchableOpacity>
        </View>

        <View className="flex flex-row gap-2">
          <Text className="text-md" style={{ color: COLORS.light.grey3 }}>
            Forgot Password?
          </Text>
          <TouchableOpacity>
            <Text style={{ color: COLORS.light.grey }}>Reset</Text>
          </TouchableOpacity>
        </View>

        <View className="mt-7">
          <Button style={{ backgroundColor: COLORS.black }}>
            <Text style={{ color: COLORS.white }}>Login</Text>
          </Button>
          <Text className="text-center my-4">Or</Text>
          <Button style={{ backgroundColor: COLORS.white }} className="border">
            <GoogleIcon />
            <Text className="text-black">Login with Google</Text>
          </Button>
        </View>
      </View>

      {/* Skip Now */}
      <TouchableOpacity>
        <Text
          className="text-center text-md mb-10"
          style={{ color: COLORS.light.grey4 }}
        >
          Skip Now
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
