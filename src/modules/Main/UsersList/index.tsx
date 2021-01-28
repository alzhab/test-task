import React, {Component, ReactElement} from 'react';
import {Flex, Header} from '@components';
import {observer} from 'mobx-react';
import {AI, DIR, JC} from '@types';
import {userDetailStore, usersStore} from '@stores';
import LoadingSmall from '../../../components/molecules/LoadingSmall';
import {Filters, FooterButton, List} from './components';
import FiletrButton from './components/FilterButton';

@observer
export default class Start extends Component {
  componentDidMount(): void {
    usersStore.getUsers();
  }
  
  render(): ReactElement {
    const users = usersStore.data.data;
    const canLoadMore = users.length < usersStore.data.total;
    console.log(canLoadMore);
    const loading = usersStore.loading;
    const openFilter = usersStore.openFilter;
    const countPerPage = usersStore.data.per_page;
    const total = usersStore.data.total;
    const filters = [...new Set([1, 3, 6, 10, total])];

    return (
      <Flex full ai={AI.center} jc={JC.center} size={1}>
        <Header title={'Users'} right={(
          <FiletrButton openFilter={openFilter} setOpenFilter={(val) => usersStore.setOpenFilter(val)} />
        )}/>
        
        <Flex full size={1} styles={{position: 'relative'}}>
          <List getDetail={(id: number) => userDetailStore.setUserId(id)} users={users}/>
          
          <FooterButton count={countPerPage} loading={loading} canLoadMore={canLoadMore}/>
          
          <LoadingSmall show={loading}/>
          
          <Filters filters={filters} openFilter={openFilter} countPerPage={countPerPage} setFilter={(data) => usersStore.setFilter(data)}/>
        </Flex>
      </Flex>
    );
  }
}

