import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { auth, setAuth } = useAuth();

    const refresh = async () => {
        console.log("IN USE REFRESHTOKEN: " + `Bearer ${auth?.refreshToken}`)
        const response = await axios.get('/api/token/refresh', {
            headers: { 'Authorization': `Bearer ${auth?.refreshToken}`,'Access-Control-Allow-Credentials':true },
            //withCredentials: true
        });
        setAuth(prev => {
            console.log(JSON.stringify(prev));
            console.log(response.data.access_token);
            return { ...prev, 
                //roles: response.data.roles, 
                accessToken: response.data.access_token,
                refreshToken: response.data.refresh_token
             }
        });
        return response.data.access_token;
    }
    return refresh;
};

export default useRefreshToken;