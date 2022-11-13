import { create } from 'apisauce';
import authStorage from '../services/authentication/storage';
import { getToken } from '../auth/storage';

const apiClient = create({
    baseURL: "https://api.damshako.com"
})
 
apiClient.addAsyncRequestTransform(async (request) => {
    // GET AUTH TOKEN FROM REDUX USER OBJECT
    const authToken = await getToken();
    if(!authToken) return;
    return request.headers['Authorization'] = `Bearer ${authToken}`;
 });

export default apiClient;