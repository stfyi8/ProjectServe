import MapView from '@/app/MapView';
import { StyleSheet, View } from "react-native";
export default function Index() {
  return (
    <View style={styles.container}>
      <MapView/>
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
