import React, {ReactElement, useContext} from 'react';
import {AI, JC, Navigations, TextAlign} from '@types';
import {AnimateItTiming, Button, Flex, Text} from '@components';
import {OnboardingContext} from '@context';
import {useNavigation} from '@react-navigation/native';
import {ImageBackground} from 'react-native';
import {scaleSize, WINDOW_WIDTH} from '@styles/mixins';
import {LogoIcon} from '@icons';
import {Colors, COLORS} from '@styles/base';

const Onboarding = (): ReactElement => {
  const {hideOnboarding} = useContext(OnboardingContext);
  const navigation = useNavigation();
  
  const hide = () => {
    hideOnboarding();
    navigation.navigate(Navigations.Main);
  };
  
  return (
    <Flex size={1} ai={AI.center} jc={JC.center}>
      <ImageBackground
        style={{
          flex: 1,
          width: '100%',
          borderWidth: 0
        }}
        resizeMode={'cover'}
        source={require('@assets/images/onboarding_back.jpg')}
      >
        <Flex size={1.5}/>
        
        <Flex
          size={1}
          ai={AI.center}
          container
        >
          
          <AnimateItTiming
            toConfig={{delay: 500, duration: 700}}
            interpolations={[{
              dir: 'to',
              name: 'translateY',
              outputRange: [-100 ,0]
            }, {
              dir: 'to',
              name: 'opacity',
              outputRange: [0 ,1]
            }]}
          >
            <Text
              styles={{
                maxWidth: WINDOW_WIDTH * 0.7,
                marginBottom: scaleSize(10)
              }}
              color={Colors.FONT_LIGHT}
              size={48}
              textAlign={TextAlign.center}>
              Start Mobile !
            </Text>
          </AnimateItTiming>
  
  
          <AnimateItTiming
            toConfig={{delay: 1500, duration: 700}}
            interpolations={[{
              dir: 'to',
              name: 'translateY',
              outputRange: [-100 ,0]
            },{
              dir: 'to',
              name: 'opacity',
              outputRange: [0 ,1]
            }]}
          >
            <Text styles={{marginBottom: scaleSize(40)}} color={Colors.FONT_LIGHT}>
              Автор: Абдуали Альжан
            </Text>
          </AnimateItTiming>
        </Flex>
        
        <Flex ai={AI.center}
              container>
          <AnimateItTiming
            style={{width: '100%'}}
            toConfig={{delay: 2500, duration: 700}}
            interpolations={[{
              dir: 'to',
              name: 'opacity',
              outputRange: [0 ,1]
            }]}
          >
            <Button full click={hide} title={'Get Started'}/>
          </AnimateItTiming>
        </Flex>
  
        <Flex size={0.2}/>
      </ImageBackground>
    </Flex>
  );
};

export default Onboarding;
