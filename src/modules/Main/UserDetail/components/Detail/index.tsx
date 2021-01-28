import React from 'react';
import {AnimateItTiming, Text, Flex} from '@components';
import {scaleSize} from '@styles/mixins';
import {AI, TextAlign} from '@types';
import {Colors, TextFamily} from '@styles/base';

const Detail = ({fullname, email}: {fullname: string, email: string}) => {
  return (
    <AnimateItTiming toConfig={{delay: 700, duration: 600}} interpolations={[{
      name: 'translateY',
      outputRange: [-100, 0],
      dir: 'to'
    }, {
      name: 'opacity',
      outputRange: [0, 1],
      dir: 'to'
    }]}>
      <Flex full styles={{marginBottom: scaleSize(40)}} ai={AI.center}>
        <Text styles={{marginBottom: 10}} family={TextFamily.SEMIBOLD} size={25}
              textAlign={TextAlign.center}>
          {fullname}
        </Text>
      
        <Text family={TextFamily.REGULAR} size={15} color={Colors.FONT_SECOND} textAlign={TextAlign.center}>
          {email}
        </Text>
      </Flex>
    </AnimateItTiming>
  );
};

export default Detail;
