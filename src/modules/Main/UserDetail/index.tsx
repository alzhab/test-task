import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {AnimateItTiming, Button, Flex, Header, Text} from '@components';
import {observer} from 'mobx-react';
import {userDetailStore} from '@stores';
import {Colors, COLORS, TextFamily} from '@styles/base';
import {scaleSize} from '@styles/mixins';
import {CONTAINER_HOR_PADDING, CONTAINER_VER_PADDING} from '@styles/spacing';
import LoadingSmall from '../../../components/molecules/LoadingSmall';
import {AI, DIR, JC, TextAlign} from '@types';
import {Avatar, Card} from './components';
import Detail from './components/Detail';
import {PhoneIcon} from '@icons';
import {openPhone} from '@utils';

@observer
class UserDetail extends Component {
  componentDidMount(): void {
    userDetailStore.getUser();
  }
  
  render() {
    const loading = userDetailStore.loading;
    const user = userDetailStore.data;
    const avatarRadius = 100;
    const fullname = user ? `${user.first_name} ${user.last_name}` : 'loading...';
    const email = user ? user.email : 'loading...';
    
    return (
      <Flex full size={1}>
        <Header back title={'User Info'}/>
        
        <Flex full size={1}>
          <LoadingSmall show={loading}/>
          
          {
            user ? (
              <ScrollView
                contentContainerStyle={{paddingHorizontal: CONTAINER_HOR_PADDING, paddingBottom: CONTAINER_VER_PADDING}}
                style={{width: '100%'}}>
                <Card avatarRadius={avatarRadius} >
                  <Avatar avatarRadius={avatarRadius} avatar={user.avatar} />
  
                  <Detail fullname={fullname} email={email}/>
  
                  <AnimateItTiming toConfig={{delay: 1100, duration: 600}} style={{width: '100%', marginBottom: scaleSize(30)}} interpolations={[{
                    name: 'scaleX',
                    outputRange: [0, 1],
                    dir: 'to'
                  }]}>
                    <Flex dir={DIR.row} full jc={JC.spaceAround}>
      
                      <Flex ai={AI.center}>
                        <Text family={TextFamily.SEMIBOLD} size={14}
                              color={Colors.FONT_SECOND}
                              styles={{marginBottom: 10}}
                              textAlign={TextAlign.center}>
                          Role
                        </Text>
        
                        <Text family={TextFamily.SEMIBOLD} size={18}
                              textAlign={TextAlign.center}>
                          No Role
                        </Text>
                      </Flex>
      
                      <Flex styles={{width: 1, height: 50, backgroundColor: COLORS.BORDER}}/>
      
                      <Flex ai={AI.center}>
                        <Text family={TextFamily.SEMIBOLD} size={14}
                              color={Colors.FONT_SECOND}
                              styles={{marginBottom: 10}}
                              textAlign={TextAlign.center}>
                          Team
                        </Text>
        
                        <Text family={TextFamily.SEMIBOLD} size={18}
                              textAlign={TextAlign.center}>
                          No Team
                        </Text>
                      </Flex>
                    </Flex>
                  </AnimateItTiming>
  
                  <AnimateItTiming toConfig={{delay: 1500, duration: 600}} interpolations={[{
                    name: 'scale',
                    outputRange: [0, 1],
                    dir: 'to'
                  }]}>
                    <Button click={() => {openPhone('+ 7 700 109 8209')}} empty styles={{width: scaleSize(50), height: scaleSize(50), borderRadius: 50}}>
                      <PhoneIcon color={COLORS.FONT_LIGHT} size={20} />
                    </Button>
                  </AnimateItTiming>
                  
                </Card>
              </ScrollView>
            ) : null
          }
        </Flex>
      </Flex>
    );
  }
}

export default UserDetail;
