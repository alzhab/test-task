import React from 'react';
import {AI, ButtonTypes, DIR} from '@types';
import {Colors, COLORS, TextFamily} from '@styles/base';
import {boxShadow, scaleSize} from '@styles/mixins';
import {Flex, Image, Text} from '../../atoms';
import {Button} from '../../molecules';

interface Props {
  item:
    {
      avatar: string,
      email: string,
      first_name: string,
      last_name: string
    },
  lastSeen?: boolean,
  click: () => void
}

const UserCard = (props: Props) => {
  const {item} = props;
  
  return (
    <Button empty full type={ButtonTypes.EMPTY} click={() => {props.click()}}>
      <Flex ai={AI.center} full dir={DIR.row} styles={{
        borderRadius: 15,
        backgroundColor: COLORS.FONT_LIGHT,
        paddingVertical: scaleSize(20),
        paddingHorizontal: scaleSize(20),
        marginTop: scaleSize(10),
        ...boxShadow()
      }}>
        <Flex styles={{maxWidth: '20%', width: 70, height: 70, borderRadius: 70, overflow: 'hidden', marginRight: scaleSize(20)}}>
          <Image source={{uri: item.avatar}} resizeMode={'cover'} />
        </Flex>
      
        <Flex styles={{maxWidth: '80%', paddingRight: 10, overflow: 'hidden'}}>
          <Text size={18} family={TextFamily.SEMIBOLD} styles={{marginBottom: 10}}>{item.first_name} {item.last_name}</Text>
          <Text size={18} color={Colors.FONT_SECOND}>{item.email}</Text>
        </Flex>
        
      </Flex>
    </Button>
  );
};

export default UserCard;
