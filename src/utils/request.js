import axios from 'axios';
const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});
export const get = async (apiPath, option = {}) => {
    const response = await request.get(apiPath, option);
    return response.data;
};
export default request;
