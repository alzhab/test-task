import {StyleProp} from 'react-native';
import {Colors, TextFamily, TextSize} from '@styles/base';
import {ButtonTypes} from '@types';

export interface ButtonProps {
  title?: string,
  full?: boolean,
  size?: TextSize,
  family?: TextFamily,
  type?: ButtonTypes,
  styles?: StyleProp<any>,
  click: () => void,
  children?: any,
  solid?: boolean,
  color?: Colors,
  empty?: boolean
}

export interface ButtonStylesInterface {
  width?: string,
  backgroundColor?: string,
  borderRadius: number,
  borderWidth?: number,
  borderColor?: string,
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly',
  alignItems?: 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly',
}
