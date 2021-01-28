import {StyleSheet} from 'react-native';
import {scaleFont, scaleSize} from '@styles/mixins';
import {COLORS} from '@styles/base';

export const styles = StyleSheet.create({
  inputStyle: {
    width: '100%',
    fontSize: scaleFont(18),
    paddingBottom: scaleSize(16)
  },
  inputBox: {
    width: '100%',
    borderBottomWidth: 1,
    position: 'relative',
    marginTop: scaleSize(35)
  },
});

