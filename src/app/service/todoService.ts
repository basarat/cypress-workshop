import axios from 'axios';
import { TodoItem, CreateRequest, createEndpoint, CreateResponse, GetAllResponse, getAllEndpoint, SetAllRequest, setAllEndpoint } from '../../common/types';

export const apiRoot = 'http://localhost:8000/api';

export const create = (body: CreateRequest) => {
  return axios
    .post<CreateResponse>(apiRoot + createEndpoint, body)
    .then(res => res.data);
}

export const getAll = () => {
  return axios.get<GetAllResponse>(apiRoot + getAllEndpoint)
    .then(res => res.data);
}

export const setAll = (body: SetAllRequest) => {
  return axios.put<{}>(apiRoot + setAllEndpoint, body)
    .then(res => res.data);
}
