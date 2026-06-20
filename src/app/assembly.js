import { Component } from 'react';
import { ImageBackground, Pressable, StyleSheet, Text, TouchableHighlight, View } from "react-native";
var arr1 =[
  {image:require('@/assets/images/morningAssembly/assembly1.png')},
  {image:require('@/assets/images/morningAssembly/assembly2.png')},
  {image:require('@/assets/images/morningAssembly/assembly3.png')},
  {image:require('@/assets/images/morningAssembly/assembly4.png')},
  {image:require('@/assets/images/morningAssembly/assembly5.png')},
  {image:require('@/assets/images/morningAssembly/assembly6.png')},
  {image:require('@/assets/images/morningAssembly/assembly7.png')},
  {image:require('@/assets/images/morningAssembly/assembly8.png')},
  {image:require('@/assets/images/morningAssembly/assembly9.png')},
  {image:require('@/assets/images/morningAssembly/assembly10.png')},
  {image:require('@/assets/images/morningAssembly/assembly11.png')},
  {image:require('@/assets/images/morningAssembly/assembly12.png')},
  {image:require('@/assets/images/morningAssembly/assembly13.png')},
];
var arr2 =[
  {image:require('@/assets/images/morningAssembly/pink.png')},
]
class Assembly extends Component{

    constructor(props)
    {
      super(props);
      this.state = {
        counter:0, // start counter from 0
      }
    }
    ChangeImage(button)
    {
      // button option 1
      if (this.state.counter == arr1.length - 1) this.setState(null)// this.state.counter == current image n the array, if it is at the last image, cannot continue to press
      else this.setState({counter: this.state.counter + 1}) // else counter +1 == move next view

      //button option 2
      if (this.state.counter == arr2.length - 1) this.setState(null)
      else this.setState({counter: this.state.counter + 1})
    }

   
    render(){
      if (this.state.counter != arr1.length){
      return(
        <View style = {styles.container}>
          <ImageBackground source = {arr1[this.state.counter].image} resizeMode='cover' style={styles.view}/>
          <Pressable  onPress={() => {this.ChangeImage(1)}}  style={styles.button}> 
            <Text style={styles.text}>Next</Text>
          </Pressable>
           {/* <TouchableHighlight  onPress={() => {this.ChangeImage(1)}} underlayColor= "white" activeOpacity={0.1} style={styles.button}>
            <Text style={styles.text}>Next</Text>
          </TouchableHighlight> */}
        </View>
      )
    } else {
      return(
        <View style = {styles.container}>
           <TouchableHighlight  onPress={() => {}} underlayColor="white">
            <Text>option 1</Text>
          </TouchableHighlight>
          <TouchableHighlight  onPress={() => {}} underlayColor="white">
            <Text>option 2</Text>
          </TouchableHighlight>
      </View>
      )
    }
    }
  }


export default Assembly;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  view: {
    flex: 1,
    width: '100%',
    height: '110%',
    top: '-10%',
    aspectRatio: 23/9
  },
  button: {
    flex: 1,
    position: 'absolute',
    left:"85%",
    top:"85%",
    backgroundColor: '#2196F3',
    padding: 7,
    paddingHorizontal: 30,
    borderRadius: 20
  },
  text: {
   fontSize: 16 ,
   color: "#f5efd6",
   fontWeight:'bold'
  },
});


