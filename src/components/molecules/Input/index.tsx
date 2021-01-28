import React from 'react';
import {TextInput} from 'react-native';
import {scaleFont, scaleSize} from '@styles/mixins';
import {COLORS, Colors, TextSize} from '@styles/base';
import {AnimateItTiming, Flex, Text} from '../../atoms';
import {InputProps} from './interfaces';
import {TextInputMask} from 'react-native-masked-text';
import {styles} from './styles';

const Input = (props: InputProps) => {
  const inputStyle = {width: '100%', fontSize: scaleFont(18), paddingBottom: scaleSize(16)};
  
  return (
    <AnimateItTiming
      show={!!props.error}
      style={[styles.inputBox]}
      toConfig={{useNativeDriver: false}}
      fromConfig={{useNativeDriver: false}}
      interpolations={[{
        name: 'marginBottom',
        dir: 'both',
        outputRange: [0, 20]
      },{
        name: 'borderBottomColor',
        dir: 'both',
        outputRange: [COLORS.BORDER, COLORS.ERROR]
      }]}
    >
      <AnimateItTiming
        show={!!props.value.length}
        style={{
          position: 'absolute',
          bottom: scaleSize(18),
        }}
        interpolations={[{
          name: 'translateY',
          outputRange: [0, -scaleSize(20)],
          dir: 'both'
        }]}>
        <Text
          size={16}
          color={props.error ? Colors.ERROR : Colors.FONT_SECOND}>
          {props.placeholder}
        </Text>
      </AnimateItTiming>
      
      {
        props.mask
          ? (
            <TextInputMask
              type="custom"
              options={{mask: props.mask}}
              secureTextEntry={props.secureTextEntry}
              autoCapitalize='none'
              keyboardType={props.keyboardType || 'default'}
              style={[inputStyle]}
              value={props.value}
              caretHidden={props.caretHidden}
              onChangeText={(val: string) => {
                props.onChange(val)
              }}
            />
          ): (
            <TextInput
              secureTextEntry={props.secureTextEntry}
              autoCapitalize='none'
              value={props.value}
              multiline={props.textArea}
              keyboardType={props.keyboardType || 'default'}
              style={[inputStyle, {paddingLeft: 0}]}
              caretHidden={props.caretHidden}
              onChangeText={props.onChange}
            />
          )
      }
      
      <AnimateItTiming
        show={props.error ? props.error.length > 0 : false}
        style={{position: 'absolute', bottom: scaleSize(-20)}}
        remove
        interpolations={[{
          name: 'opacity',
          outputRange: [1, 0],
          dir: 'both'
        }]}>
        <Text
          size={TextSize.medium}
          color={Colors.ERROR}>
          {props.error}
        </Text>
      </AnimateItTiming>
    </AnimateItTiming>
  );
};

export default Input;
