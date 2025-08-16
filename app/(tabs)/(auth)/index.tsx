import { Button } from "@/components/nativewindui/Button";
import { Text } from "@/components/nativewindui/Text";
import { useRouter } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();
  const onLoginPress = () => {
    router.navigate("/login");
  };

  return (
    <SafeAreaView className="flex justify-center items-center h-full">
      <Button className="bg-blue-500 px-5 py-3" onPress={onLoginPress}>
        <Text>Login</Text>
      </Button>
    </SafeAreaView>
  );
}
