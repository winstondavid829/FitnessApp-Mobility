import { View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native'
import React,{useState} from 'react'
import BeautyWebView from 'react-native-beauty-webview';


import { Colors, Fonts } from '../../constants'

const MusicCard = (props) => {
  const [visible, setVisible] = useState(false);
  return (
    <TouchableOpacity style={styles.container} onPress={()=>setVisible(!visible)}>
      
        <Image source={{uri:props.image}} style={styles.image}/>
      
      <View>
        <Text style={styles.songText}>{props.name}</Text>
        <Text style={styles.artistText}>Total Tracks: {props.tracks}</Text>
      </View>
        <BeautyWebView
          visible={visible} // Reguired for open and close
          onPressClose={() => setVisible(!visible)} // Reguired for closing the modal
          url={props.urlLink}
          // extraMenuItems={[
          //   {
          //     title: 'Extra Item',
          //     onPress: () => console.log('Extra Menu Item Clicked'),
          //   },
          // ]}
        />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        flexDirection:"row",
        backgroundColor:Colors.GREY,
        padding:10,
        marginVertical:6,
        borderRadius:5
    },
    image:{
        width:50,
        height:50,
        borderRadius:10,
        backgroundColor:Colors.LIGHTRED1,
        marginRight:15
    },
    songText:{
        fontFamily:Fonts.regularFont,
        color:Colors.BLACK
    },
    artistText:{
        fontFamily:Fonts.regularFont,
        color:Colors.BLACK
    }
})

export default MusicCard