import React from 'react';
import {View, Text} from 'react-native';


export default function Greetings({props}){
  return(
    <View>
      <ul>
        <li>{props.menu}</li>
      </ul>
    </View>
  );
}