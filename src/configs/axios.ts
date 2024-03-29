//import { REACT_APP_BASE_API, } from '@env'
import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:8000/api/',
}); 

export const headerAPI = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }