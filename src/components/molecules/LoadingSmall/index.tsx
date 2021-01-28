import React from 'react';
import AnimateItTiming from '../../atoms/AnimateItTiming';
import {Text} from '../../atoms';
import LottieView from "lottie-react-native";
import {StyleSheet} from 'react-native';

const LoadingSmall = (props: { show: boolean }) => {
  return (
    <AnimateItTiming
      show={props.show}
      remove
      style={[StyleSheet.absoluteFill ,{
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }]}
      toConfig={{useNativeDriver: false}}
      fromConfig={{useNativeDriver: false}}
      interpolations={[{
        outputRange: [0, 1],
        name: 'opacity',
        dir: 'both',
      }, {
        outputRange: [-200, 0],
        name: 'translateY',
        dir: 'both',
      }]}>
      <LottieView
        style={{width: '80%'}}
        source={require('@assets/images/spinner.json')}
        autoPlay
        loop/>
    </AnimateItTiming>
  );
};

export default LoadingSmall;
