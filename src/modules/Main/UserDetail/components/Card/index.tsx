import React from 'react';
import {AI} from '@types';
import {COLORS} from '@styles/base';
import {boxShadow, scaleSize} from '@styles/mixins';
import {Flex} from '@components';

const Card = (props: {children: any, avatarRadius: number}) => {
  
  return (
    <Flex full ai={AI.center} styles={{
      backgroundColor: COLORS.SECOND_BG,
      borderRadius: 15,
      marginTop: scaleSize(props.avatarRadius / 2) + 30,
      paddingBottom: scaleSize(30),
      ...boxShadow()
    }}>
      {props.children}
    </Flex>
  );
};

export default Card;
