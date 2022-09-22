import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { auth, setAuth } = useAuth();

    const refresh = async () => {
        console.log("----------------------------- Using refresh token --------------------------------");
        console.log("IN USE REFRESHTOKEN: " + `Bearer ${auth?.refreshToken}`)
        const response = await axios.get('/api/token/refresh', {
            headers: { 'Authorization': `Bearer ${auth?.refreshToken}`,'Access-Control-Allow-Credentials':true },
        });
        setAuth(prev => {
            console.log(JSON.stringify(prev));
            console.log(response.data.access_token);
            return { ...prev, 
                accessToken: response.data.access_token,
                refreshToken: response.data.refresh_token
             }
        });
        return response.data.access_token;
    }
    return refresh;
};

export default useRefreshToken;