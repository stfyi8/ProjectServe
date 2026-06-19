import { Image } from 'expo-image';
import { Pressable, StyleSheet, useWindowDimensions, View } from 'react-native';
export default function Map() {
const  {width , height}= useWindowDimensions();
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/Map.png')} style={[styles.MapView, { resizeMode: 'cover',} ]}/>
      <Pressable></Pressable>
      <Image source={require('@/assets/images/Point.png')} style={[{position: 'absolute'},{left: width * 0.6},{top: '15%'}]}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4F0C7',
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 3,
  },
  MapView: {
    flex: 1,
    width: '100%',
    height: undefined,
    aspectRatio: 16/9,
  },
  
});
