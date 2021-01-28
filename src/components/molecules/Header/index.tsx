import React, {ReactElement} from 'react';
import {AI, ButtonTypes, DIR, JC, TextAlign} from '@types';
import {COLORS, TextFamily} from '@styles/base';
import {scaleSize} from '@styles/mixins';
import {Flex, Text} from '../../atoms';
import {CONTAINER_VER_PADDING} from '@styles/spacing';
import {Button} from '../../molecules';
import {useNavigation} from '@react-navigation/native';
import {BackIcon} from '@icons';

export interface Props {
  title: string,
  right?: ReactElement,
  back?: boolean
}

const Header = (props: Props) => {
  const right = props.right || null;
  const navigation = useNavigation();
  
  return (
    <Flex full
          dir={DIR.row}
          container
          ai={AI.center}
          jc={JC.spaceBetween}
          styles={{
            backgroundColor: COLORS.MAIN_BG,
            paddingTop: scaleSize(CONTAINER_VER_PADDING + 10),
            paddingBottom: scaleSize(20),
            borderBottomWidth: 1,
            borderBottomColor: 'rgba(0,0,0,0.09)'
          }}
    >
      <Flex styles={{width: '20%'}}>
        {
          props.back && (
            <Button
                    full
                    empty
                    type={ButtonTypes.EMPTY} click={() => navigation.goBack()}
                    styles={{alignItems: AI.flexStart, justifyContent: JC.flexStart}}
            >
              <Flex full>
                <BackIcon size={20} />
              </Flex>
            </Button>
          )
        }
      </Flex>
      
      <Text size={20}
            textAlign={TextAlign.center}
            family={TextFamily.BOLD}>{props.title}</Text>
      
      <Flex styles={{width: '20%'}} ai={AI.flexEnd}>
        {right && right}
      </Flex>
    </Flex>
  );
};

export default Header;
