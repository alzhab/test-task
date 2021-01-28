import React from 'react';
import Scroll from '../../../../../components/atoms/Scroll';
import {scaleSize, WINDOW_WIDTH} from '@styles/mixins';
import {AnimateItTiming, Flex, UserCard} from '@components';
import {UserI} from '../../../../../api/users.api';

const List = (props: {users: UserI[], getDetail: (id: number) => void }) => {
  
  return (
    <Flex size={1} full>
      <Scroll
        style={{paddingBottom: scaleSize(100)}}
        container
        data={props.users}
        item={({item, index}) => (
          <AnimateItTiming
            toConfig={{delay: 500, duration: 600}}
            interpolations={[{
              outputRange: [-WINDOW_WIDTH, 0],
              name: 'translateX',
              dir: 'to'
            }]}>
            <UserCard click={() => props.getDetail(item.id)} item={item}/>
          </AnimateItTiming>
        )}
      />
    </Flex>
  );
};

export default List;
