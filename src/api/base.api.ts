import {CountOptions, CreateOptions, FindOptions, UpdateOptions} from 'sequelize';
import {api} from './constants';
import axios from 'axios';

export class BaseApi<T, C = T, P = T> {
  readonly api: string;
  
  constructor(
    path: string,
  ) {
    this.api = `${api}/${path}`
  }
  
  async getAll(options?: FindOptions<T>, token?: string): Promise<T[]> {
    return axios.get(`${this.api}`, {
      headers: this.getHeaders(token),
      params: this.getParams(options)
    }).then(res => res.data);
  };
  
  async getById(id: number, options?: FindOptions<T>, token?: string): Promise<T> {
    return axios.get(`${this.api}/${id}`, {
      headers: this.getHeaders(token),
      params: this.getParams(options)
    }).then(res => res.data.data || {});
  };
  
  async post(data: C, options?: CreateOptions, token?: string): Promise<T> {
    return axios.post(`${this.api}`, data,{
      headers: this.getHeaders(token),
      params: this.getParams(options)
    });
  };
  
  async destroyById(id: number, token?: string): Promise<T> {
    return axios.delete(`${this.api}/${id}`, {
      headers: this.getHeaders(token),
    });
  };
  
  async count(options: CountOptions, token?: string): Promise<number> {
    return axios.get(`${this.api}/count`, {
      headers: this.getHeaders(token),
      params: this.getParams(options)
    });
  };
  
  async patch(data: P, options: UpdateOptions, token?: string): Promise<T> {
    return axios.patch(`${this.api}`, data,{
      headers: this.getHeaders(token),
      params: this.getParams(options)
    });
  };
  
  getHeaders(token: string = '') {
    const headers: {Authorization?: string} = {};
    
    if (token) {
      headers.Authorization = `Bearer ${token}`
    }
    
    return
  }
  
  getParams(options: any = null) {
    if (options) {
      return {
        options
      }
    } else {
      return {}
    }
  }
}
