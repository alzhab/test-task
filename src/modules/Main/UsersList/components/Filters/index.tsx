import React from 'react';
import {ScrollView} from 'react-native';
import {AnimateItTiming, Button, Flex, Section} from '@components';
import {scaleSize, WINDOW_HEIGHT} from '@styles/mixins';
import {COLORS} from '@styles/base';
import {AI, ButtonTypes, DIR, JC} from '@types';

const Filters = (props: {
  filters: number[],
  openFilter: boolean,
  countPerPage: number,
  setFilter: (data: {per_page: number}) => void
}) => {
  const {filters, openFilter, countPerPage, setFilter} = props;
  
  return (
    <>
      <AnimateItTiming
        remove
        show={openFilter}
        interpolations={[{
          name: 'opacity',
          outputRange: [0, 1],
          dir: 'both'
        }]}
        style={{
          width: '100%',
          backgroundColor: 'rgba(0,0,0,0.24)',
          position: 'absolute',
          top: 0,
          bottom: 0
        }}>
        <Flex full/>
      </AnimateItTiming>
  
      <AnimateItTiming
        remove
        show={openFilter}
        interpolations={[{
          name: 'translateY',
          outputRange: [WINDOW_HEIGHT, 0],
          dir: 'both'
        }]}
        style={{
          width: '100%',
          borderTopRightRadius: 45,
          borderTopLeftRadius: 45,
          backgroundColor: COLORS.SECOND_BG,
          position: 'absolute',
          top: WINDOW_HEIGHT / 4,
          bottom: 0
        }}>
        <ScrollView contentContainerStyle={{width: '100%'}} style={{width: '100%', paddingTop: scaleSize(30)}}>
          <Flex full>
            <Section contentContainer headerContainer title={'Count to load'}>
              <Flex full dir={DIR.row} ai={AI.center} jc={JC.spaceBetween}>
                {
                  filters.map((count, index) => {
                    const isActive = countPerPage === count;
                    const isLast = index === filters.length - 1;
                
                    return (
                      <Button
                        key={count}
                        empty
                        title={isLast ? 'ALL' : count.toString()}
                        type={isActive ? ButtonTypes.PRIMARY : ButtonTypes.BORDERED}
                        click={() => {
                          if (!isActive) {
                            setFilter({per_page: count});
                          }
                        }}
                        styles={{paddingVertical: 13, paddingHorizontal: 15, borderRadius: 8}}
                      />
                    );
                  })
                }
              </Flex>
            </Section>
          </Flex>
        </ScrollView>
      </AnimateItTiming>
    </>
  );
};

export default Filters;
