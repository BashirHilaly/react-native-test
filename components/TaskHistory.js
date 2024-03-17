import { Text, View } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";


NativeWindStyleSheet.setOutput({
  default: "native",
});

const TaskHistory = () => {
  return (
    <View className="container p-5 bg-slate-200 w-10/12 rounded-3xl justify-center">
        <Text className="">Test</Text>
    </View>
  )
}

export default TaskHistory;