import { authApi } from "../api/axios";
class FreelancerAuthService{
    Login(login){
        return authApi.post('/login',login);
    }

    Signup(signup){
        return authApi.post('/signup',signup);
    }
}

export default new FreelancerAuthService();