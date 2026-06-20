import { Stack } from "expo-router";

export default function RootLayout() {
  return (
  <Stack screenOptions={{
    headerShown: true,

  }
  }>
  <Stack.Screen name='index' options={{headerShown: false, title:'Back to Map'}}/>
  <Stack.Screen name='MapView'/>
  <Stack.Screen name='assembly' options={{title:'Morning Assembly'}}/>
  </Stack>
);
}
