import React from "react";
import {Text,View,StyleSheet,TextInput,TouchableOpacity} from "react-native";

class HomeScreen extends React.Component{
    constructor(){
        super();
        this.state={
            text:"",
            isSearchPressed:false,
            word:"",
            lexicalCategory:'',
            examples:[],
            definition:""
        }
    }
    render(){
        return(
            <View>
                <TextInput style = {styles.input} onChangeText={text => {
                    this.setState({text:text,isSearchPressed:false,word:"Loading...",lexicalCategory:'',examples:[],definition:""})
                }}></TextInput>
            </View>
        )
    }
}

export default HomeScreen