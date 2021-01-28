import {scaleSize} from './mixins';
import {Platform} from 'react-native';

export const CONTAINER_HOR_PADDING = scaleSize(25);
export const TABBAR_HEIGHT = scaleSize(64);
export const CONTAINER_VER_PADDING = scaleSize(Platform.OS === 'ios' ? 50 : 25);
export const MODAL_HOR_PADDING = scaleSize(16);
