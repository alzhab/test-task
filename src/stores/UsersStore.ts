import {action, makeAutoObservable} from 'mobx';
import usersApi, {UserI, WithPage} from '../api/users.api';
import {catchErrors} from '@utils';

class UsersStore {
  data: WithPage<UserI> = {
    page: 1,
    per_page: 3,
    total: 0,
    total_pages: 0,
    data:  []
  };
  // Если изначально loading false то
  loading: boolean = false;
  openFilter: boolean = false;
  
  constructor() {
    makeAutoObservable(this);
  }
  
  @action getUsers = (): void => {
    this.setLoading(true);
    
    usersApi.getWithPage(this.data.page, this.data.per_page)
      .then(res => {
        this.setData(res);
      })
      .catch(catchErrors.storeCatchError)
      .finally(() => this.setLoading(false));
  };
  
  @action loadMore = (): void => {
    this.setLoading(true);
  
    usersApi.getWithPage(++this.data.page, this.data.per_page)
      .then(res => {
        this.setData({
          ...this.data,
          data: [
            ...this.data.data,
            ...res.data,
          ]
        });
      })
      .catch(catchErrors.storeCatchError)
      .finally(() => this.setLoading(false));
  };
  
  @action
  private setData(data: WithPage<UserI>) {
    this.data = data;
  }
  
  @action
  private setLoading(val: boolean) {
    this.loading = val;
  }
  
  @action
  setOpenFilter(val: boolean) {
    if (!this.loading) {
      this.openFilter = val;
    }
  }
  
  @action
  setFilter(filter: {per_page: number} ) {
    this.setData({
      ...this.data,
      page: 1,
      per_page: filter.per_page || 3
    });
    
    this.setOpenFilter(false);
    
    this.getUsers()
  }
}

const usersStore = new UsersStore();
export default usersStore;
