import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { makeLocationSearch } from '../../services/useAppBusaquiApi';
export default class SearchBoxItem extends Component {
    doSearch(){
        makeLocationSearch( this.state.txt )
            .then((results)=>{
                this.setState({results});
            })
            .catch((error)=>{    
                alert("OCORREU UM ERRO.")
            });
    }
    render(){
        return(
            <TouchableHighlight style={styles.itemArea} onPress={()=>{}} underlayColor="#CCCCCC ">
                <Text style={{color:"#000",fontSize:16}}>{this.state.data.address}</Text>x
            </TouchableHighlight>
        );
    }
}
const styles = StyleSheet.create({
    itemArea: {
        height:50,
        justifyContent:'center',
        padding:10
    },
    itemTxt: {
        fontSize:16,
        color:"#000"
    }
});