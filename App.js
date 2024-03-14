import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <View className="flex-1 items-center bg-white">
      <View className="container flex flex-row p-8 bg-slate-200 w-10/12 mt-16 rounded-lg">
        <View className="basis-1/2 bg-gray-600">
          <Text>Time Spent</Text>
        </View>
        <View className="basis-1/2 bg-gray-300">
          <Text className="text-right py-2">Task 1</Text>
          <Text className="text-right py-2">Task 2</Text>
          <Text className="text-right py-2">Task 3</Text>
        </View>
      </View>
      <Text className="text-4xl text-orange-400">Woah</Text>
      <StatusBar style="auto" />
    </View>
  );
}

