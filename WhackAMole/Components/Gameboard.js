import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Square from './Square';
import {connect} from 'react-redux';

const Gameboard = (props) => {

    const [timeLeft,setTimeLeft] = useState(10)

    useEffect(() => {
        if(!timeLeft) return
        const timerId = setInterval(() => {
            setTimeLeft(timeLeft -1)
        },1000)
    return () => clearInterval(timerId)
    }, [timeLeft])

  return (
    <View style={styles.container}>
      <Text>Whack A Mole App Gaming</Text>
      <Text>{timeLeft}</Text>
      <Text>{props.score}</Text>
      <View style={styles.game}>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  game: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300,
    paddingTop: 10,
  },

  mole: {
    flex: 1,

  }
});

const mapStateToProps = state => {
  return {
    score: state.score
  }
}

export default connect(mapStateToProps)(Gameboard);