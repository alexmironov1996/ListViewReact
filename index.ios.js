/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  ScrollView,
  View,
  ListView,
  Image,
  StyleSheet,
} from 'react-native'

class CustomView extends Component{
  
  render(){
    return(     
      <View style={{flex:1, flexDirection: 'row'}}>
        <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}}
          style={styles.circle}/>
        <View style={{flex:1, flexDirection:'column',
                     justifyContent: 'space-between'}}>
          <View style={{flex:3}}>
            <Text>{this.props.firstViewtext}</Text>
          </View>
          
          <View style={{flex:1,flexDirection:'row',
                       justifyContent: 'space-between'}}>
               <View style={{flex:1,height:30, backgroundColor:'red'}}>
                   <Text>{this.props.firstSubviewtext}</Text>
               </View>
               <View style={{flex:1,height:30, backgroundColor:'blue'}}>
                   <Text>{this.props.secondSubviewtext}</Text>
               </View>
               <View style={{flex:1,height:30, backgroundColor:'purple'}}>
                   <Text>{this.props.thirdSubviewtext}</Text>
               </View>
          </View>
        </View>
      </View>
    );
  }
}
class Pease extends Component{
  render(){
    return(
      <View style={{flex:1, backgroundColor:'red'}}>
         <Text>fefrf</Text>   
      </View>
        
    );
  }
}

function getRandomObject(){
  var substr="";
   for(var i=0; i<100; i++){
      substr=substr+getRandomWord()+" ";
    }
  return{
    firstViewtext:substr,
    firstSubviewtext:getRandomWord(),
    secondSubviewtext:getRandomWord(),
    thirdSubviewtext:getRandomWord(),
  }
}
function getRandomWord(){
  var wordsArray=["afgrefefsqsqs","bdawa","cwwdd","dfsdfds","efsdf","fsdfsdfsdfs"]
  return wordsArray[Math.floor(Math.random()*wordsArray.length)];
}
function getRandomArray(){
  var randomArray=[]
  var randomCount=Math.floor(Math.random()*20);
  for(var i=0; i<6; i++){
    //obj.setState(getRandomObject())
    randomArray.push(getRandomObject());
  }
  return randomArray;
}


class Project extends Component {  
  constructor(props) {
    super(props);
    
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {  
      dataSource: ds.cloneWithRows(getRandomArray())
    };
  }
  
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'powderblue'}}>
        <ListView style={{flex: 1}}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <CustomView firstViewtext={rowData.firstViewtext}
                                    firstSubviewtext={rowData.firstSubviewtext}
                                    secondSubviewtext={rowData.secondSubviewtext}
                                    thirdSubviewtext={rowData.thirdSubviewtext}
                                    /> }
        />
      </View>
    );
  }
}

 const styles = StyleSheet.create({
   circle: {
     borderRadius: 50,
     height: 100,
     width:100,
   },  
 });


AppRegistry.registerComponent('Project', () => Project);
