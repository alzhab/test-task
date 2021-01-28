import {action, makeAutoObservable} from 'mobx';
import usersApi, {UserI} from '../api/users.api';
import {catchErrors, isObjectEmpty} from '@utils';
import noticeMessageStore, {NoticeTypeEnum} from './NoticeMessageStore';
import navigate from '@navigations/RootNavigation';
import {Navigations} from '@types';

class UserDetailStore {
  userId: number | null = null;
  data: UserI | null = null;
  loading: boolean = false;
  
  constructor() {
    makeAutoObservable(this);
  }
  
  @action getUser = (): void => {
    const id = this.userId;
    
    if (id) {
      this.setLoading(true);
  
      this.setData(null);
  
      setTimeout(() => {
        usersApi.getById(id)
          .then(res => {
            if (!isObjectEmpty(res)) {
              this.setData(res);
            } else {
              noticeMessageStore.showMessage('User not found', NoticeTypeEnum.error);
              navigate(Navigations.UsersList);
            }
          })
          .catch(catchErrors.storeCatchError)
          .finally(() => this.setLoading(false));
      }, 3000)
    } else {
      noticeMessageStore.showMessage('User Id not defined', NoticeTypeEnum.error);
      navigate(Navigations.UsersList);
    }
  };
  
  @action
  private setLoading(val: boolean) {
    this.loading = val;
  }
  
  @action
  private setData(data: UserI | null) {
    this.data = data;
  }
  
  @action
  setUserId(id: number) {
    this.userId = id;
    navigate(Navigations.UsersDetail);
  }
}

const userDetailStore = new UserDetailStore();
export default userDetailStore;
