import React from 'react';
import {AnimateItTiming, Flex, Image} from '@components';
import {COLORS} from '@styles/base';
import {scaleSize} from '@styles/mixins';

const Avatar = ({avatarRadius, avatar}: {avatarRadius: number, avatar: string}) => {
  return (
    <AnimateItTiming toConfig={{duration: 600}} interpolations={[{
      name: 'scale',
      outputRange: [0, 1],
      dir: 'to'
    }]}>
      <Flex styles={{
        borderWidth: 5,
        borderColor: COLORS.SECOND_BG,
        width: scaleSize(avatarRadius),
        height: scaleSize(avatarRadius),
        borderRadius: avatarRadius,
        overflow: 'hidden',
        marginTop: scaleSize(-avatarRadius / 2),
        marginBottom: scaleSize(35)
      }}>
        <Image source={{uri: avatar}} resizeMode={'cover'}/>
      </Flex>
    </AnimateItTiming>
  );
};

export default Avatar;
