import axios from 'axios';
import { AddRequest, addEndpoint, AddResponse, GetAllResponse, getAllEndpoint, SetAllRequest, setAllEndpoint, port } from '../../common/types';

export const apiRoot = `http://localhost:${port}/api`;

export const add = (body: AddRequest) => {
  return axios
    .post<AddResponse>(apiRoot + addEndpoint, body)
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
