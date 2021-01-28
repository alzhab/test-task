import React from 'react';
import {Props} from './interfaces';
import {AI, DIR, JC} from '@types';
import {scaleSize} from '@styles/mixins';
import {Flex, Text} from '../../atoms';

const Section = (props: Props) => {
  return (
    <Flex full styles={{marginBottom: scaleSize(props.bottom || 30), ...(props.style || {})}}>
      <Flex full
            container={props.headerContainer}
            dir={DIR.row}
            ai={AI.center}
            jc={JC.spaceBetween}
            styles={{marginBottom: scaleSize(props.headerBottom || scaleSize(17))}}>
        <Text size={20}>{props.title}</Text>
        
        <Flex>
          {props.right}
        </Flex>
      </Flex>
      
      <Flex container={props.contentContainer}>
        {props.children}
      </Flex>
    </Flex>
  );
};

export default Section;
