import {BaseApi} from './base.api';
import {FindOptions} from 'sequelize';
import axios from 'axios';

export interface UserI {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface WithPage<T> {
  page: number,
  per_page: number,
  total: number,
  total_pages: number,
  data:  T[]
};

class UsersApi extends BaseApi<UserI> {
  constructor() {
    super('users');
  };
  
  async getWithPage(page: number = 1, perPage = 3): Promise<WithPage<UserI>> {
    return axios.get(`${this.api}`, {
      params: {
        page,
        'per_page': perPage
      }
    }).then(res => res.data);
  }
}

const usersApi = new UsersApi();

export default usersApi;
