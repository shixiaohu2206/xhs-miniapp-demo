import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.less";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  const aaa = { text: "1111" };
  const bbb = { text: "2222" };

  return (
    <View className="index">
      <aaa-bbb configB={aaa} config={bbb}></aaa-bbb>
      <Text>Hello world!</Text>
    </View>
  );
}
