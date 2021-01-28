import React, {Component, ReactElement} from 'react';
import Container from '@navigations/Container';
import {Splash} from '@modules';
import {COLORS} from '@styles/base';
import {Platform, StatusBar} from 'react-native';
import WithStores from './app-loads/WithStores';
import WithOnboarding from './app-loads/WithtOnboarding';

class App extends Component {
  state = {
    onBoardingLoaded: false
  };
  
  render(): ReactElement {
    const loading = !this.state.onBoardingLoaded;
  
    return (
      <>
        <StatusBar translucent={Platform.OS === 'android'}
                   backgroundColor={Platform.OS === 'ios' ? COLORS.PRIMARY : 'transparent'}
                   barStyle={'dark-content'}/>
        <WithOnboarding hideSplash={() => this.setState({onBoardingLoaded: true})}>
          {!loading ? (
            <WithStores>
              <Container/>
            </WithStores>
          ) : null}
          <Splash show={loading}/>
        </WithOnboarding>
      </>
    );
  }
}

export default App;
