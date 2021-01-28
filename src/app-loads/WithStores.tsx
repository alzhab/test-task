import React, {Component} from 'react';
import {Provider} from 'mobx-react';
import {loadingStore, modalStore, noticeMessageStore, userDetailStore, usersStore} from '@stores';

const stores = {
  loadingStore,
  noticeMessageStore,
  modalStore,
  usersStore,
  userDetailStore
};

class WithStores extends Component {
  render() {
    return <Provider {...stores}>{this.props.children}</Provider>;
  }
}

export default WithStores;
