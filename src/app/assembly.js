
import Grey from '@/assets/images/grey.png';
import { Pressable, StyleSheet, Text, View } from "react-native";
const trial =[Grey];
const TotalTrial = trial.length

const scroll = () => {
return(
  <View>
    <Pressable onPress={() => {TotalTime - 1}}></Pressable>
  </View>
);
};

export default function assembly() {
  return (
    <View style={styles.container}>
      <Text>trial</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
