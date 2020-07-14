import React from 'react';
import { StyleSheet, Text, View ,Linking,Image,FlatList} from 'react-native';
import data from '../../content/ways_to_contribute.json'
export default function WaysToContribute() {

  const Items=[
    {key:'1',head:data.Code.Header,des:data.Code.Description,link:data.Code.link,img_src:require('../../assets/code.png')},

    {key:'2',head:data.Doc.Header,des:data.Doc.Description,link:data.Doc.link,img_src:require('../../assets/doc.png')},

    {key:'3',head:data.design.Header,des:data.design.Description,link:data.design.link,img_src:require('../../assets/design.png')},

    {key:'4',head:data.test.Header,des:data.test.Description,link:data.test.link,img_src:require('../../assets/test.png')},

    {key:'5',head:data.out.Header,des:data.out.Description,link:data.out.link,img_src:require('../../assets/out.png')},

    {key:'6',head:data.project.Header,des:data.project.Description,link:data.project.link,img_src:require('../../assets/project.png')},
  ]
  


  return (
 <View style={styles.container}>
      {/* <Text>My First React Native App</Text> */}


    <View style={styles.starting}>
          <Text style={[styles.setColorGiven,styles.Header]}>{data.Title.Header}</Text>

          <Text style={[styles.setColorGiven,styles.description]}>{data.Title.Header}</Text>
    </View>


    <FlatList
       data={Items}
       renderItem={({item , index })=>{

       		 if(index%2===0){
		

			return (

        <View style={styles.item}>

        <Image style={{width:346,height:270}} source={item.img_src}/>
  
        <View style={{marginLeft:32}}>
         <Text style={[styles.setColorGiven,styles.Header]}>{ item.head }</Text>
         <Text style={[styles.setColorGiven,styles.description]} onPress={() => Linking.openURL(item.link)}>Zulip channel</Text>
       <Text style={[styles.setColorGiven,styles.description]}>{item.des}</Text>
        </View>
  
      </View>

       )

     		 }else{


		return (

        <View style={styles.item}>

        <View style={{marginRight:32}}>
         <Text style={[styles.setColorGiven,styles.Header]}>{ item.head }</Text>
         <Text style={[styles.setColorGiven,styles.description]} onPress={() => Linking.openURL(item.link)}>Zulip channel</Text>
       <Text style={[styles.setColorGiven,styles.description]}>{item.des}</Text>
        </View>

        <Image style={{width:346,height:270}} source={item.img_src}/>
  
      </View>

       )

         	}

       }

    }

    />


   

</View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#b4b5c8',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  border:{
    borderBottomColor:'black',
    borderTopWidth:1,
    marginTop:32,
    marginLeft:32,
    marginRight:32,
    opacity:0.3
  },
  starting:{
    marginTop:64,
    marginLeft:32,
    marginRight:32
  },
  Header:{
     fontSize:32,
     fontWeight:'500',
     fontFamily:'Avenir'
  },
  description:{
    fontSize:18,
    fontWeight:'300',
    marginTop:16,
    fontFamily:'Avenir'
  },
  setColorGiven:{
    color:'#103B81'
  },
  item:{
    marginTop:32,
    marginLeft:32,
    marginRight:32,
    flexDirection:'row'
  }
});

