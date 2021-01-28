import React from 'react';
import {scaleSize} from '@styles/mixins';
import {AnimateItTiming, Button, Flex} from '@components';
import {usersStore} from '@stores';
import {TextFamily} from '@styles/base';

const FooterButton = (props: {loading: boolean, canLoadMore: boolean, count: number}) => {
  return (
    <Flex full container styles={{position: 'absolute', bottom: scaleSize(15)}}>
      <AnimateItTiming
        remove
        show={!props.loading && props.canLoadMore}
        style={{width: '100%'}}
        toConfig={{delay: 500, duration: 300}}
        interpolations={[{
          outputRange: [0, 1],
          name: 'opacity',
          dir: 'both'
        }]}>
        <Button family={TextFamily.BOLD} styles={{marginTop: scaleSize(15)}} size={18} click={() => usersStore.loadMore()} title={'Load +' + props.count} full />
      </AnimateItTiming>
    </Flex>
  );
};

export default FooterButton;
