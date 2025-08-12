//import { Button } from "@/components/nativewindui/Button";
import { Text } from "@/components/nativewindui/Text";
import { Icon } from "@roninoss/icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <>
      <SafeAreaView>
        <Icon name="play" color="white" size={21} />
        <Text>Welcome to the app</Text>
      </SafeAreaView>
    </>
  );
}
