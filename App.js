import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import TaskHistory from './components/TaskHistory';



NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <View className="flex-1 items-center bg-white">
      <View className="container flex flex-row p-12 bg-slate-200 w-10/12 mt-16 rounded-3xl justify-center">
        <View className="basis-1/2 bg-gray-600 items-center justify-center">

        </View>
        <View className="basis-1/2 bg-gray-300">
          <Text className="text-right py-2">Task 1</Text>
          <Text className="text-right py-2">Task 2</Text>
          <Text className="text-right py-2">Task 3</Text>
        </View>
      </View>
      <View className='items-center justify-center mt-1'>
        <Text className="text-sm text-gray-600 [text-shadow:_0_2px_4px_rgb(0_0_0_/_30%)]">Drag tasks to start timer</Text>
        <View className='-mt-2'>
          <FontAwesome name="long-arrow-right" size={22} color="#a3a3a3" />
        </View>
      </View>
      <TaskHistory />
    </View>
  );
}

