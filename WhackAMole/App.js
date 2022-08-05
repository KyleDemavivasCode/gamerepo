import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Gameboard from './Components/Gameboard';
import { provider } from 'react-redux';

export default function App() {
  return(
    <provider>
   <Gameboard/>
   </provider>
  )
}