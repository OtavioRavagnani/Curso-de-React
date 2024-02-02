import axios from 'axios';

import { errorInterceptor } from './inteceptors/ErrorInterceptor';
import { responseInterceptor} from './inteceptors/ResponseInterceptor';
import { Environment } from '../../../environment/index';


const Api = axios.create({
  baseURL: Environment.URL_BASE,
});

Api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error),
);

export { Api };