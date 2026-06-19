import mapOfSST from '@/assets/images/Map.png';
import pt1 from '@/assets/images/Point.png';
import { Link } from 'expo-router';
import { Image, ImageBackground, StyleSheet, useWindowDimensions, View } from 'react-native';

export default function Map() {
const  {width , height}= useWindowDimensions();
  return (
    <View style={styles.container}>
      <ImageBackground source={mapOfSST} resizeMode='cover' style={styles.MapView}>
      <Link href='/assembly' style={[{position: 'absolute'},{left: width * 0.3},{top: '16%'}]}>
      <Image source={pt1}/>
      </Link>
      </ImageBackground>
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
